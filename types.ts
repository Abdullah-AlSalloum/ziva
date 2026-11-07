export interface User {
  id: string;
  name: string;
  description: string;
  password: string;
  hasSetPassword: boolean;
}

export interface InventoryItem {
  id: string;
  reference: string;
  name: string;
  type: string;
  quantity: number;
  managedBy: string; // User ID
  createdAt: string; // ISO String
}

export interface OrderItem {
  name: string;
  quantity: number;
}

export interface OrderRequest {
  id: string;
  userId: string; // User ID
  customerName: string;
  orderDetails: string | string[] | OrderItem[];
  createdAt: string; // ISO String
}

export type TaskStatus = 'To Do' | 'In Progress' | 'Completed';

export interface Task {
    id: string;
    description: string;
    assignedTo: string; // User ID
    createdBy: string; // User ID
    dueDate: string; // YYYY-MM-DD
    status: TaskStatus;
    createdAt: string; // ISO String
}

export interface DailyOrder {
    id: string;
    orderDetails: string;
    customerName: string;
    dateSent: string; // YYYY-MM-DD
    createdAt: string; // ISO String
}

export interface Contact {
  name: string;
  phoneNumber: string;
}

export interface Laboratory {
  id: string;
  name: string;
  googleMapsLink: string;
  contacts: Contact[];
  createdAt: string; // ISO String
}

export interface Backorder {
  id:string;
  userId: string; // User ID
  customerName: string;
  orderDetails: string | string[] | OrderItem[];
  createdAt: string; // ISO String
}

export enum Tab {
  Dashboard = 'DASHBOARD',
  Inventory = 'INVENTORY',
  Reorder = 'REORDER',
  OrderRequests = 'ORDER_REQUESTS',
  Tasks = 'TASKS',
  DailyOrders = 'DAILY_ORDERS',
  Laboratories = 'LABORATORIES',
  Backorder = 'BACKORDER',
}
