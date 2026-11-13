import { fetchAuthSession } from 'aws-amplify/auth';
import {
  Database,
  Batch,
  CollectionReference,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  Listener,
  QuerySnapshot,
} from './localDatabase';

type Operation = { readonly __localOperation: 'increment' | 'arrayUnion'; readonly amount?: number; readonly values?: unknown[] };
class ApiHttpError extends Error {}

const collectionPaths: Record<string, string> = {
  orderRequests: 'order-requests',
  customers: 'laboratories',
};

const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

const createSnapshot = (documents: DocumentData[]): QuerySnapshot => {
  const docs: DocumentSnapshot[] = documents.map(document => ({
    id: String(document.id),
    data: () => ({ ...document }),
  }));
  return {
    docs,
    empty: docs.length === 0,
    forEach: callback => docs.forEach(callback),
  };
};

const isOperation = (value: unknown): value is Operation =>
  Boolean(value && typeof value === 'object' && '__localOperation' in value);

export class ApiDatabase implements Database {
  public readonly isRemote = true;
  private readonly baseUrl: string;
  private readonly listeners = new Map<string, Set<() => void>>();

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl.replace(/\/+$/, '');
  }

  collection(name: string) {
    return new ApiCollectionReference(this, name);
  }

  batch() {
    return new ApiBatch();
  }

  getCollection() {
    return {};
  }

  async request<T>(path: string, init?: RequestInit): Promise<T> {
    const session = await fetchAuthSession();
    const token = session.tokens?.accessToken?.toString();
    if (!token) throw new Error('An authenticated session is required to access the API.');

    const method = init?.method ?? 'GET';
    const canRetry = method === 'GET' || method === 'HEAD';
    let lastError: unknown;

    for (let attempt = 0; attempt < (canRetry ? 3 : 1); attempt += 1) {
      try {
        const response = await fetch(`${this.baseUrl}${path}`, {
          ...init,
          headers: {
            authorization: `Bearer ${token}`,
            'content-type': 'application/json',
            ...init?.headers,
          },
        });
        const text = await response.text();
        const body = text ? JSON.parse(text) as T & { message?: string } : undefined;
        if (!response.ok) {
          if (canRetry && response.status >= 500 && attempt < 2) {
            await new Promise(resolve => window.setTimeout(resolve, 250 * (attempt + 1)));
            continue;
          }
          throw new ApiHttpError(body && typeof body === 'object' && 'message' in body && body.message
            ? body.message
            : `API request failed with status ${response.status}.`);
        }
        return body as T;
      } catch (error) {
        lastError = error;
        if (!(error instanceof ApiHttpError) && attempt < (canRetry ? 2 : 0)) {
          await new Promise(resolve => window.setTimeout(resolve, 250 * (attempt + 1)));
          continue;
        }
        throw error;
      }
    }
    throw lastError instanceof Error ? lastError : new Error('API request failed.');
  }

  async getDocument(collection: string, id: string) {
    return this.request<DocumentData>(await this.documentPath(collection, id));
  }

  pathFor(collection: string) {
    return collectionPaths[collection] ?? collection;
  }

  subscribe(collection: string, refresh: () => void) {
    const listeners = this.listeners.get(collection) ?? new Set<() => void>();
    listeners.add(refresh);
    this.listeners.set(collection, listeners);
    return () => listeners.delete(refresh);
  }

  notify(collection: string) {
    this.listeners.get(collection)?.forEach(refresh => refresh());
  }

  async documentPath(collection: string, id: string) {
    if (collection !== 'notifications') {
      return `/${this.pathFor(collection)}/${encodeURIComponent(id)}`;
    }
    const session = await fetchAuthSession();
    const subject = session.tokens?.accessToken?.payload.sub;
    if (typeof subject !== 'string' || !subject) {
      throw new Error('An authenticated session is required to access notifications.');
    }
    return `/${this.pathFor(collection)}/${encodeURIComponent(subject)}`;
  }
}

class ApiCollectionReference implements CollectionReference {
  private readonly apiDatabase: ApiDatabase;
  private readonly collectionName: string;
  private readonly limitCount?: number;

  public constructor(database: ApiDatabase, collectionName: string, limitCount?: number) {
    this.apiDatabase = database;
    this.collectionName = collectionName;
    this.limitCount = limitCount;
  }

  doc(id = createId()) {
    return new ApiDocumentReference(this.apiDatabase, this.collectionName, id);
  }

  async add(data: DocumentData) {
    const reference = this.doc();
    await reference.set(data);
    return reference;
  }

  limit(count: number) {
    return new ApiCollectionReference(this.apiDatabase, this.collectionName, count);
  }

  async get() {
    const items: DocumentData[] = [];
    let nextToken: string | undefined;
    do {
      const params = new URLSearchParams({ limit: String(this.limitCount ?? 100) });
      if (nextToken) params.set('nextToken', nextToken);
      const result = await this.apiDatabase.request<{ items: DocumentData[]; nextToken?: string }>(
        `/${this.apiDatabase.pathFor(this.collectionName)}?${params.toString()}`,
      );
      items.push(...result.items);
      nextToken = result.nextToken;
    } while (nextToken && this.limitCount === undefined);
    return createSnapshot(items);
  }

  onSnapshot(listener: Listener) {
    let active = true;
    const refresh = async () => {
      try {
        const snapshot = await this.get();
        if (active) listener(snapshot);
      } catch (error) {
        console.error(`Unable to load ${this.collectionName} from the API:`, error);
      }
    };
    void refresh();
    const unsubscribe = this.apiDatabase.subscribe(this.collectionName, () => void refresh());
    const intervalId = window.setInterval(() => void refresh(), 30_000);
    return () => {
      active = false;
      unsubscribe();
      window.clearInterval(intervalId);
    };
  }
}

class ApiDocumentReference implements DocumentReference {
  public constructor(
    private readonly database: ApiDatabase,
    private readonly collectionName: string,
    public readonly id: string,
  ) {}

  async set(data: DocumentData, options?: { merge?: boolean }) {
    if (options?.merge) return this.update(data);
    await this.database.request(await this.database.documentPath(this.collectionName, this.id), {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    this.database.notify(this.collectionName);
  }

  async update(updates: DocumentData) {
    const existing = await this.database.getDocument(this.collectionName, this.id);
    const resolved = Object.fromEntries(Object.entries(updates).map(([key, value]) => {
      if (!isOperation(value)) return [key, value];
      if (value.__localOperation === 'increment') {
        return [key, Number(existing[key] ?? 0) + Number(value.amount ?? 0)];
      }
      const current = Array.isArray(existing[key]) ? existing[key] : [];
      return [key, [...new Set([...current, ...(value.values ?? [])])]];
    }));
    await this.database.request(await this.database.documentPath(this.collectionName, this.id), {
      method: 'PATCH',
      body: JSON.stringify(resolved),
    });
    this.database.notify(this.collectionName);
  }

  async delete() {
    await this.database.request(await this.database.documentPath(this.collectionName, this.id), {
      method: 'DELETE',
    });
    this.database.notify(this.collectionName);
  }
}

class ApiBatch implements Batch {
  private readonly operations: Array<() => Promise<void>> = [];

  set(reference: ApiDocumentReference, data: DocumentData) {
    this.operations.push(() => reference.set(data));
    return this;
  }

  update(reference: ApiDocumentReference, updates: DocumentData) {
    this.operations.push(() => reference.update(updates));
    return this;
  }

  delete(reference: ApiDocumentReference) {
    this.operations.push(() => reference.delete());
    return this;
  }

  async commit() {
    for (const operation of this.operations) await operation();
  }
}
