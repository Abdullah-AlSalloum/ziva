import React, { useState, useEffect } from 'react';
import { Tab } from '../types';
import { HomeIcon, ArchiveBoxIcon, PlusIcon, ListBulletIcon, ClipboardDocumentCheckIcon, TruckIcon, XMarkIcon, ChevronDownIcon, InformationCircleIcon, UserGroupIcon, ClockIcon } from './icons';
import { useTranslation } from '../i18n';
import { translations } from '../translations';

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  stockItemsCount: number;
  reorderItemsCount: number;
  orderRequestsCount: number;
  tasksCount: number;
  dailyOrdersCount: number;
  laboratoriesCount: number;
  backordersCount: number;
  canManageUsers: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavLink: React.FC<{
  // FIX: Specified a more precise type for the `icon` prop to ensure TypeScript
  // recognizes that the passed element accepts a `className`. This resolves the
  // error with `React.cloneElement`.
  icon: React.ReactElement<{ className?: string }>;
  label: string;
  isActive: boolean;
  onClick: () => void;
  direction: 'ltr' | 'rtl';
  badgeCount?: number;
  badgeColor?: string;
}> = ({ icon, label, isActive, onClick, direction, badgeCount = 0, badgeColor }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 group ${
            isActive
                ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
        }`}
    >
        {/* FIX: Removed unnecessary type assertion `as React.ReactElement` as the `icon` prop is now correctly typed. */}
        {React.cloneElement(icon, { className: `h-6 w-6 ${direction === 'rtl' ? 'ml-3' : 'mr-3'} ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400'}` })}
        <span className={`flex-1 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>{label}</span>
        {badgeCount > 0 && (
            <span className={`${direction === 'rtl' ? 'mr-auto' : 'ml-auto'} inline-block py-0.5 px-2 text-xs font-bold rounded-full ${badgeColor || 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200'}`}>
                {badgeCount}
            </span>
        )}
    </button>
);


