'use client';

import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { NotificationContainer } from '../components/Notification';
import { getStoredLanguage, useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';
import { AuthModal, LoadingScreen, LoginPage, PasswordModal } from './AuthScreens';
import NetworkStatus from '../components/NetworkStatus';
import AppContent from './AppContent';
import { useAppController } from './useAppController';

const App: React.FC = () => {
  const { t } = useTranslation(translations);
  const controller = useAppController();

  if (!controller.isAuthReady) {
    return <LoadingScreen message={translations[getStoredLanguage()]['status.loadingUsers']} />;
  }

  if (!controller.authenticatedUser) {
    if (!controller.authService) {
      return <LoadingScreen message={t('errors.authNotConfigured')} />;
    }

    return (
      <>
        <NetworkStatus />
        {controller.isLocalDevelopment && !controller.isDataReady ? (
          <LoadingScreen message={translations[getStoredLanguage()]['status.loadingUsers']} />
        ) : (
          <LoginPage
            users={controller.users}
            onLogin={controller.handleLogin}
            isLocalDevelopment={controller.isLocalDevelopment}
            error={controller.loginError}
          />
        )}
        {controller.selectedUserForLogin && !controller.isSettingFirstPassword && (
          <AuthModal
            selectedUser={controller.selectedUserForLogin}
            onLogin={password => controller.handleLogin(controller.selectedUserForLogin!.username || controller.selectedUserForLogin!.name, password)}
            onClose={() => controller.setSelectedUserForLogin(null)}
          />
        )}
        {controller.selectedUserForLogin && controller.isSettingFirstPassword && (
          <PasswordModal
            onSave={controller.handleSetFirstPassword}
            onClose={() => {
              controller.setIsSettingFirstPassword(false);
              controller.setSelectedUserForLogin(null);
            }}
            isFirstTimeSetup
          />
        )}
      </>
    );
  }

  const currentUser = controller.authenticatedUser;

  if (!controller.isDataReady) {
    return <LoadingScreen message={translations[getStoredLanguage()]['status.loadingData']} variant="workspace" />;
  }

  return (
    <div className="flex min-w-0 flex-col h-screen overflow-x-hidden bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-200">
      <NetworkStatus />
      <NotificationContainer notifications={controller.activeNotifications} onRemoveNotification={controller.handleRemoveNotification} />
      {controller.isChangingPassword && (
        <PasswordModal
          onSave={controller.handleChangePassword}
          onClose={() => controller.setIsChangingPassword(false)}
        />
      )}
      <Header
        currentUser={currentUser}
        onLogout={controller.handleLogout}
        onOpenChangePassword={() => controller.setIsChangingPassword(true)}
        onToggleSidebar={() => controller.setIsSidebarOpen(previous => !previous)}
      />
      <div className="flex min-w-0 flex-1 overflow-hidden">
        <Sidebar
          activeTab={controller.activeTab}
          setActiveTab={controller.setActiveTab}
          stockItemsCount={controller.stockItemsCount}
          reorderItemsCount={controller.reorderItemsCount}
          orderRequestsCount={controller.orderRequests.length}
          tasksCount={controller.tasks.length}
          dailyOrdersCount={controller.dailyOrders.length}
          laboratoriesCount={controller.laboratories.length}
          backordersCount={controller.backorders.length}
          canManageUsers={currentUser.role === 'Owner'}
          canViewAudit={currentUser.role === 'Owner' || currentUser.role === 'Manager'}
          isOpen={controller.isSidebarOpen}
          setIsOpen={controller.setIsSidebarOpen}
        />
        <main className="min-w-0 flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto w-full">
            <AppContent
              activeTab={controller.activeTab}
              currentUser={currentUser}
              isLocalDevelopment={controller.isLocalDevelopment}
              users={controller.users}
              inventory={controller.inventory}
              tasks={controller.tasks}
              dailyOrders={controller.dailyOrders}
              orderRequests={controller.orderRequests}
              laboratories={controller.laboratories}
              backorders={controller.backorders}
              auditEvents={controller.auditEvents}
              onTabChange={controller.setActiveTab}
              onUpdateQuantity={(id, quantity) => controller.handleUpdateItem(id, { quantity })}
              onAddItem={controller.handleAddItem}
              onImportItems={controller.handleImportItems}
              onRemoveItem={controller.handleRemoveItem}
              onUpdateItem={controller.handleUpdateItem}
              onRestock={controller.handleRestock}
              onAddOrderRequest={controller.handleAddOrderRequest}
              onRemoveOrderRequest={controller.handleRemoveOrderRequest}
              onMoveToBackorder={controller.handleMoveToBackorder}
              onAddTask={controller.handleAddTask}
              onRemoveTask={controller.handleRemoveTask}
              onUpdateTaskStatus={controller.handleUpdateTaskStatus}
              onAddDailyOrder={controller.handleAddDailyOrder}
              onRemoveDailyOrder={controller.handleRemoveDailyOrder}
              onAddLaboratory={controller.handleAddLaboratory}
              onRemoveLaboratory={controller.handleRemoveLaboratory}
              onRemoveBackorder={controller.handleRemoveBackorder}
              onAddUser={controller.handleAddUser}
              onUpdateUser={controller.handleUpdateUser}
              onToggleUserStatus={controller.handleToggleUserStatus}
              onNotify={controller.notify}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
