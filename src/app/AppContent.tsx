import React from 'react';
import { Backorder, DailyOrder, InventoryItem, Laboratory, OrderRequest, Tab, Task, TaskStatus, User } from '../types';
import DashboardSection from '../components/DashboardSection';
import InventorySection from '../components/InventorySection';
import ReorderSection from '../components/ReorderSection';
import OrderRequestSection from '../components/OrderRequestSection';
import TaskSection from '../components/TaskSection';
import DailyOrdersSection from '../components/DailyOrdersSection';
import CustomerSection from '../components/CustomerSection';
import BackorderSection from '../components/BackorderSection';
import UserManagementSection from '../components/UserManagementSection';

interface AppContentProps {
  activeTab: Tab;
  currentUser: User;
  users: User[];
  inventory: InventoryItem[];
  tasks: Task[];
  dailyOrders: DailyOrder[];
  orderRequests: OrderRequest[];
  laboratories: Laboratory[];
  backorders: Backorder[];
  onTabChange: (tab: Tab) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onAddItem: (item: Omit<InventoryItem, 'id' | 'managedBy' | 'createdAt'>) => void;
  onImportItems: (items: Omit<InventoryItem, 'id' | 'managedBy' | 'createdAt'>[]) => Promise<void>;
  onRemoveItem: (id: string) => Promise<void>;
  onUpdateItem: (id: string, updates: Partial<Omit<InventoryItem, 'id'>>) => void;
  onRestock: (id: string, quantity: number) => void;
  onAddOrderRequest: (order: Omit<OrderRequest, 'id' | 'userId' | 'createdAt'>) => void;
  onRemoveOrderRequest: (id: string) => Promise<void>;
  onMoveToBackorder: (order: OrderRequest) => Promise<void>;
  onAddTask: (task: Omit<Task, 'id' | 'createdBy' | 'createdAt'>) => void;
  onRemoveTask: (id: string) => Promise<void>;
  onUpdateTaskStatus: (id: string, status: TaskStatus) => void;
  onAddDailyOrder: (order: Omit<DailyOrder, 'id' | 'createdAt'>) => void;
  onRemoveDailyOrder: (id: string) => Promise<void>;
  onAddLaboratory: (laboratory: Omit<Laboratory, 'id' | 'createdAt'>) => void;
  onRemoveLaboratory: (id: string) => Promise<void>;
  onRemoveBackorder: (id: string) => Promise<void>;
  onAddUser: (user: Omit<User, 'id' | 'hasSetPassword'>) => void;
  onUpdateUser: (id: string, updates: Partial<User>) => void;
  onToggleUserStatus: (user: User) => void;
  onNotify: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const AppContent: React.FC<AppContentProps> = ({
  activeTab,
  currentUser,
  users,
  inventory,
  tasks,
  dailyOrders,
  orderRequests,
  laboratories,
  backorders,
  onTabChange,
  onUpdateQuantity,
  onAddItem,
  onImportItems,
  onRemoveItem,
  onUpdateItem,
  onRestock,
  onAddOrderRequest,
  onRemoveOrderRequest,
  onMoveToBackorder,
  onAddTask,
  onRemoveTask,
  onUpdateTaskStatus,
  onAddDailyOrder,
  onRemoveDailyOrder,
  onAddLaboratory,
  onRemoveLaboratory,
  onRemoveBackorder,
  onAddUser,
  onUpdateUser,
  onToggleUserStatus,
  onNotify,
}) => {
  switch (activeTab) {
    case Tab.Dashboard:
      return <DashboardSection currentUser={currentUser} users={users} inventory={inventory} tasks={tasks} dailyOrders={dailyOrders} orderRequests={orderRequests} onTabChange={onTabChange} />;
    case Tab.Inventory:
      return <InventorySection items={inventory.filter(item => item.quantity >= 3)} onUpdateQuantity={onUpdateQuantity} onAddItem={onAddItem} onImportItems={onImportItems} onRemoveItem={onRemoveItem} onUpdateItem={onUpdateItem} users={users} onNotify={onNotify} />;
    case Tab.Reorder:
      return <ReorderSection items={inventory.filter(item => item.quantity < 3)} users={users} onRestock={onRestock} onAddItem={onAddItem} onRemoveItem={onRemoveItem} onUpdateItem={onUpdateItem} />;
    case Tab.OrderRequests:
      return <OrderRequestSection items={orderRequests} users={users} inventory={inventory} onAddItem={onAddOrderRequest} onRemoveItem={onRemoveOrderRequest} onMoveToBackorder={onMoveToBackorder} />;
    case Tab.Tasks:
      return <TaskSection tasks={tasks} users={users} onAddTask={onAddTask} onRemoveTask={onRemoveTask} onUpdateTaskStatus={onUpdateTaskStatus} />;
    case Tab.DailyOrders:
      return <DailyOrdersSection orders={dailyOrders} onAddOrder={onAddDailyOrder} onRemoveOrder={onRemoveDailyOrder} />;
    case Tab.Laboratories:
      return <CustomerSection laboratories={laboratories} onAddLaboratory={onAddLaboratory} onRemoveLaboratory={onRemoveLaboratory} onNotify={onNotify} />;
    case Tab.Backorder:
      return <BackorderSection backorders={backorders} users={users} onRemoveBackorder={onRemoveBackorder} />;
    case Tab.Users:
      return <UserManagementSection users={users} onAddUser={onAddUser} onUpdateUser={onUpdateUser} onToggleStatus={onToggleUserStatus} />;
    default:
      return null;
  }
};

export default AppContent;