const Sidebar: React.FC<SidebarProps> = ({ 
    activeTab, 
    setActiveTab,
    stockItemsCount,
    reorderItemsCount,
    orderRequestsCount,
    tasksCount,
    dailyOrdersCount,
    laboratoriesCount,
    backordersCount,
    canManageUsers,
    isOpen,
    setIsOpen
}) => {
    const { t, direction } = useTranslation(translations);
    const [isInventoryOpen, setIsInventoryOpen] = useState(false);

    const inventoryTabs = [Tab.Inventory, Tab.Reorder, Tab.OrderRequests, Tab.DailyOrders, Tab.Backorder];
    const isInventoryActive = inventoryTabs.includes(activeTab);

    useEffect(() => {
        if (isInventoryActive) {
            setIsInventoryOpen(true);
        }
    }, [isInventoryActive]);

    const handleLinkClick = (tab: Tab) => {
        setActiveTab(tab);
        if (window.innerWidth < 1024) { // lg breakpoint
            setIsOpen(false);
        }
    };

    const inventoryBadgeTotal = reorderItemsCount + orderRequestsCount + dailyOrdersCount + backordersCount;

    return (
        <>
            {/* Overlay for mobile */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            ></div>

            <aside 
                className={`fixed lg:relative top-0 z-40 w-64 h-full bg-white dark:bg-gray-800 p-4 ${direction === 'rtl' ? 'right-0 border-l' : 'left-0 border-r'} border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : direction === 'rtl' ? 'translate-x-full' : '-translate-x-full'} lg:translate-x-0 lg:shrink-0 flex flex-col`}
                aria-label={t('nav.menu')}
            >
                 <div className="flex items-center justify-between lg:hidden mb-4">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">{t('nav.menu')}</span>
                    <button onClick={() => setIsOpen(false)} className="p-1 rounded-full text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700" aria-label={t('nav.closeSidebar')}>
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>
                <nav className="space-y-1">
                    <NavLink
                        icon={<HomeIcon />}
                        label={t('nav.dashboard')}
                        direction={direction}
                        isActive={activeTab === Tab.Dashboard}
                        onClick={() => handleLinkClick(Tab.Dashboard)}
                    />
                    
                    {/* Inventory Dropdown */}
                    <div>
                        <button
                            onClick={() => setIsInventoryOpen(!isInventoryOpen)}
                            className="w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 group transition-colors duration-200"
                        >
                            <ArchiveBoxIcon className={`h-6 w-6 ${direction === 'rtl' ? 'ml-3' : 'mr-3'} ${isInventoryActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400'}`} />
                            <span className={`flex-1 ${direction === 'rtl' ? 'text-right' : 'text-left'} ${isInventoryActive ? 'font-semibold text-indigo-600 dark:text-indigo-300' : ''}`}>{t('nav.inventory')}</span>
                            {inventoryBadgeTotal > 0 && (
                                <span className="ml-auto mr-2 inline-block py-0.5 px-2 text-xs font-bold rounded-full bg-indigo-500 text-white">
                                    {inventoryBadgeTotal}
                                </span>
                            )}
                            <ChevronDownIcon className={`h-5 w-5 transform transition-transform duration-200 ${isInventoryOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`pl-5 overflow-hidden transition-all duration-300 ease-in-out ${isInventoryOpen ? 'max-h-96' : 'max-h-0'}`}>
                            <div className="pt-1 space-y-1 border-l border-gray-200 dark:border-gray-600 ml-4 pl-4">
                                <NavLink
                                    icon={<ListBulletIcon />}
                                    label={t('nav.inStock')}
                                    direction={direction}
                                    isActive={activeTab === Tab.Inventory}
                                    onClick={() => handleLinkClick(Tab.Inventory)}
                                    badgeCount={stockItemsCount}
                                />
                                <NavLink
                                    icon={<PlusIcon />}
                                    label={t('nav.reorderNeeded')}
                                    direction={direction}
                                    isActive={activeTab === Tab.Reorder}
                                    onClick={() => handleLinkClick(Tab.Reorder)}
                                    badgeCount={reorderItemsCount}
                                    badgeColor="bg-red-500 text-white"
                                />
                                <NavLink
                                    icon={<InformationCircleIcon />}
                                    label={t('nav.orderRequests')}
                                    direction={direction}
                                    isActive={activeTab === Tab.OrderRequests}
                                    onClick={() => handleLinkClick(Tab.OrderRequests)}
                                    badgeCount={orderRequestsCount}
                                    badgeColor="bg-amber-500 text-white"
                                />
                                <NavLink
                                    icon={<TruckIcon />}
                                    label={t('nav.dailyOrders')}
                                    direction={direction}
                                    isActive={activeTab === Tab.DailyOrders}
                                    onClick={() => handleLinkClick(Tab.DailyOrders)}
                                    badgeCount={dailyOrdersCount}
                                    badgeColor="bg-emerald-500 text-white"
                                />
                                 <NavLink
                                    icon={<ClockIcon />}
                                    label={t('nav.backorder')}
                                    direction={direction}
                                    isActive={activeTab === Tab.Backorder}
                                    onClick={() => handleLinkClick(Tab.Backorder)}
                                    badgeCount={backordersCount}
                                    badgeColor="bg-yellow-500 text-white"
                                />
                            </div>
                        </div>
                    </div>

                    <NavLink
                        icon={<ClipboardDocumentCheckIcon />}
                        label={t('nav.teamTasks')}
                        direction={direction}
                        isActive={activeTab === Tab.Tasks}
                        onClick={() => handleLinkClick(Tab.Tasks)}
                        badgeCount={tasksCount}
                        badgeColor="bg-sky-500 text-white"
                    />
                    <NavLink
                        icon={<UserGroupIcon />}
                        label={t('nav.laboratories')}
                        direction={direction}
                        isActive={activeTab === Tab.Laboratories}
                        onClick={() => handleLinkClick(Tab.Laboratories)}
                        badgeCount={laboratoriesCount}
                        badgeColor="bg-purple-500 text-white"
                    />
                    {canManageUsers && (
                        <NavLink
                            icon={<UserGroupIcon />}
                            label={t('nav.users')}
                            direction={direction}
                            isActive={activeTab === Tab.Users}
                            onClick={() => handleLinkClick(Tab.Users)}
                        />
                    )}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
