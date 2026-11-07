type DocumentData = Record<string, any>;
type Listener = (snapshot: { docs: { id: string; data: () => DocumentData }[]; forEach: (callback: (doc: { id: string; data: () => DocumentData }) => void) => void }) => void;

const STORAGE_KEY = 'invictus-manager-data';

const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

const readStore = (): Record<string, Record<string, DocumentData>> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Unable to read local application data:', error);
    return {};
  }
};

const writeStore = (store: Record<string, Record<string, DocumentData>>) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch (error) {
    console.error('Unable to save local application data:', error);
    throw error;
  }
};

const createSnapshot = (documents: Record<string, DocumentData>, limit?: number) => {
  const docs = Object.entries(documents)
    .slice(0, limit)
    .map(([id, data]) => ({ id, data: () => ({ ...data }) }));

  return {
    docs,
    empty: docs.length === 0,
    forEach: (callback: (doc: (typeof docs)[number]) => void) => docs.forEach(callback),
  };
};

const applyUpdate = (document: DocumentData, updates: DocumentData) => {
  const next = { ...document };
  Object.entries(updates).forEach(([key, value]) => {
    if (value && value.__localOperation === 'increment') {
      next[key] = (next[key] || 0) + value.amount;
    } else if (value && value.__localOperation === 'arrayUnion') {
      const current = Array.isArray(next[key]) ? next[key] : [];
      next[key] = [...new Set([...current, ...value.values])];
    } else {
      next[key] = value;
    }
  });
  return next;
};

class LocalDocumentReference {
  constructor(private readonly database: LocalDatabase, private readonly collectionName: string, private readonly id: string) {}

  update(updates: DocumentData) {
    this.database.update(this.collectionName, this.id, updates);
    return Promise.resolve();
  }

  delete() {
    this.database.delete(this.collectionName, this.id);
    return Promise.resolve();
  }

  set(data: DocumentData, options?: { merge?: boolean }) {
    this.database.set(this.collectionName, this.id, data, options?.merge);
    return Promise.resolve();
  }
}

class LocalCollectionReference {
  constructor(private readonly database: LocalDatabase, private readonly collectionName: string, private readonly limitCount?: number) {}

  doc(id = createId()) {
    return new LocalDocumentReference(this.database, this.collectionName, id);
  }

  add(data: DocumentData) {
    const reference = this.doc();
    return reference.set(data).then(() => reference);
  }

  limit(count: number) {
    return new LocalCollectionReference(this.database, this.collectionName, count);
  }

  get() {
    return Promise.resolve(createSnapshot(this.database.getCollection(this.collectionName), this.limitCount));
  }

  onSnapshot(listener: Listener) {
    listener(createSnapshot(this.database.getCollection(this.collectionName), this.limitCount));
    return this.database.subscribe(this.collectionName, () => {
      listener(createSnapshot(this.database.getCollection(this.collectionName), this.limitCount));
    });
  }
}

class LocalBatch {
  private readonly operations: (() => void)[] = [];

  set(reference: LocalDocumentReference, data: DocumentData) {
    this.operations.push(() => reference.set(data));
    return this;
  }

  update(reference: LocalDocumentReference, updates: DocumentData) {
    this.operations.push(() => reference.update(updates));
    return this;
  }

  delete(reference: LocalDocumentReference) {
    this.operations.push(() => reference.delete());
    return this;
  }

  commit() {
    this.operations.forEach(operation => operation());
    return Promise.resolve();
  }
}

export class LocalDatabase {
  private store = readStore();
  private readonly listeners = new Map<string, Set<() => void>>();

  collection(name: string) {
    return new LocalCollectionReference(this, name);
  }

  batch() {
    return new LocalBatch();
  }

  getCollection(name: string) {
    return this.store[name] || {};
  }

  set(collectionName: string, id: string, data: DocumentData, merge = false) {
    const collection = this.store[collectionName] || {};
    collection[id] = merge ? { ...collection[id], ...data } : { ...data };
    this.store[collectionName] = collection;
    this.persist(collectionName);
  }

  update(collectionName: string, id: string, updates: DocumentData) {
    const collection = this.store[collectionName] || {};
    if (!collection[id]) throw new Error(`Document ${collectionName}/${id} does not exist.`);
    collection[id] = applyUpdate(collection[id], updates);
    this.store[collectionName] = collection;
    this.persist(collectionName);
  }

  delete(collectionName: string, id: string) {
    const collection = this.store[collectionName] || {};
    delete collection[id];
    this.store[collectionName] = collection;
    this.persist(collectionName);
  }

  subscribe(collectionName: string, listener: () => void) {
    const collectionListeners = this.listeners.get(collectionName) || new Set();
    collectionListeners.add(listener);
    this.listeners.set(collectionName, collectionListeners);
    return () => collectionListeners.delete(listener);
  }

  private persist(changedCollection: string) {
    writeStore(this.store);
    this.listeners.get(changedCollection)?.forEach(listener => listener());
  }
}

export const LocalFieldValue = {
  increment: (amount: number) => ({ __localOperation: 'increment', amount }),
  arrayUnion: (...values: any[]) => ({ __localOperation: 'arrayUnion', values }),
};
