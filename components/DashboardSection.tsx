
import React, { useMemo } from 'react';
import { InventoryItem, User, Task, DailyOrder, OrderRequest, Tab } from '../types';
import { PlusIcon, ClipboardDocumentCheckIcon, TruckIcon, BellIcon } from './icons';
import Avatar from './Avatar';

interface DashboardSectionProps {
    currentUser: User;
    users: User[];
    inventory: InventoryItem[];
    tasks: Task[];
    dailyOrders: DailyOrder[];
    orderRequests: OrderRequest[];
    onTabChange: (tab: Tab) => void;
}

type ActivityItem = {
    type: 'INVENTORY_ADD' | 'TASK_ADD' | 'TASK_COMPLETE' | 'ORDER_LOG' | 'REQUEST_ADD';
    timestamp: string;
    user?: User;
    details: string;
    targetUser?: User;
};

const StatCard: React.FC<{ title: string; value: number; icon: React.ReactNode; color: string; onClick?: () => void }> = ({ title, value, icon, color, onClick }) => (
    <div onClick={onClick} className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center space-x-4 ${onClick ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-transform' : ''}`}>
        <div className={`p-3 rounded-full ${color}`}>
            {icon}
        </div>
        <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
    </div>
);

const DashboardSection: React.FC<DashboardSectionProps> = ({ currentUser, users, inventory, tasks, dailyOrders, orderRequests, onTabChange }) => {
    
    const reorderItemsCount = useMemo(() => inventory.filter(item => item.quantity < 3).length, [inventory]);
    const myPendingTasks = useMemo(() => tasks.filter(task => task.assignedTo === currentUser.id && task.status !== 'Completed'), [tasks, currentUser.id]);
    
    const today = new Date().toISOString().split('T')[0];
    const todaysOrdersCount = useMemo(() => dailyOrders.filter(order => order.dateSent === today).length, [dailyOrders, today]);

    const getUser = (userId: string) => users.find(u => u.id === userId);

    const recentActivity = useMemo((): ActivityItem[] => {
        const activities: ActivityItem[] = [];

        inventory.forEach(item => {
            activities.push({ type: 'INVENTORY_ADD', timestamp: item.createdAt, user: getUser(item.managedBy), details: `added "${item.name}" to stock.` });
        });

        tasks.forEach(task => {
            activities.push({ type: 'TASK_ADD', timestamp: task.createdAt, user: getUser(task.createdBy), targetUser: getUser(task.assignedTo), details: `assigned a task to` });
            if (task.status === 'Completed') {
                // This is a simplification; we'd need a `completedAt` timestamp for accuracy. We'll use dueDate for now.
                activities.push({ type: 'TASK_COMPLETE', timestamp: task.dueDate, user: getUser(task.assignedTo), details: `completed task: "${task.description}"` });
            }
        });

        dailyOrders.forEach(order => {
             activities.push({ type: 'ORDER_LOG', timestamp: order.createdAt, user: currentUser, details: `logged an order for "${order.customerName}".` });
        });
        
        orderRequests.forEach(req => {
// FIX: Corrected property from `itemName` to `customerName` to align with the `OrderRequest` type. The activity message and user have also been updated for better clarity.
            activities.push({ type: 'REQUEST_ADD', timestamp: req.createdAt, user: getUser(req.userId), details: `logged a new order request from "${req.customerName}".` });
        })

        return activities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 10);
    }, [inventory, tasks, dailyOrders, orderRequests, users, currentUser]);
    
    const formatTimeAgo = (isoString: string) => {
        const date = new Date(isoString);
        const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + " years ago";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + " months ago";
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + " days ago";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + " hours ago";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + " minutes ago";
        return Math.floor(seconds) + " seconds ago";
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-6">
                {/* Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard title="Items to Reorder" value={reorderItemsCount} icon={<BellIcon className="h-6 w-6 text-red-800 dark:text-red-200" />} color="bg-red-100 dark:bg-red-900/50" onClick={() => onTabChange(Tab.Reorder)} />
                    <StatCard title="Your Pending Tasks" value={myPendingTasks.length} icon={<ClipboardDocumentCheckIcon className="h-6 w-6 text-sky-800 dark:text-sky-200" />} color="bg-sky-100 dark:bg-sky-900/50" onClick={() => onTabChange(Tab.Tasks)} />
                    <StatCard title="Today's Orders Sent" value={todaysOrdersCount} icon={<TruckIcon className="h-6 w-6 text-emerald-800 dark:text-emerald-200" />} color="bg-emerald-100 dark:bg-emerald-900/50" onClick={() => onTabChange(Tab.DailyOrders)} />
                </div>
                
                {/* My Tasks Section */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                     <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">My Pending Tasks</h3>
                        <button onClick={() => onTabChange(Tab.Tasks)} className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">View All</button>
                    </div>
                     {myPendingTasks.length > 0 ? (
                        <ul className="space-y-4">
                            {myPendingTasks.slice(0, 5).map(task => (
                                <li key={task.id} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-800 dark:text-gray-200">{task.description}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            By {getUser(task.createdBy)?.name || 'N/A'} &bull; Due {new Date(task.dueDate).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${task.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50' : 'bg-gray-100 text-gray-800 dark:bg-gray-600'}`}>
                                        {task.status}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center py-4 text-gray-500 dark:text-gray-400">You have no pending tasks. Great job!</p>
                    )}
                </div>
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                <ul className="space-y-4">
                   {recentActivity.map((activity, index) => (
                       <li key={index} className="flex space-x-3">
                           <div className="flex-shrink-0">
                               <Avatar name={activity.user?.name || 'System'} size="medium" />
                           </div>
                           <div className="flex-1">
                               <p className="text-sm text-gray-800 dark:text-gray-200">
                                   <span className="font-bold">{activity.user?.name || 'System'}</span> {activity.details} {activity.targetUser && <span className="font-bold">{activity.targetUser.name}</span>}
                               </p>
                               <p className="text-xs text-gray-400">{formatTimeAgo(activity.timestamp)}</p>
                           </div>
                       </li>
                   ))}
                </ul>
            </div>
        </div>
    );
};

export default DashboardSection;