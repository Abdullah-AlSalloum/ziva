
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { InventoryItem, User, Task, DailyOrder, OrderRequest, Tab } from '../types';
import { PlusIcon, ClipboardDocumentCheckIcon, TruckIcon, BellIcon } from './icons';
import Avatar from './Avatar';
import { formatDate, formatNumber, useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';

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

const StatCard: React.FC<{ title: string; value: number; icon: React.ReactNode; color: string; onClick: () => void }> = ({ title, value, icon, color, onClick }) => (
    <StatCardContent title={title} value={value} icon={icon} color={color} onClick={onClick} />
);

const StatCardContent: React.FC<{ title: string; value: number; icon: React.ReactNode; color: string; onClick: () => void }> = ({ title, value, icon, color, onClick }) => {
    const titleContainerRef = useRef<HTMLSpanElement>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const { direction } = useTranslation(translations);

    useEffect(() => {
        const measureTitle = () => {
            const element = titleContainerRef.current;
            setIsOverflowing(Boolean(element && element.scrollWidth > element.clientWidth));
        };
        measureTitle();
        const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measureTitle) : null;
        if (observer && titleContainerRef.current) observer.observe(titleContainerRef.current);
        return () => observer?.disconnect();
    }, [title]);

    return (
        <button type="button" onClick={onClick} className="app-card group flex w-full items-center gap-4 rounded-2xl bg-white p-5 text-start shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 sm:p-6">
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${color}`}>
                {icon}
            </div>
            <div className="min-w-0">
                <span
                    ref={titleContainerRef}
                    className="dashboard-stat-marquee block max-w-full overflow-hidden text-sm font-medium text-gray-500 dark:text-gray-400"
                    dir={direction}
                    title={title}
                    aria-label={title}
                >
                    {isOverflowing ? (
                        <span className="dashboard-stat-marquee__track" aria-hidden="true">
                            <span>{title}</span>
                            <span>{title}</span>
                        </span>
                    ) : title}
                </span>
                <p className="mt-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{value}</p>
            </div>
        </button>
    );
};

const DashboardSection: React.FC<DashboardSectionProps> = ({ currentUser, users, inventory, tasks, dailyOrders, orderRequests, onTabChange }) => {
    const { language, t } = useTranslation(translations);
    
    const reorderItemsCount = useMemo(() => inventory.filter(item => item.quantity < 3).length, [inventory]);
    const myPendingTasks = useMemo(() => tasks.filter(task => task.assignedTo === currentUser.id && task.status !== 'Completed'), [tasks, currentUser.id]);
    
    const today = new Date().toISOString().split('T')[0];
    const todaysOrdersCount = useMemo(() => dailyOrders.filter(order => order.dateSent === today).length, [dailyOrders, today]);

    const getUser = (userId: string) => users.find(u => u.id === userId);

    const recentActivity = useMemo((): ActivityItem[] => {
        const activities: ActivityItem[] = [];

        inventory.forEach(item => {
            activities.push({ type: 'INVENTORY_ADD', timestamp: item.createdAt, user: getUser(item.managedBy), details: item.name });
        });

        tasks.forEach(task => {
            activities.push({ type: 'TASK_ADD', timestamp: task.createdAt, user: getUser(task.createdBy), targetUser: getUser(task.assignedTo), details: task.description });
            if (task.status === 'Completed') {
                // This is a simplification; we'd need a `completedAt` timestamp for accuracy. We'll use dueDate for now.
                activities.push({ type: 'TASK_COMPLETE', timestamp: task.dueDate, user: getUser(task.assignedTo), details: task.description });
            }
        });

        dailyOrders.forEach(order => {
             activities.push({ type: 'ORDER_LOG', timestamp: order.createdAt, user: currentUser, details: order.customerName });
        });
        
        orderRequests.forEach(req => {
// FIX: Corrected property from `itemName` to `customerName` to align with the `OrderRequest` type. The activity message and user have also been updated for better clarity.
            activities.push({ type: 'REQUEST_ADD', timestamp: req.createdAt, user: getUser(req.userId), details: req.customerName });
        })

        return activities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 10);
    }, [inventory, tasks, dailyOrders, orderRequests, users, currentUser]);
    
    const formatTimeAgo = (isoString: string) => {
        const date = new Date(isoString);
        const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return `${formatNumber(Math.floor(interval), language)} ${t('time.yearsAgo')}`;
        interval = seconds / 2592000;
        if (interval > 1) return `${formatNumber(Math.floor(interval), language)} ${t('time.monthsAgo')}`;
        interval = seconds / 86400;
        if (interval > 1) return `${formatNumber(Math.floor(interval), language)} ${t('time.daysAgo')}`;
        interval = seconds / 3600;
        if (interval > 1) return `${formatNumber(Math.floor(interval), language)} ${t('time.hoursAgo')}`;
        interval = seconds / 60;
        if (interval > 1) return `${formatNumber(Math.floor(interval), language)} ${t('time.minutesAgo')}`;
        return `${formatNumber(Math.floor(seconds), language)} ${t('time.secondsAgo')}`;
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content Column */}
            <div className="space-y-6 lg:col-span-2">
                {/* Stat Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <StatCard title={t('dashboard.itemsToReorder')} value={reorderItemsCount} icon={<BellIcon className="h-6 w-6 text-red-800 dark:text-red-200" />} color="bg-red-100 dark:bg-red-900/50" onClick={() => onTabChange(Tab.Reorder)} />
                    <StatCard title={t('dashboard.pendingTasks')} value={myPendingTasks.length} icon={<ClipboardDocumentCheckIcon className="h-6 w-6 text-sky-800 dark:text-sky-200" />} color="bg-sky-100 dark:bg-sky-900/50" onClick={() => onTabChange(Tab.Tasks)} />
                    <StatCard title={t('dashboard.ordersSentToday')} value={todaysOrdersCount} icon={<TruckIcon className="h-6 w-6 text-emerald-800 dark:text-emerald-200" />} color="bg-emerald-100 dark:bg-emerald-900/50" onClick={() => onTabChange(Tab.DailyOrders)} />
                </div>
                
                {/* My Tasks Section */}
                <div className="app-card rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-800 sm:p-6">
                     <div className="mb-5 flex items-center justify-between gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('dashboard.myPendingTasks')}</h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('dashboard.pendingTasks')}</p>
                        </div>
                        <button onClick={() => onTabChange(Tab.Tasks)} className="shrink-0 rounded-lg px-2 py-1 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-indigo-400 dark:hover:bg-indigo-950/40">{t('dashboard.viewAll')}</button>
                    </div>
                     {myPendingTasks.length > 0 ? (
                        <ul className="divide-y divide-gray-200/80 dark:divide-gray-700/80">
                            {myPendingTasks.slice(0, 5).map(task => (
                                <li key={task.id} className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0">
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold text-gray-800 dark:text-gray-200">{task.description}</p>
                                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                            {t('dashboard.by')} {getUser(task.createdBy)?.name || 'N/A'} &bull; {t('dashboard.due')} {formatDate(task.dueDate, language)}
                                        </p>
                                    </div>
                                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${task.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-100'}`}>
                                        {task.status === 'In Progress' ? t('tasks.statusInProgress') : t('tasks.statusToDo')}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="rounded-xl bg-gray-50 px-4 py-8 text-center dark:bg-gray-700/40">
                            <ClipboardDocumentCheckIcon className="mx-auto h-7 w-7 text-gray-400 dark:text-gray-500" />
                            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{t('dashboard.noPendingTasks')}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Sidebar Column */}
            <div className="app-card rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-800 sm:p-6 lg:col-span-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('dashboard.recentActivity')}</h3>
                {recentActivity.length > 0 ? (
                    <ul className="mt-5 space-y-5">
                       {recentActivity.map((activity, index) => (
                           <li key={`${activity.type}-${activity.timestamp}-${index}`} className="flex gap-3">
                               <div className="flex-shrink-0">
                                   <Avatar name={activity.user?.name || 'System'} size="medium" />
                               </div>
                               <div className="min-w-0 flex-1">
                                   <p className="text-sm leading-6 text-gray-800 dark:text-gray-200">
                                       <span className="font-bold">{activity.user?.name || t('dashboard.system')}</span>{' '}
                                       {activity.type === 'INVENTORY_ADD' && `${t('activity.addedToStock')} "${activity.details}"`}
                                       {activity.type === 'TASK_ADD' && <>{t('activity.assignedTask')} <span className="font-bold">{activity.targetUser?.name}</span></>}
                                       {activity.type === 'TASK_COMPLETE' && <>{t('activity.completedTask')} "{activity.details}"</>}
                                       {activity.type === 'ORDER_LOG' && `${t('activity.loggedOrder')} "${activity.details}".`}
                                       {activity.type === 'REQUEST_ADD' && `${t('activity.loggedRequest')} "${activity.details}".`}
                                   </p>
                                   <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{formatTimeAgo(activity.timestamp)}</p>
                               </div>
                           </li>
                       ))}
                    </ul>
                ) : (
                    <div className="mt-5 rounded-xl bg-gray-50 px-4 py-8 text-center dark:bg-gray-700/40">
                        <BellIcon className="mx-auto h-7 w-7 text-gray-400 dark:text-gray-500" />
                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{t('dashboard.noRecentActivity')}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardSection;