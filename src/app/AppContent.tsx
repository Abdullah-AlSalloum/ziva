import React, { lazy, Suspense } from 'react';
import { AuditEvent, Backorder, DailyOrder, InventoryItem, Laboratory, OrderRequest, Tab, Task, TaskStatus, User } from '../types';

const DashboardSection = lazy(() => import('../components/DashboardSection'));
const InventorySection = lazy(() => import('../components/InventorySection'));
const ReorderSection = lazy(() => import('../components/ReorderSection'));
const OrderRequestSection = lazy(() => import('../components/OrderRequestSection'));
const TaskSection = lazy(() => import('../components/TaskSection'));
const DailyOrdersSection = lazy(() => import('../components/DailyOrdersSection'));
const CustomerSection = lazy(() => import('../components/CustomerSection'));
const BackorderSection = lazy(() => import('../components/BackorderSection'));
const UserManagementSection = lazy(() => import('../components/UserManagementSection'));
const AuditSection = lazy(() => import('../components/AuditSection'));

interface AppContentProps {
  activeTab: Tab;
  currentUser: User;
  isLocalDevelopment: boolean;
  users: User[];
  inventory: InventoryItem[];
  tasks: Task[];
  dailyOrders: DailyOrder[];
  orderRequests: OrderRequest[];
  laboratories: Laboratory[];
  backorders: Backorder[];
  auditEvents: AuditEvent[];
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
  onAddUser: (user: Omit<User, 'id' | 'hasSetPassword'>, password?: string) => void;
  onUpdateUser: (id: string, updates: Partial<User>) => void;
  onToggleUserStatus: (user: User) => void;
  onNotify: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const AppContent: React.FC<AppContentProps> = ({
  activeTab,
  currentUser,
  isLocalDevelopment,
  users,
  inventory,
  tasks,
  dailyOrders,
  orderRequests,
  laboratories,
  backorders,
  auditEvents,
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
  const content = (() => {
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
        return <UserManagementSection users={users} isLocalDevelopment={isLocalDevelopment} onAddUser={onAddUser} onUpdateUser={onUpdateUser} onToggleStatus={onToggleUserStatus} />;
      case Tab.Audit:
        return <AuditSection events={auditEvents} />;
      default:
        return null;
    }
  })();

  return (
    <Suspense fallback={<div className="min-h-64 animate-pulse rounded-2xl bg-slate-100 dark:bg-slate-900" />}>
      {content}
    </Suspense>
  );
};

export default AppContent;
