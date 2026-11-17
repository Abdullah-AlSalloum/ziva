module.exports = [
"[project]/src/app/App.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Notification.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$AuthScreens$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/AuthScreens.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NetworkStatus$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NetworkStatus.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$AppContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/AppContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$useAppController$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/useAppController.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const App = ()=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"]);
    const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$useAppController$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppController"])();
    if (!controller.authenticatedUser) {
        if (!controller.authService) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$AuthScreens$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingScreen"], {
                message: t('errors.authNotConfigured')
            }, void 0, false, {
                fileName: "[project]/src/app/App.tsx",
                lineNumber: 20,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NetworkStatus$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/App.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                controller.isLocalDevelopment && !controller.isDataReady ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$AuthScreens$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingScreen"], {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredLanguage"])()]['status.loadingUsers']
                }, void 0, false, {
                    fileName: "[project]/src/app/App.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$AuthScreens$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoginPage"], {
                    users: controller.users,
                    onLogin: controller.handleLogin,
                    isLocalDevelopment: controller.isLocalDevelopment,
                    error: controller.loginError
                }, void 0, false, {
                    fileName: "[project]/src/app/App.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                controller.selectedUserForLogin && !controller.isSettingFirstPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$AuthScreens$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthModal"], {
                    selectedUser: controller.selectedUserForLogin,
                    onLogin: (password)=>controller.handleLogin(controller.selectedUserForLogin.username || controller.selectedUserForLogin.name, password),
                    onClose: ()=>controller.setSelectedUserForLogin(null)
                }, void 0, false, {
                    fileName: "[project]/src/app/App.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                controller.selectedUserForLogin && controller.isSettingFirstPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$AuthScreens$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PasswordModal"], {
                    onSave: controller.handleSetFirstPassword,
                    onClose: ()=>{
                        controller.setIsSettingFirstPassword(false);
                        controller.setSelectedUserForLogin(null);
                    },
                    isFirstTimeSetup: true
                }, void 0, false, {
                    fileName: "[project]/src/app/App.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/App.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const currentUser = controller.authenticatedUser;
    if (!controller.isDataReady) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$AuthScreens$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingScreen"], {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredLanguage"])()]['status.loadingData'],
            variant: "workspace"
        }, void 0, false, {
            fileName: "[project]/src/app/App.tsx",
            lineNumber: 60,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NetworkStatus$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/App.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationContainer"], {
                notifications: controller.activeNotifications,
                onRemoveNotification: controller.handleRemoveNotification
            }, void 0, false, {
                fileName: "[project]/src/app/App.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            controller.isChangingPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$AuthScreens$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PasswordModal"], {
                onSave: controller.handleChangePassword,
                onClose: ()=>controller.setIsChangingPassword(false)
            }, void 0, false, {
                fileName: "[project]/src/app/App.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                currentUser: currentUser,
                onLogout: controller.handleLogout,
                onOpenChangePassword: ()=>controller.setIsChangingPassword(true),
                onToggleSidebar: ()=>controller.setIsSidebarOpen((previous)=>!previous)
            }, void 0, false, {
                fileName: "[project]/src/app/App.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        activeTab: controller.activeTab,
                        setActiveTab: controller.setActiveTab,
                        stockItemsCount: controller.stockItemsCount,
                        reorderItemsCount: controller.reorderItemsCount,
                        orderRequestsCount: controller.orderRequests.length,
                        tasksCount: controller.tasks.length,
                        dailyOrdersCount: controller.dailyOrders.length,
                        laboratoriesCount: controller.laboratories.length,
                        backordersCount: controller.backorders.length,
                        canManageUsers: currentUser.role === 'Owner',
                        canViewAudit: currentUser.role === 'Owner' || currentUser.role === 'Manager',
                        isOpen: controller.isSidebarOpen,
                        setIsOpen: controller.setIsSidebarOpen
                    }, void 0, false, {
                        fileName: "[project]/src/app/App.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$AppContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                activeTab: controller.activeTab,
                                currentUser: currentUser,
                                isLocalDevelopment: controller.isLocalDevelopment,
                                users: controller.users,
                                inventory: controller.inventory,
                                tasks: controller.tasks,
                                dailyOrders: controller.dailyOrders,
                                orderRequests: controller.orderRequests,
                                laboratories: controller.laboratories,
                                backorders: controller.backorders,
                                auditEvents: controller.auditEvents,
                                onTabChange: controller.setActiveTab,
                                onUpdateQuantity: (id, quantity)=>controller.handleUpdateItem(id, {
                                        quantity
                                    }),
                                onAddItem: controller.handleAddItem,
                                onImportItems: controller.handleImportItems,
                                onRemoveItem: controller.handleRemoveItem,
                                onUpdateItem: controller.handleUpdateItem,
                                onRestock: controller.handleRestock,
                                onAddOrderRequest: controller.handleAddOrderRequest,
                                onRemoveOrderRequest: controller.handleRemoveOrderRequest,
                                onMoveToBackorder: controller.handleMoveToBackorder,
                                onAddTask: controller.handleAddTask,
                                onRemoveTask: controller.handleRemoveTask,
                                onUpdateTaskStatus: controller.handleUpdateTaskStatus,
                                onAddDailyOrder: controller.handleAddDailyOrder,
                                onRemoveDailyOrder: controller.handleRemoveDailyOrder,
                                onAddLaboratory: controller.handleAddLaboratory,
                                onRemoveLaboratory: controller.handleRemoveLaboratory,
                                onRemoveBackorder: controller.handleRemoveBackorder,
                                onAddUser: controller.handleAddUser,
                                onUpdateUser: controller.handleUpdateUser,
                                onToggleUserStatus: controller.handleToggleUserStatus,
                                onNotify: controller.notify
                            }, void 0, false, {
                                fileName: "[project]/src/app/App.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/App.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/App.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/App.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/App.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = App;
}),
"[project]/src/app/AppContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-ssr] (ecmascript)");
;
;
;
const DashboardSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/DashboardSection.tsx [app-ssr] (ecmascript, async loader)"));
const InventorySection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/InventorySection.tsx [app-ssr] (ecmascript, async loader)"));
const ReorderSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/ReorderSection.tsx [app-ssr] (ecmascript, async loader)"));
const OrderRequestSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/OrderRequestSection.tsx [app-ssr] (ecmascript, async loader)"));
const TaskSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/TaskSection.tsx [app-ssr] (ecmascript, async loader)"));
const DailyOrdersSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/DailyOrdersSection.tsx [app-ssr] (ecmascript, async loader)"));
const CustomerSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/CustomerSection.tsx [app-ssr] (ecmascript, async loader)"));
const BackorderSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/BackorderSection.tsx [app-ssr] (ecmascript, async loader)"));
const UserManagementSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/UserManagementSection.tsx [app-ssr] (ecmascript, async loader)"));
const AuditSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/AuditSection.tsx [app-ssr] (ecmascript, async loader)"));
const AppContent = ({ activeTab, currentUser, isLocalDevelopment, users, inventory, tasks, dailyOrders, orderRequests, laboratories, backorders, auditEvents, onTabChange, onUpdateQuantity, onAddItem, onImportItems, onRemoveItem, onUpdateItem, onRestock, onAddOrderRequest, onRemoveOrderRequest, onMoveToBackorder, onAddTask, onRemoveTask, onUpdateTaskStatus, onAddDailyOrder, onRemoveDailyOrder, onAddLaboratory, onRemoveLaboratory, onRemoveBackorder, onAddUser, onUpdateUser, onToggleUserStatus, onNotify })=>{
    const content = (()=>{
        switch(activeTab){
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Dashboard:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardSection, {
                    currentUser: currentUser,
                    users: users,
                    inventory: inventory,
                    tasks: tasks,
                    dailyOrders: dailyOrders,
                    orderRequests: orderRequests,
                    onTabChange: onTabChange
                }, void 0, false, {
                    fileName: "[project]/src/app/AppContent.tsx",
                    lineNumber: 89,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Inventory:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InventorySection, {
                    items: inventory.filter((item)=>item.quantity >= 3),
                    onUpdateQuantity: onUpdateQuantity,
                    onAddItem: onAddItem,
                    onImportItems: onImportItems,
                    onRemoveItem: onRemoveItem,
                    onUpdateItem: onUpdateItem,
                    users: users,
                    onNotify: onNotify
                }, void 0, false, {
                    fileName: "[project]/src/app/AppContent.tsx",
                    lineNumber: 91,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Reorder:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReorderSection, {
                    items: inventory.filter((item)=>item.quantity < 3),
                    users: users,
                    onRestock: onRestock,
                    onAddItem: onAddItem,
                    onRemoveItem: onRemoveItem,
                    onUpdateItem: onUpdateItem
                }, void 0, false, {
                    fileName: "[project]/src/app/AppContent.tsx",
                    lineNumber: 93,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].OrderRequests:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderRequestSection, {
                    items: orderRequests,
                    users: users,
                    inventory: inventory,
                    onAddItem: onAddOrderRequest,
                    onRemoveItem: onRemoveOrderRequest,
                    onMoveToBackorder: onMoveToBackorder
                }, void 0, false, {
                    fileName: "[project]/src/app/AppContent.tsx",
                    lineNumber: 95,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Tasks:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskSection, {
                    tasks: tasks,
                    users: users,
                    onAddTask: onAddTask,
                    onRemoveTask: onRemoveTask,
                    onUpdateTaskStatus: onUpdateTaskStatus
                }, void 0, false, {
                    fileName: "[project]/src/app/AppContent.tsx",
                    lineNumber: 97,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].DailyOrders:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DailyOrdersSection, {
                    orders: dailyOrders,
                    onAddOrder: onAddDailyOrder,
                    onRemoveOrder: onRemoveDailyOrder
                }, void 0, false, {
                    fileName: "[project]/src/app/AppContent.tsx",
                    lineNumber: 99,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Laboratories:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomerSection, {
                    laboratories: laboratories,
                    onAddLaboratory: onAddLaboratory,
                    onRemoveLaboratory: onRemoveLaboratory,
                    onNotify: onNotify
                }, void 0, false, {
                    fileName: "[project]/src/app/AppContent.tsx",
                    lineNumber: 101,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Backorder:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BackorderSection, {
                    backorders: backorders,
                    users: users,
                    onRemoveBackorder: onRemoveBackorder
                }, void 0, false, {
                    fileName: "[project]/src/app/AppContent.tsx",
                    lineNumber: 103,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Users:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UserManagementSection, {
                    users: users,
                    isLocalDevelopment: isLocalDevelopment,
                    onAddUser: onAddUser,
                    onUpdateUser: onUpdateUser,
                    onToggleStatus: onToggleUserStatus
                }, void 0, false, {
                    fileName: "[project]/src/app/AppContent.tsx",
                    lineNumber: 105,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Audit:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuditSection, {
                    events: auditEvents
                }, void 0, false, {
                    fileName: "[project]/src/app/AppContent.tsx",
                    lineNumber: 107,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return null;
        }
    })();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-64 animate-pulse rounded-2xl bg-slate-100 dark:bg-slate-900"
        }, void 0, false, {
            fileName: "[project]/src/app/AppContent.tsx",
            lineNumber: 114,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
        children: content
    }, void 0, false, {
        fileName: "[project]/src/app/AppContent.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AppContent;
}),
"[project]/src/app/AuthScreens.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthModal",
    ()=>AuthModal,
    "LoadingScreen",
    ()=>LoadingScreen,
    "LoginPage",
    ()=>LoginPage,
    "PasswordModal",
    ()=>PasswordModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/translations.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const LoadingScreen = ({ message, variant = 'default' })=>{
    if (variant === 'workspace') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-50 p-4 dark:bg-slate-950 sm:p-6",
            "aria-busy": "true",
            "aria-live": "polite",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl gap-4 sm:min-h-[calc(100vh-3rem)] sm:gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "hidden w-56 shrink-0 rounded-2xl bg-slate-900 p-4 shadow-sm sm:block dark:bg-slate-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 w-32 animate-pulse rounded-lg bg-slate-700"
                            }, void 0, false, {
                                fileName: "[project]/src/app/AuthScreens.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 space-y-3",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 animate-pulse rounded-xl bg-slate-800"
                                    }, item, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 16,
                                        columnNumber: 44
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/AuthScreens.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/AuthScreens.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-16 items-center justify-between rounded-2xl bg-white px-4 shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-900 dark:ring-slate-800 sm:px-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-7 w-36 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-9 w-28 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/AuthScreens.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "mt-5 space-y-5 sm:mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-8 w-52 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 26,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 h-4 w-72 max-w-full animate-pulse rounded bg-slate-200 dark:bg-slate-700"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 27,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                                        children: [
                                            1,
                                            2,
                                            3,
                                            4
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-28 animate-pulse rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-900 dark:ring-slate-800"
                                            }, item, false, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 30,
                                                columnNumber: 43
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-72 animate-pulse rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-900 dark:ring-slate-800"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-sm font-medium text-slate-500 dark:text-slate-400",
                                        children: message
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/AuthScreens.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/AuthScreens.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/AuthScreens.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/AuthScreens.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 text-center dark:bg-slate-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm ring-1 ring-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-300 dark:ring-indigo-400/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-8 w-8 animate-spin",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/app/AuthScreens.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "opacity-90",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/AuthScreens.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/AuthScreens.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/AuthScreens.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-5 max-w-sm text-sm font-medium text-slate-600 dark:text-slate-300",
                children: message
            }, void 0, false, {
                fileName: "[project]/src/app/AuthScreens.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/AuthScreens.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const LoginPage = ({ users, onLogin, onRegister, isLocalDevelopment = false, error: externalError })=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTranslator"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"], 'ar');
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        setError('');
        if (!password) {
            setError(t('auth.enterPassword'));
            return;
        }
        onLogin(username.trim(), password);
    };
    const handleRegister = (event)=>{
        event.preventDefault();
        setError('');
        if (!name.trim() || !username.trim() || !email.trim() || !password) {
            setError(t('auth.completeAllFields'));
            return;
        }
        onRegister?.({
            name: name.trim(),
            username: username.trim().toLowerCase(),
            description: 'Owner',
            role: 'Owner',
            status: 'active',
            email: email.trim()
        }, password);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        dir: "rtl",
        lang: "ar",
        className: "arabic-auth relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-8 transition-colors duration-300 dark:bg-slate-950 sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-200/35 blur-3xl dark:bg-indigo-500/10"
            }, void 0, false, {
                fileName: "[project]/src/app/AuthScreens.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl dark:bg-violet-500/10"
            }, void 0, false, {
                fileName: "[project]/src/app/AuthScreens.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-7 text-center sm:mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 ring-1 ring-indigo-500/20 dark:bg-indigo-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-8 w-8",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7l8 5 8-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/AuthScreens.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/AuthScreens.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl",
                                    children: t('app.name')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/AuthScreens.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/AuthScreens.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/AuthScreens.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "app-card rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.45)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/95 sm:p-9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold tracking-tight text-slate-950 dark:text-white",
                                        children: isLocalDevelopment && users.length === 0 ? t('auth.localSetupTitle') : t('auth.signInTitle')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400",
                                        children: isLocalDevelopment && users.length === 0 ? t('auth.localSetupSubtitle') : t('auth.signInSubtitle')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/AuthScreens.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isLocalDevelopment && users.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleRegister,
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-right text-sm font-semibold text-slate-700 dark:text-slate-200",
                                        children: [
                                            t('userManagement.fullName'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                autoFocus: true,
                                                value: name,
                                                onChange: (event)=>setName(event.target.value),
                                                className: "mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-right text-sm font-semibold text-slate-700 dark:text-slate-200",
                                        children: [
                                            t('auth.usernameOrEmail'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                dir: "ltr",
                                                value: username,
                                                onChange: (event)=>setUsername(event.target.value),
                                                className: "mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-right text-sm font-semibold text-slate-700 dark:text-slate-200",
                                        children: [
                                            t('userManagement.email'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "email",
                                                dir: "ltr",
                                                value: email,
                                                onChange: (event)=>setEmail(event.target.value),
                                                className: "mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-right text-sm font-semibold text-slate-700 dark:text-slate-200",
                                        children: [
                                            t('auth.password'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "password",
                                                dir: "ltr",
                                                value: password,
                                                onChange: (event)=>setPassword(event.target.value),
                                                className: "mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    (error || externalError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        role: "alert",
                                        className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-right text-sm font-medium leading-6 text-red-700",
                                        children: error || externalError
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 138,
                                        columnNumber: 44
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "w-full rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700",
                                        children: t('auth.createLocalUser')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/AuthScreens.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-right text-sm font-semibold text-slate-700 dark:text-slate-200",
                                        children: [
                                            t('auth.usernameOrEmail'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                autoFocus: true,
                                                autoComplete: "username",
                                                dir: "ltr",
                                                value: username,
                                                onChange: (event)=>setUsername(event.target.value),
                                                className: "mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-slate-900 shadow-sm transition placeholder:text-slate-400 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-slate-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-right text-sm font-semibold text-slate-700 dark:text-slate-200",
                                        children: [
                                            t('auth.password'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: showPassword ? 'text' : 'password',
                                                        autoComplete: "current-password",
                                                        value: password,
                                                        onChange: (event)=>setPassword(event.target.value),
                                                        className: "block w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-left text-slate-900 shadow-sm transition placeholder:text-slate-400 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-slate-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowPassword((previous)=>!previous),
                                                        "aria-label": showPassword ? t('auth.hidePassword') : t('auth.showPassword'),
                                                        className: "absolute inset-y-0 left-0 flex w-11 items-center justify-center text-slate-400 transition-colors hover:text-indigo-600 dark:hover:text-indigo-300",
                                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EyeSlashIcon"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/AuthScreens.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 35
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EyeIcon"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/AuthScreens.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 74
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    (error || externalError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        role: "alert",
                                        className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-right text-sm font-medium leading-6 text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300",
                                        children: error || externalError
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 155,
                                        columnNumber: 42
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "w-full rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-600/30 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 active:translate-y-0 dark:bg-indigo-500 dark:hover:bg-indigo-400",
                                        children: t('auth.signIn')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/AuthScreens.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/AuthScreens.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/AuthScreens.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/AuthScreens.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const AuthModal = ({ selectedUser, onLogin, onClose })=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTranslator"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"], 'ar');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        onClose
    ]);
    const handleSubmit = (event)=>{
        event.preventDefault();
        if (!password) {
            setError(t('auth.passwordEmpty'));
            return;
        }
        onLogin(password);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        dir: "rtl",
        lang: "ar",
        className: "arabic-auth fixed inset-0 z-40 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-[2px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-900/10 dark:bg-slate-800 dark:ring-white/10 sm:p-8",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "auth-modal-title",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            name: selectedUser.name,
                            size: "large"
                        }, void 0, false, {
                            fileName: "[project]/src/app/AuthScreens.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "auth-modal-title",
                            className: "mt-4 text-2xl font-bold text-gray-900 dark:text-white",
                            children: selectedUser.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/AuthScreens.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 dark:text-gray-400",
                            children: selectedUser.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/AuthScreens.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/AuthScreens.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LockClosedIcon"], {
                                    className: "absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/AuthScreens.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    required: true,
                                    type: showPassword ? 'text' : 'password',
                                    autoFocus: true,
                                    value: password,
                                    onChange: (event)=>setPassword(event.target.value),
                                    className: "block w-full pl-10 pr-10 py-2 rounded-md dark:bg-gray-700 dark:text-white",
                                    placeholder: t('auth.password')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/AuthScreens.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setShowPassword((previous)=>!previous),
                                    "aria-label": showPassword ? t('auth.hidePassword') : t('auth.showPassword'),
                                    className: "absolute left-3 top-2.5 text-gray-400",
                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EyeSlashIcon"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 204,
                                        columnNumber: 31
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EyeIcon"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 204,
                                        columnNumber: 70
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/AuthScreens.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/AuthScreens.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-red-500",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/AuthScreens.tsx",
                            lineNumber: 207,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-full py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700",
                            children: t('auth.signIn')
                        }, void 0, false, {
                            fileName: "[project]/src/app/AuthScreens.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "w-full text-center py-2 text-sm text-gray-600 dark:text-gray-400 hover:underline",
                            children: t('auth.cancel')
                        }, void 0, false, {
                            fileName: "[project]/src/app/AuthScreens.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/AuthScreens.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/AuthScreens.tsx",
            lineNumber: 193,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/AuthScreens.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const PasswordModal = ({ onSave, onClose, isFirstTimeSetup = false })=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTranslator"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"], 'ar');
    const translatedTitle = isFirstTimeSetup ? t('auth.setNewPassword') : t('auth.changePassword');
    const [currentPassword, setCurrentPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newPassword, setNewPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        onClose
    ]);
    const handleSubmit = (event)=>{
        event.preventDefault();
        if (newPassword.length < 6) {
            setError(t('auth.passwordMinLength'));
            return;
        }
        if (newPassword !== confirmPassword) {
            setError(t('auth.passwordMismatch'));
            return;
        }
        onSave({
            currentPassword,
            newPassword
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        dir: "rtl",
        lang: "ar",
        className: "arabic-auth fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-[2px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-[calc(100vh-2rem)] w-full max-w-md overflow-y-auto rounded-3xl bg-white shadow-2xl ring-1 ring-slate-900/10 dark:bg-slate-800 dark:ring-white/10",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "password-modal-title",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 sm:p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "password-modal-title",
                                className: "text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl",
                                children: translatedTitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/AuthScreens.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            isFirstTimeSetup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400",
                                children: t('auth.passwordSetupHint')
                            }, void 0, false, {
                                fileName: "[project]/src/app/AuthScreens.tsx",
                                lineNumber: 257,
                                columnNumber: 34
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 space-y-4",
                                children: [
                                    !isFirstTimeSetup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "current-password",
                                                className: "mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                children: t('auth.currentPassword')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "current-password",
                                                type: "password",
                                                value: currentPassword,
                                                onChange: (event)=>setCurrentPassword(event.target.value),
                                                required: true,
                                                autoFocus: true,
                                                autoComplete: "current-password",
                                                "aria-invalid": Boolean(error),
                                                "aria-describedby": error ? 'password-modal-error' : undefined,
                                                className: "block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 dark:border-slate-600 dark:bg-slate-700/70 dark:text-white dark:placeholder:text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "new-password",
                                                className: "mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                children: t('auth.newPassword')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 266,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "new-password",
                                                type: "password",
                                                value: newPassword,
                                                onChange: (event)=>setNewPassword(event.target.value),
                                                required: true,
                                                autoFocus: isFirstTimeSetup,
                                                autoComplete: "new-password",
                                                "aria-invalid": Boolean(error),
                                                "aria-describedby": error ? 'password-modal-error' : undefined,
                                                className: "block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 dark:border-slate-600 dark:bg-slate-700/70 dark:text-white dark:placeholder:text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 267,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "confirm-new-password",
                                                className: "mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200",
                                                children: t('auth.confirmNewPassword')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "confirm-new-password",
                                                type: "password",
                                                value: confirmPassword,
                                                onChange: (event)=>setConfirmPassword(event.target.value),
                                                required: true,
                                                autoComplete: "new-password",
                                                "aria-invalid": Boolean(error),
                                                "aria-describedby": error ? 'password-modal-error' : undefined,
                                                className: "block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 dark:border-slate-600 dark:bg-slate-700/70 dark:text-white dark:placeholder:text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/AuthScreens.tsx",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        id: "password-modal-error",
                                        role: "alert",
                                        className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium leading-6 text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/AuthScreens.tsx",
                                        lineNumber: 273,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/AuthScreens.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/AuthScreens.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-700 dark:bg-slate-800/80 sm:flex-row sm:justify-end sm:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700",
                                children: t('auth.cancel')
                            }, void 0, false, {
                                fileName: "[project]/src/app/AuthScreens.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40",
                                children: t('auth.savePassword')
                            }, void 0, false, {
                                fileName: "[project]/src/app/AuthScreens.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/AuthScreens.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/AuthScreens.tsx",
                lineNumber: 254,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/AuthScreens.tsx",
            lineNumber: 253,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/AuthScreens.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/app/useAppController.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppController",
    ()=>useAppController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$database$2f$createDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/database/createDatabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$database$2f$localDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/database/localDatabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2f$databaseAuthService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/auth/databaseAuthService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2f$authSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/auth/authSession.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$database$2f$apiDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/database/apiDatabase.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const playSound = (type)=>{
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.type = type === 'confirmation' ? 'sine' : 'triangle';
    oscillator.frequency.setValueAtTime(type === 'confirmation' ? 800 : 660, audioContext.currentTime);
    gainNode.gain.setValueAtTime(type === 'confirmation' ? 0.1 : 0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + (type === 'confirmation' ? 0.2 : 0.4));
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.4);
};
const useAppController = ()=>{
    const { language, direction, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"]);
    const isLocalDevelopment = false;
    const [db] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$database$2f$createDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDatabase"])());
    const [authService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2f$databaseAuthService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DatabaseAuthService"]());
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inventory, setInventory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [orderRequests, setOrderRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dailyOrders, setDailyOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [laboratories, setLaboratories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [backorders, setBackorders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [auditEvents, setAuditEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isDataReady, setIsDataReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const loadedCollections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const [selectedUserForLogin, setSelectedUserForLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [authenticatedUser, setAuthenticatedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loginError, setLoginError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSettingFirstPassword, setIsSettingFirstPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isChangingPassword, setIsChangingPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Dashboard);
    const [activeNotifications, setActiveNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const notificationIdCounter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const notify = (message, type = 'info')=>{
        setActiveNotifications((previous)=>[
                ...previous,
                {
                    id: notificationIdCounter.current++,
                    message,
                    type
                }
            ]);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.lang = language;
        document.documentElement.dir = direction;
    }, [
        direction,
        language
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!authenticatedUser) {
            setIsDataReady(false);
            return;
        }
        // --- Real-time Listeners ---
        loadedCollections.current.clear();
        setIsDataReady(false);
        const markCollectionLoaded = (collection)=>{
            loadedCollections.current.add(collection);
            if (loadedCollections.current.size === 8) {
                setIsDataReady(true);
            }
        };
        const unsubscribers = [
            db.collection('users').onSnapshot((snapshot)=>{
                setUsers(snapshot.docs.map((doc)=>({
                        ...doc.data(),
                        id: doc.id
                    })));
                markCollectionLoaded('users');
            }),
            db.collection('inventory').onSnapshot((snapshot)=>{
                setInventory(snapshot.docs.map((doc)=>({
                        ...doc.data(),
                        id: doc.id
                    })));
                markCollectionLoaded('inventory');
            }),
            db.collection('orderRequests').onSnapshot((snapshot)=>{
                setOrderRequests(snapshot.docs.map((doc)=>({
                        ...doc.data(),
                        id: doc.id
                    })));
                markCollectionLoaded('orderRequests');
            }),
            db.collection('tasks').onSnapshot((snapshot)=>{
                setTasks(snapshot.docs.map((doc)=>({
                        ...doc.data(),
                        id: doc.id
                    })));
                markCollectionLoaded('tasks');
            }),
            db.collection('dailyOrders').onSnapshot((snapshot)=>{
                setDailyOrders(snapshot.docs.map((doc)=>({
                        ...doc.data(),
                        id: doc.id
                    })));
                markCollectionLoaded('dailyOrders');
            }),
            db.collection('customers').onSnapshot((snapshot)=>{
                setLaboratories(snapshot.docs.map((doc)=>({
                        ...doc.data(),
                        id: doc.id
                    })));
                markCollectionLoaded('customers');
            }),
            db.collection('backorders').onSnapshot((snapshot)=>{
                setBackorders(snapshot.docs.map((doc)=>({
                        ...doc.data(),
                        id: doc.id
                    })));
                markCollectionLoaded('backorders');
            }),
            db.collection('notifications').onSnapshot((snapshot)=>{
                const notifs = {};
                snapshot.forEach((doc)=>{
                    notifs[doc.id] = doc.data().messages;
                });
                setNotifications(notifs);
                markCollectionLoaded('notifications');
            })
        ];
        return ()=>unsubscribers.forEach((unsub)=>unsub());
    }, [
        authenticatedUser,
        db
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (authenticatedUser || users.length === 0) return;
        if (!authService) return;
        if (authService.restoreSession) {
            void authService.restoreSession(users).then((user)=>{
                if (user && user.status !== 'disabled') {
                    setAuthenticatedUser(user);
                }
            });
            return;
        }
        const storedUserId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2f$authSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredUserId"])();
        const storedUser = users.find((user)=>user.id === storedUserId);
        if (storedUser && storedUser.status !== 'disabled') {
            setAuthenticatedUser(storedUser);
        } else if (storedUserId) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2f$authSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearStoredUserId"])();
        }
    }, [
        authenticatedUser,
        users,
        authService
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (authenticatedUser && notifications[authenticatedUser.id]) {
            playSound('notification');
            const newMessages = notifications[authenticatedUser.id];
            const newNotifications = newMessages.map((message)=>({
                    id: notificationIdCounter.current++,
                    message
                }));
            setActiveNotifications((prev)=>[
                    ...prev,
                    ...newNotifications
                ]);
            db?.collection('notifications').doc(authenticatedUser.id).delete();
        }
    }, [
        authenticatedUser,
        notifications,
        db
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!authenticatedUser || ![
            'Owner',
            'Manager'
        ].includes(authenticatedUser.role)) {
            setAuditEvents([]);
            return;
        }
        let active = true;
        void db.collection('audit-events').get().then((snapshot)=>{
            if (active) {
                setAuditEvents(snapshot.docs.map((doc)=>({
                        ...doc.data(),
                        id: doc.id
                    })));
            }
        }).catch((error)=>console.error('Unable to load audit history:', error));
        return ()=>{
            active = false;
        };
    }, [
        authenticatedUser,
        db
    ]);
    // --- Auth Handlers ---
    const handleLogin = async (username, password)=>{
        if (!authService) {
            setLoginError(t('errors.authNotConfigured'));
            return;
        }
        setLoginError('');
        const result = await authService.authenticate(username, password, users);
        if (result.success === false) {
            if (result.error === 'password-change-required') {
                setSelectedUserForLogin(result.user);
                setIsSettingFirstPassword(true);
                return;
            }
            if (result.error === 'profile-not-found') {
                try {
                    const snapshot = await db.collection('users').get();
                    const profiles = snapshot.docs.map((doc)=>({
                            ...doc.data(),
                            id: doc.id
                        }));
                    const authenticatedProfile = authService.restoreSession ? await authService.restoreSession(profiles) : null;
                    if (authenticatedProfile && authenticatedProfile.status !== 'disabled') {
                        setAuthenticatedUser(authenticatedProfile);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2f$authSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeUserId"])(authenticatedProfile.id);
                        return;
                    }
                } catch (error) {
                    console.error('Unable to load the authenticated user profile:', error);
                    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$database$2f$apiDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiHttpError"]) {
                        setLoginError(error.status === 401 ? t('errors.apiAuthentication') : error.status === 403 ? t('errors.apiForbidden') : t('errors.apiUnavailable'));
                        return;
                    }
                }
                setLoginError(t('errors.profileNotFound'));
                return;
            }
            setLoginError(result.error === 'disabled-account' ? t('errors.disabledAccount') : result.detail ? result.detail === 'NotAuthorizedException' ? t('errors.cognitoSignIn') : t('errors.incorrectCredentials') : t('errors.incorrectCredentials'));
            return;
        }
        const user = result.user;
        setSelectedUserForLogin(user);
        if (!user.hasSetPassword) {
            setIsSettingFirstPassword(true);
        } else {
            setAuthenticatedUser(user);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2f$authSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeUserId"])(user.id);
            setSelectedUserForLogin(null);
        }
    };
    const handleSetFirstPassword = async ({ newPassword })=>{
        if (!selectedUserForLogin || !authService?.completePasswordChange) return;
        if (authService.completePasswordChange) {
            const result = await authService.completePasswordChange(newPassword);
            if (result.success === false) {
                if (result.error === 'password-session-expired') {
                    notify(t('errors.passwordSessionExpired'), 'error');
                    setIsSettingFirstPassword(false);
                    setSelectedUserForLogin(null);
                } else {
                    notify(t('errors.passwordSave'), 'error');
                }
                return;
            }
        }
        const snapshot = await db.collection('users').get();
        const profiles = snapshot.docs.map((doc)=>({
                ...doc.data(),
                id: doc.id
            }));
        const updatedUser = authService.restoreSession ? await authService.restoreSession(profiles) : null;
        if (!updatedUser || updatedUser.status === 'disabled') {
            notify(t('errors.profileNotFound'), 'error');
            return;
        }
        await db.collection('users').doc(updatedUser.id).update({
            hasSetPassword: true
        });
        const authenticatedUser = {
            ...updatedUser,
            hasSetPassword: true
        };
        setAuthenticatedUser(authenticatedUser);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2f$authSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeUserId"])(authenticatedUser.id);
        setIsSettingFirstPassword(false);
        setSelectedUserForLogin(null);
    };
    const handleChangePassword = async ({ currentPassword, newPassword })=>{
        if (!authService || !authService.changePassword) return;
        const result = await authService.changePassword(currentPassword, newPassword);
        if (result.success) {
            notify(t('success.passwordChanged'), 'success');
            setIsChangingPassword(false);
        } else {
            notify(result.error === 'password-update-failed' ? t('errors.passwordChange') : t('errors.passwordChangeGeneric'), 'error');
        }
    };
    const handleLogout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2f$authSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearStoredUserId"])();
        setAuthenticatedUser(null);
    };
    // --- Data Handlers ---
    const handleAddItem = (newItem)=>{
        if (!db || !authenticatedUser) return;
        db.collection('inventory').add({
            ...newItem,
            managedBy: authenticatedUser.id,
            createdAt: new Date().toISOString()
        });
    };
    const handleUpdateItem = (itemId, updates)=>{
        db?.collection('inventory').doc(itemId).update(updates);
    };
    const handleRemoveItem = async (itemId)=>{
        if (!db) return;
        try {
            await db.collection('inventory').doc(itemId).delete();
        } catch (error) {
            console.error("Error removing item:", error);
            notify(t('errors.removeItem'), 'error');
        }
    };
    const handleImportItems = async (itemsToImport)=>{
        if (!db || !authenticatedUser) {
            notify(t('errors.authImport'), 'error');
            return;
        }
        const batch = db.batch();
        const inventoryCollection = db.collection('inventory');
        const existingItemsMap = new Map();
        inventory.forEach((item)=>{
            if (item.reference) {
                existingItemsMap.set(item.reference.toLowerCase(), item);
            }
        });
        for (const itemToImport of itemsToImport){
            const existingItem = itemToImport.reference ? existingItemsMap.get(itemToImport.reference.toLowerCase()) : undefined;
            if (existingItem) {
                // Item exists, update it
                const itemRef = inventoryCollection.doc(existingItem.id);
                batch.update(itemRef, {
                    name: itemToImport.name,
                    quantity: itemToImport.quantity,
                    type: itemToImport.type
                });
            } else {
                // Item is new, add it, but only if it has a reference
                if (itemToImport.reference) {
                    const newItemRef = inventoryCollection.doc();
                    batch.set(newItemRef, {
                        ...itemToImport,
                        managedBy: authenticatedUser.id,
                        createdAt: new Date().toISOString()
                    });
                }
            }
        }
        try {
            await batch.commit();
        } catch (error) {
            console.error("Error committing batch import:", error);
            notify(t('errors.import'), 'error');
        }
    };
    const handleAddTask = (task)=>{
        if (!db || !authenticatedUser) return;
        // FIX: Explicitly type `newTask` to prevent type inference issues.
        const newTask = {
            ...task,
            createdBy: authenticatedUser.id,
            createdAt: new Date().toISOString()
        };
        db.collection('tasks').add(newTask);
        if (newTask.assignedTo !== authenticatedUser.id) {
            playSound('confirmation');
            const message = `${authenticatedUser.name} assigned you a new task: "${newTask.description.substring(0, 50)}..."`;
            db.collection('notifications').doc(newTask.assignedTo).set({
                messages: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$database$2f$localDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalFieldValue"].arrayUnion(message)
            }, {
                merge: true
            });
        }
    };
    const handleUpdateTaskStatus = (taskId, status)=>{
        const task = tasks.find((existingTask)=>existingTask.id === taskId);
        if (!task || !authenticatedUser) return;
        const canManageTask = authenticatedUser.role === 'Owner' || task.assignedTo === authenticatedUser.id || task.createdBy === authenticatedUser.id;
        if (canManageTask) {
            db.collection('tasks').doc(taskId).update({
                status
            });
        }
    };
    const handleRemoveTask = async (taskId)=>{
        const task = tasks.find((existingTask)=>existingTask.id === taskId);
        if (!task || !authenticatedUser) return;
        const canManageTask = authenticatedUser.role === 'Owner' || task.assignedTo === authenticatedUser.id || task.createdBy === authenticatedUser.id;
        if (!canManageTask) return;
        try {
            await db.collection('tasks').doc(taskId).delete();
        } catch (error) {
            console.error("Error removing task:", error);
            notify(t('errors.removeTask'), 'error');
        }
    };
    const handleAddDailyOrder = (order)=>{
        db?.collection('dailyOrders').add({
            ...order,
            createdAt: new Date().toISOString()
        });
    };
    const handleRemoveDailyOrder = async (orderId)=>{
        if (!db) return;
        try {
            await db.collection('dailyOrders').doc(orderId).delete();
        } catch (error) {
            console.error("Error removing daily order:", error);
            notify(t('errors.removeDailyOrder'), 'error');
        }
    };
    const handleAddOrderRequest = (order)=>{
        if (!db || !authenticatedUser) return;
        db.collection('orderRequests').add({
            ...order,
            userId: authenticatedUser.id,
            createdAt: new Date().toISOString()
        });
    };
    const handleRemoveOrderRequest = async (itemId)=>{
        if (!db) return;
        try {
            await db.collection('orderRequests').doc(itemId).delete();
        } catch (error) {
            console.error("Error removing order request:", error);
            notify(t('errors.removeOrderRequest'), 'error');
        }
    };
    const handleMoveToBackorder = async (order)=>{
        if (!db) return;
        if (!Array.isArray(order.orderDetails) || typeof order.orderDetails[0] !== 'object') {
            notify(t('errors.legacyOrder'), 'error');
            return;
        }
        const itemsToBackorder = [];
        const itemsToFulfill = [];
        const inventoryMap = new Map(inventory.map((item)=>[
                item.name.toLowerCase(),
                item.quantity
            ]));
        for (const requestedItem of order.orderDetails){
            const availableQuantity = inventoryMap.get(requestedItem.name.toLowerCase()) || 0;
            if (requestedItem.quantity > availableQuantity) {
                const shortfall = requestedItem.quantity - availableQuantity;
                itemsToBackorder.push({
                    name: requestedItem.name,
                    quantity: shortfall
                });
                if (availableQuantity > 0) {
                    itemsToFulfill.push({
                        name: requestedItem.name,
                        quantity: availableQuantity
                    });
                }
            } else {
                itemsToFulfill.push(requestedItem);
            }
        }
        try {
            const batch = db.batch();
            if (itemsToBackorder.length > 0) {
                const backorderRef = db.collection('backorders').doc();
                const backorderToAdd = {
                    userId: order.userId,
                    customerName: order.customerName,
                    orderDetails: itemsToBackorder,
                    createdAt: new Date().toISOString()
                };
                batch.set(backorderRef, backorderToAdd);
            }
            const orderRequestRef = db.collection('orderRequests').doc(order.id);
            if (itemsToFulfill.length > 0) {
                batch.update(orderRequestRef, {
                    orderDetails: itemsToFulfill
                });
            } else {
                batch.delete(orderRequestRef);
            }
            await batch.commit();
        } catch (error) {
            console.error("Error splitting order request:", error);
            notify(t('errors.processOrder'), 'error');
        }
    };
    const handleRestock = (itemId, restockQuantity)=>{
        if (!db) return;
        db.collection('inventory').doc(itemId).update({
            quantity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$database$2f$localDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalFieldValue"].increment(restockQuantity)
        });
    };
    const handleAddLaboratory = (laboratory)=>{
        db?.collection('customers').add({
            ...laboratory,
            createdAt: new Date().toISOString()
        });
    };
    const handleRemoveLaboratory = async (laboratoryId)=>{
        if (!db) return;
        try {
            await db.collection('customers').doc(laboratoryId).delete();
        } catch (error) {
            console.error("Error removing customer:", error);
            notify(t('errors.removeLaboratory'), 'error');
        }
    };
    const handleAddBackorder = (order)=>{
        if (!db || !authenticatedUser) return;
        db.collection('backorders').add({
            ...order,
            userId: authenticatedUser.id,
            createdAt: new Date().toISOString()
        });
    };
    const handleRemoveBackorder = async (orderId)=>{
        if (!db) return;
        try {
            await db.collection('backorders').doc(orderId).delete();
        } catch (error) {
            console.error("Error removing backorder:", error);
            notify(t('errors.removeBackorder'), 'error');
        }
    };
    const handleAddUser = async (user, password)=>{
        if (authenticatedUser?.role !== 'Owner') return;
        if (users.some((existingUser)=>(existingUser.username || existingUser.name).toLowerCase() === user.username.toLowerCase())) {
            notify(t('errors.usernameTaken'), 'error');
            return;
        }
        try {
            const reference = await db.collection('users').add({
                ...user,
                hasSetPassword: Boolean(password),
                ...password ? {
                    password
                } : {}
            });
            notify(t('userManagement.userCreated'), 'success');
        } catch (error) {
            console.error('Unable to create user:', error);
            notify(t('errors.createUser'), 'error');
        }
    };
    const handleCreateFirstLocalUser = async (user, password)=>{
        if (!isLocalDevelopment || users.length > 0) return;
        //TURBOPACK unreachable
        ;
    };
    const handleUpdateUser = (userId, updates)=>{
        if (authenticatedUser?.role !== 'Owner') return;
        db.collection('users').doc(userId).update(updates);
    };
    const handleToggleUserStatus = (user)=>{
        if (authenticatedUser?.role !== 'Owner') return;
        if (user.id === authenticatedUser.id) {
            notify(t('errors.selfDisable'), 'error');
            return;
        }
        db.collection('users').doc(user.id).update({
            status: user.status === 'disabled' ? 'active' : 'disabled'
        });
    };
    const handleRemoveNotification = (id)=>{
        setActiveNotifications((prev)=>prev.filter((n)=>n.id !== id));
    };
    const visibleTasks = authenticatedUser?.role === 'Owner' ? tasks : tasks.filter((task)=>task.assignedTo === authenticatedUser?.id || task.createdBy === authenticatedUser?.id);
    const stockItemsCount = inventory.filter((item)=>item.quantity >= 3).length;
    const reorderItemsCount = inventory.filter((item)=>item.quantity < 3).length;
    return {
        users,
        inventory,
        orderRequests,
        tasks: visibleTasks,
        dailyOrders,
        laboratories,
        backorders,
        auditEvents,
        authenticatedUser,
        selectedUserForLogin,
        loginError,
        authService,
        isLocalDevelopment,
        handleCreateFirstLocalUser,
        isSettingFirstPassword,
        isChangingPassword,
        activeTab,
        activeNotifications,
        isSidebarOpen,
        isDataReady,
        stockItemsCount,
        reorderItemsCount,
        setActiveTab,
        setIsSidebarOpen,
        setIsChangingPassword,
        setSelectedUserForLogin,
        setIsSettingFirstPassword,
        handleLogin,
        handleSetFirstPassword,
        handleChangePassword,
        handleLogout,
        handleRemoveNotification,
        notify,
        handleAddItem,
        handleUpdateItem,
        handleRemoveItem,
        handleImportItems,
        handleAddTask,
        handleUpdateTaskStatus,
        handleRemoveTask,
        handleAddDailyOrder,
        handleRemoveDailyOrder,
        handleAddOrderRequest,
        handleRemoveOrderRequest,
        handleMoveToBackorder,
        handleRestock,
        handleAddLaboratory,
        handleRemoveLaboratory,
        handleAddBackorder,
        handleRemoveBackorder,
        handleAddUser,
        handleUpdateUser,
        handleToggleUserStatus
    };
};
}),
"[project]/src/components/Avatar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Avatar = ({ name, size = 'medium' })=>{
    const getInitials = (name)=>{
        const names = name.split(' ');
        if (names.length > 1) {
            return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    };
    const stringToColor = (str)=>{
        let hash = 0;
        for(let i = 0; i < str.length; i++){
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = '#';
        for(let i = 0; i < 3; i++){
            const value = hash >> i * 8 & 0xFF;
            color += ('00' + value.toString(16)).substr(-2);
        }
        return color;
    };
    const getContrastColor = (hexcolor)=>{
        if (hexcolor.startsWith('#')) {
            hexcolor = hexcolor.slice(1);
        }
        const r = parseInt(hexcolor.substr(0, 2), 16);
        const g = parseInt(hexcolor.substr(2, 2), 16);
        const b = parseInt(hexcolor.substr(4, 2), 16);
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;
        return yiq >= 128 ? '#000000' : '#FFFFFF';
    };
    const initials = getInitials(name);
    const bgColor = stringToColor(name);
    const textColor = getContrastColor(bgColor);
    const sizeClasses = {
        small: 'w-7 h-7 text-xs',
        medium: 'w-9 h-9 text-base',
        large: 'w-16 h-16 text-2xl'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-full flex items-center justify-center font-bold ${sizeClasses[size]}`,
        style: {
            backgroundColor: bgColor,
            color: textColor
        },
        title: name,
        children: initials
    }, void 0, false, {
        fileName: "[project]/src/components/Avatar.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Avatar;
}),
"[project]/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/translations.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const Header = ({ currentUser, onLogout, onOpenChangePassword, onToggleSidebar })=>{
    const { t, language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"]);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const languageMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const languageOptionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleOutsideClick = (event)=>{
            if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
                setIsLanguageMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return ()=>document.removeEventListener('mousedown', handleOutsideClick);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (localStorage.getItem('theme') === 'dark' || !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);
    const toggleDarkMode = ()=>{
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "app-header relative z-10 shrink-0 bg-white/95 backdrop-blur-sm dark:bg-slate-900/95",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-full px-3 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-16 items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggleSidebar,
                                className: "rounded-xl p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden",
                                "aria-label": t('nav.openSidebar'),
                                "aria-controls": "app-sidebar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bars3Icon"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-1 flex min-w-0 items-center gap-2 lg:ml-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-8 w-8 text-indigo-600 dark:text-indigo-400",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7l8 5 8-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:text-xl",
                                        children: t('app.name')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-1 sm:gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: languageMenuRef,
                                className: "relative",
                                dir: "ltr",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsLanguageMenuOpen((open)=>!open),
                                        onKeyDown: (event)=>{
                                            if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
                                                event.preventDefault();
                                                setIsLanguageMenuOpen(true);
                                                requestAnimationFrame(()=>languageOptionRefs.current[0]?.focus());
                                            }
                                        },
                                        "aria-haspopup": "listbox",
                                        "aria-expanded": isLanguageMenuOpen,
                                        "aria-label": t('header.language'),
                                        className: "flex items-center rounded-xl border border-slate-200 bg-slate-50 py-2 pl-3 pr-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-indigo-500/60 dark:hover:bg-slate-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pointer-events-none pl-3 text-indigo-600 dark:text-indigo-400",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-4 w-4",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "8.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            d: "M3.5 12h17M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5s-1.1 6.2-3.2 8.5c-2.1-2.3-3.2-5.1-3.2-8.5S9.9 5.8 12 3.5Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2",
                                                children: language === 'ar' ? 'العربية' : 'English'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronDownIcon"], {
                                                className: `h-4 w-4 text-slate-400 transition-transform duration-200 ${isLanguageMenuOpen ? 'rotate-180' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        role: "listbox",
                                        "aria-label": t('header.languageSelection'),
                                        className: `absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-full origin-top overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-900/10 transition-all duration-200 ease-out dark:border-slate-700 dark:bg-slate-800 dark:shadow-black/30 ${isLanguageMenuOpen ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-2 scale-95 opacity-0'}`,
                                        children: [
                                            [
                                                'en',
                                                t('header.english')
                                            ],
                                            [
                                                'ar',
                                                t('header.arabic')
                                            ]
                                        ].map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                ref: (element)=>{
                                                    languageOptionRefs.current[value === 'en' ? 0 : 1] = element;
                                                },
                                                role: "option",
                                                "aria-selected": language === value,
                                                onKeyDown: (event)=>{
                                                    const currentIndex = value === 'en' ? 0 : 1;
                                                    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                                                        event.preventDefault();
                                                        const nextIndex = event.key === 'ArrowDown' ? (currentIndex + 1) % 2 : (currentIndex - 1 + 2) % 2;
                                                        languageOptionRefs.current[nextIndex]?.focus();
                                                    } else if (event.key === 'Escape') {
                                                        event.preventDefault();
                                                        setIsLanguageMenuOpen(false);
                                                    }
                                                },
                                                onClick: ()=>{
                                                    setLanguage(value);
                                                    setIsLanguageMenuOpen(false);
                                                },
                                                className: `flex w-full items-center justify-between whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm transition-colors ${language === value ? 'bg-indigo-50 font-semibold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    language === value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-3 h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 44
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, value, true, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleDarkMode,
                                className: "rounded-xl p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700",
                                "aria-label": isDarkMode ? t('header.switchToLight') : t('header.switchToDark'),
                                children: isDarkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SunIcon"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 142,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoonIcon"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 142,
                                    columnNumber: 63
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 rounded-full bg-slate-50 py-1 pl-1 pr-2 dark:bg-slate-800 sm:gap-3 sm:pr-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        name: currentUser.name,
                                        size: "medium"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 145,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-gray-700 dark:text-gray-200 hidden sm:block",
                                        children: [
                                            t('header.welcome'),
                                            ", ",
                                            currentUser.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden h-6 border-l border-gray-200 dark:border-gray-700 sm:block"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 148,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onOpenChangePassword,
                                className: "rounded-xl p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700",
                                "aria-label": t('header.changePassword'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeyIcon"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 149,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onLogout,
                                className: "p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                "aria-label": t('header.logOut'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoutIcon"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 156,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/src/components/NetworkStatus.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/translations.ts [app-ssr] (ecmascript)");
;
;
;
;
const NetworkStatus = ()=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"]);
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showRestoredMessage, setShowRestoredMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsOnline(navigator.onLine);
        const handleOffline = ()=>{
            setIsOnline(false);
            setShowRestoredMessage(false);
        };
        const handleOnline = ()=>{
            setIsOnline(true);
            setShowRestoredMessage(true);
        };
        window.addEventListener('offline', handleOffline);
        window.addEventListener('online', handleOnline);
        return ()=>{
            window.removeEventListener('offline', handleOffline);
            window.removeEventListener('online', handleOnline);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!showRestoredMessage) return;
        const timer = window.setTimeout(()=>setShowRestoredMessage(false), 3500);
        return ()=>window.clearTimeout(timer);
    }, [
        showRestoredMessage
    ]);
    if (isOnline && !showRestoredMessage) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "status",
        "aria-live": "polite",
        className: `fixed inset-x-0 top-0 z-[60] px-4 py-2.5 text-center text-sm font-semibold shadow-md ${isOnline ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-amber-950'}`,
        children: isOnline ? t('network.restored') : t('network.offline')
    }, void 0, false, {
        fileName: "[project]/src/components/NetworkStatus.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NetworkStatus;
}),
"[project]/src/components/Notification.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationContainer",
    ()=>NotificationContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/translations.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const NotificationToast = ({ message, type = 'info', onDismiss })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            onDismiss();
        }, 7000); // Auto-dismiss after 7 seconds
        return ()=>clearTimeout(timer);
    }, [
        onDismiss
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: type === 'error' ? 'alert' : 'status',
        "aria-live": type === 'error' ? 'assertive' : 'polite',
        className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-full max-w-sm pointer-events-auto ring-1 ring-black dark:ring-white/10 ring-opacity-5 overflow-hidden transition-all transform-gpu animate-fade-in-right",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BellIcon"], {
                        className: `h-6 w-6 ${type === 'success' ? 'text-emerald-500' : type === 'error' ? 'text-red-500' : 'text-indigo-500'}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/Notification.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Notification.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ml-3 w-0 flex-1 pt-0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-gray-900 dark:text-white",
                            children: t('notifications.new')
                        }, void 0, false, {
                            fileName: "[project]/src/components/Notification.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-gray-500 dark:text-gray-400",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/components/Notification.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Notification.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ml-4 flex-shrink-0 flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onDismiss,
                        className: "inline-flex text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-indigo-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: t('notifications.close')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Notification.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XMarkIcon"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Notification.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Notification.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Notification.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Notification.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Notification.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const NotificationContainer = ({ notifications, onRemoveNotification })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col items-center space-y-4 sm:items-end",
            children: notifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationToast, {
                    message: notification.message,
                    type: notification.type,
                    onDismiss: ()=>onRemoveNotification(notification.id)
                }, notification.id, false, {
                    fileName: "[project]/src/components/Notification.tsx",
                    lineNumber: 61,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/Notification.tsx",
            lineNumber: 59,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Notification.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/translations.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const NavLink = ({ icon, label, isActive, onClick, direction, badgeCount = 0, badgeColor })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: `w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 group ${isActive ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(icon, {
                className: `h-6 w-6 ${direction === 'rtl' ? 'ml-3' : 'mr-3'} ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400'}`
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `flex-1 ${direction === 'rtl' ? 'text-right' : 'text-left'}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            badgeCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${direction === 'rtl' ? 'mr-auto' : 'ml-auto'} inline-block py-0.5 px-2 text-xs font-bold rounded-full ${badgeColor || 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200'}`,
                children: badgeCount
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sidebar.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const Sidebar = ({ activeTab, setActiveTab, stockItemsCount, reorderItemsCount, orderRequestsCount, tasksCount, dailyOrdersCount, laboratoriesCount, backordersCount, canManageUsers, canViewAudit, isOpen, setIsOpen })=>{
    const { language, t, direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"]);
    const [isInventoryOpen, setIsInventoryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const inventoryTabs = [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Inventory,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Reorder,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].OrderRequests,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].DailyOrders,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Backorder
    ];
    const isInventoryActive = inventoryTabs.includes(activeTab);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isInventoryActive) {
            setIsInventoryOpen(true);
        }
    }, [
        isInventoryActive
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };
        const shouldLockScroll = isOpen && window.innerWidth < 1024;
        if (shouldLockScroll) {
            document.body.style.overflow = 'hidden';
        }
        document.addEventListener('keydown', handleKeyDown);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
            if (shouldLockScroll) {
                document.body.style.overflow = '';
            }
        };
    }, [
        isOpen,
        setIsOpen
    ]);
    const handleLinkClick = (tab)=>{
        setActiveTab(tab);
        if (window.innerWidth < 1024) {
            setIsOpen(false);
        }
    };
    const inventoryBadgeTotal = reorderItemsCount + orderRequestsCount + dailyOrdersCount + backordersCount;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`,
                onClick: ()=>setIsOpen(false),
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                id: "app-sidebar",
                className: `app-sidebar fixed top-0 z-40 flex h-full w-[min(18rem,calc(100vw-1rem))] flex-col bg-white p-3 shadow-xl transition-transform duration-300 ease-out dark:bg-slate-900 sm:p-4 ${direction === 'rtl' ? 'right-0 border-l' : 'left-0 border-r'} border-gray-200 dark:border-gray-700 ${isOpen ? 'translate-x-0' : direction === 'rtl' ? 'translate-x-full' : '-translate-x-full'} lg:relative lg:w-64 lg:translate-x-0 lg:shrink-0 lg:shadow-none`,
                "aria-label": t('nav.menu'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5 flex items-center justify-between lg:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-semibold text-gray-900 dark:text-white",
                                children: t('nav.menu')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "rounded-xl p-2 text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:hover:bg-gray-700",
                                "aria-label": t('nav.closeSidebar'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XMarkIcon"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Sidebar.tsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 129,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 127,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "min-h-0 flex-1 overflow-y-auto space-y-1 pr-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HomeIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Sidebar.tsx",
                                    lineNumber: 135,
                                    columnNumber: 31
                                }, ("TURBOPACK compile-time value", void 0)),
                                label: t('nav.dashboard'),
                                direction: direction,
                                isActive: activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Dashboard,
                                onClick: ()=>handleLinkClick(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Dashboard)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 134,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsInventoryOpen(!isInventoryOpen),
                                        "aria-expanded": isInventoryOpen,
                                        "aria-controls": "inventory-submenu",
                                        "aria-label": `${t('nav.inventory')} - ${isInventoryOpen ? t('nav.collapse') : t('nav.expand')}`,
                                        className: `group flex w-full items-center rounded-xl px-3 py-3 text-sm font-medium transition-colors duration-200 ${isInventoryActive ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArchiveBoxIcon"], {
                                                className: `h-6 w-6 ${direction === 'rtl' ? 'ml-3' : 'mr-3'} ${isInventoryActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Sidebar.tsx",
                                                lineNumber: 152,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `flex-1 ${direction === 'rtl' ? 'text-right' : 'text-left'} ${isInventoryActive ? 'font-semibold text-indigo-600 dark:text-indigo-300' : ''}`,
                                                children: t('nav.inventory')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Sidebar.tsx",
                                                lineNumber: 153,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            inventoryBadgeTotal > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-auto mr-2 inline-block py-0.5 px-2 text-xs font-bold rounded-full bg-indigo-500 text-white",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(inventoryBadgeTotal, language)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Sidebar.tsx",
                                                lineNumber: 155,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronDownIcon"], {
                                                className: `h-5 w-5 transform transition-transform duration-200 ${isInventoryOpen ? 'rotate-180' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Sidebar.tsx",
                                                lineNumber: 159,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 144,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: "inventory-submenu",
                                        className: `overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${isInventoryOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${direction === 'rtl' ? 'mr-4 border-r pr-4' : 'ml-4 border-l pl-4'} space-y-1 pt-1 border-gray-200 dark:border-gray-600`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListBulletIcon"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/Sidebar.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 43
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    label: t('nav.inStock'),
                                                    direction: direction,
                                                    isActive: activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Inventory,
                                                    onClick: ()=>handleLinkClick(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Inventory),
                                                    badgeCount: stockItemsCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Sidebar.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlusIcon"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/Sidebar.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 43
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    label: t('nav.reorderNeeded'),
                                                    direction: direction,
                                                    isActive: activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Reorder,
                                                    onClick: ()=>handleLinkClick(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Reorder),
                                                    badgeCount: reorderItemsCount,
                                                    badgeColor: "bg-red-500 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Sidebar.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InformationCircleIcon"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/Sidebar.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 43
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    label: t('nav.orderRequests'),
                                                    direction: direction,
                                                    isActive: activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].OrderRequests,
                                                    onClick: ()=>handleLinkClick(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].OrderRequests),
                                                    badgeCount: orderRequestsCount,
                                                    badgeColor: "bg-amber-500 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Sidebar.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TruckIcon"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/Sidebar.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 43
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    label: t('nav.dailyOrders'),
                                                    direction: direction,
                                                    isActive: activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].DailyOrders,
                                                    onClick: ()=>handleLinkClick(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].DailyOrders),
                                                    badgeCount: dailyOrdersCount,
                                                    badgeColor: "bg-emerald-500 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Sidebar.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClockIcon"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/Sidebar.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 43
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    label: t('nav.backorder'),
                                                    direction: direction,
                                                    isActive: activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Backorder,
                                                    onClick: ()=>handleLinkClick(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Backorder),
                                                    badgeCount: backordersCount,
                                                    badgeColor: "bg-yellow-500 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Sidebar.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 34
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Sidebar.tsx",
                                            lineNumber: 162,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Sidebar.tsx",
                                        lineNumber: 161,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 143,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClipboardDocumentCheckIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Sidebar.tsx",
                                    lineNumber: 212,
                                    columnNumber: 31
                                }, ("TURBOPACK compile-time value", void 0)),
                                label: t('nav.teamTasks'),
                                direction: direction,
                                isActive: activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Tasks,
                                onClick: ()=>handleLinkClick(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Tasks),
                                badgeCount: tasksCount,
                                badgeColor: "bg-sky-500 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 211,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserGroupIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Sidebar.tsx",
                                    lineNumber: 221,
                                    columnNumber: 31
                                }, ("TURBOPACK compile-time value", void 0)),
                                label: t('nav.laboratories'),
                                direction: direction,
                                isActive: activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Laboratories,
                                onClick: ()=>handleLinkClick(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Laboratories),
                                badgeCount: laboratoriesCount,
                                badgeColor: "bg-purple-500 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 220,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            canManageUsers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserGroupIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Sidebar.tsx",
                                    lineNumber: 231,
                                    columnNumber: 35
                                }, ("TURBOPACK compile-time value", void 0)),
                                label: t('nav.users'),
                                direction: direction,
                                isActive: activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Users,
                                onClick: ()=>handleLinkClick(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Users)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 230,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            canViewAudit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InformationCircleIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Sidebar.tsx",
                                    lineNumber: 240,
                                    columnNumber: 35
                                }, ("TURBOPACK compile-time value", void 0)),
                                label: t('nav.audit'),
                                direction: direction,
                                isActive: activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Audit,
                                onClick: ()=>handleLinkClick(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tab"].Audit)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Sidebar.tsx",
                                lineNumber: 239,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 122,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sidebar.tsx",
        lineNumber: 114,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Sidebar;
}),
"[project]/src/components/icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArchiveBoxIcon",
    ()=>ArchiveBoxIcon,
    "ArrowDownTrayIcon",
    ()=>ArrowDownTrayIcon,
    "ArrowLeftIcon",
    ()=>ArrowLeftIcon,
    "ArrowUpTrayIcon",
    ()=>ArrowUpTrayIcon,
    "Bars3Icon",
    ()=>Bars3Icon,
    "BellIcon",
    ()=>BellIcon,
    "ChevronDownIcon",
    ()=>ChevronDownIcon,
    "ChevronUpIcon",
    ()=>ChevronUpIcon,
    "ClipboardDocumentCheckIcon",
    ()=>ClipboardDocumentCheckIcon,
    "ClipboardIcon",
    ()=>ClipboardIcon,
    "ClockIcon",
    ()=>ClockIcon,
    "EyeIcon",
    ()=>EyeIcon,
    "EyeSlashIcon",
    ()=>EyeSlashIcon,
    "HomeIcon",
    ()=>HomeIcon,
    "InformationCircleIcon",
    ()=>InformationCircleIcon,
    "KeyIcon",
    ()=>KeyIcon,
    "LinkIcon",
    ()=>LinkIcon,
    "ListBulletIcon",
    ()=>ListBulletIcon,
    "LockClosedIcon",
    ()=>LockClosedIcon,
    "LogoutIcon",
    ()=>LogoutIcon,
    "MinusIcon",
    ()=>MinusIcon,
    "MoonIcon",
    ()=>MoonIcon,
    "PencilIcon",
    ()=>PencilIcon,
    "PlusIcon",
    ()=>PlusIcon,
    "SearchIcon",
    ()=>SearchIcon,
    "SunIcon",
    ()=>SunIcon,
    "TrashIcon",
    ()=>TrashIcon,
    "TruckIcon",
    ()=>TruckIcon,
    "UserGroupIcon",
    ()=>UserGroupIcon,
    "XMarkIcon",
    ()=>XMarkIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const PlusIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 4.5v15m7.5-7.5h-15"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 5,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MinusIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19.5 12h-15"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 11,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const TrashIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.124-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.077-2.09.921-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 17,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ChevronDownIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 23,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ChevronUpIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4.5 15.75l7.5-7.5 7.5 7.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const SunIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 35,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MoonIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 41,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ArchiveBoxIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 46,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ListBulletIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M8.25 6.75h12M8.25 12h12M8.25 17.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 53,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const LogoutIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 59,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SearchIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 65,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ArrowDownTrayIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 71,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ArrowUpTrayIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 77,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const XMarkIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18L18 6M6 6l12 12"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 83,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 82,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const InformationCircleIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 89,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ClipboardDocumentCheckIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const TruckIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 101,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const PencilIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 107,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const BellIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 113,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const HomeIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const LockClosedIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 125,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const EyeIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const EyeSlashIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243l-4.243-4.243"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 138,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ArrowLeftIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 144,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const KeyIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 150,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const Bars3Icon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 156,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const UserGroupIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M18 18.72a9.094 9.094 0 00-12 0m12 0a9.094 9.094 0 01-12 0m12 0v-2.25M12 14.25v-2.25m0-4.5v-2.25m-6 6.75v-2.25m6 2.25a9.091 9.091 0 00-6-2.25m0 0a9.091 9.091 0 016-2.25m0 0a9.091 9.091 0 016 2.25m-6 2.25a9.091 9.091 0 006-2.25m6 0a9.091 9.091 0 01-6 2.25m0 0a9.091 9.091 0 00-6 2.25M3.75 12a9.091 9.091 0 016-2.25m6 0a9.091 9.091 0 016 2.25m0 0a9.091 9.091 0 00-6-2.25m-6 0a9.091 9.091 0 00-6-2.25m12 0a9.091 9.091 0 01-6 2.25"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 162,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ClockIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 168,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const LinkIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 174,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ClipboardIcon = ({ className = "h-6 w-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 180,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/i18n/i18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_LANGUAGE",
    ()=>DEFAULT_LANGUAGE,
    "LANGUAGE_STORAGE_KEY",
    ()=>LANGUAGE_STORAGE_KEY,
    "SUPPORTED_LANGUAGES",
    ()=>SUPPORTED_LANGUAGES,
    "createTranslator",
    ()=>createTranslator,
    "formatDate",
    ()=>formatDate,
    "formatNumber",
    ()=>formatNumber,
    "getLanguageDirection",
    ()=>getLanguageDirection,
    "getStoredLanguage",
    ()=>getStoredLanguage,
    "isSupportedLanguage",
    ()=>isSupportedLanguage,
    "storeLanguage",
    ()=>storeLanguage,
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const DEFAULT_LANGUAGE = 'ar';
const SUPPORTED_LANGUAGES = [
    'en',
    'ar'
];
const LANGUAGE_STORAGE_KEY = 'invictus-manager-language';
const LANGUAGE_CHANGE_EVENT = 'invictus-manager-language-change';
const isSupportedLanguage = (value)=>value !== null && SUPPORTED_LANGUAGES.includes(value);
const getStoredLanguage = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return DEFAULT_LANGUAGE;
    //TURBOPACK unreachable
    ;
    const storedLanguage = undefined;
};
const storeLanguage = (language)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const getLanguageDirection = (language)=>language === 'ar' ? 'rtl' : 'ltr';
const formatNumber = (value, language)=>new Intl.NumberFormat(language === 'ar' ? 'ar' : 'en', {
        numberingSystem: 'latn'
    }).format(value);
const formatDate = (value, language)=>new Intl.DateTimeFormat(language === 'ar' ? 'ar' : 'en', {
        numberingSystem: 'latn',
        dateStyle: 'medium'
    }).format(new Date(value));
const createTranslator = (resources, language)=>(key)=>resources[language][key] ?? resources[DEFAULT_LANGUAGE][key] ?? key;
const useTranslation = (resources)=>{
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getStoredLanguage);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const handleLanguageChange = undefined;
    });
    const setLanguage = (nextLanguage)=>{
        storeLanguage(nextLanguage);
        setLanguageState(nextLanguage);
    };
    return {
        language,
        setLanguage,
        direction: getLanguageDirection(language),
        t: createTranslator(resources, language)
    };
};
}),
"[project]/src/i18n/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        'app.name': 'Ziva Management System',
        'auth.signInTitle': 'Sign in to your account',
        'auth.signInSubtitle': 'Use your assigned username and password.',
        'auth.usernameOrEmail': 'Username or email',
        'auth.password': 'Password',
        'auth.currentPassword': 'Current Password',
        'auth.signIn': 'Sign in',
        'auth.localSetupTitle': 'Create local administrator',
        'auth.localSetupSubtitle': 'Create the first local user to test the application.',
        'auth.createLocalUser': 'Create local user',
        'auth.completeAllFields': 'Complete all fields to continue.',
        'auth.enterPassword': 'Enter your password to continue.',
        'auth.passwordEmpty': 'Password cannot be empty.',
        'auth.showPassword': 'Show password',
        'auth.hidePassword': 'Hide password',
        'auth.setNewPassword': 'Set Your New Password',
        'auth.changePassword': 'Change Your Password',
        'auth.passwordSetupHint': 'For security, please set your own password.',
        'auth.newPassword': 'New Password',
        'auth.confirmNewPassword': 'Confirm New Password',
        'auth.savePassword': 'Save Password',
        'auth.cancel': 'Cancel',
        'auth.passwordMinLength': 'New password must be at least 6 characters long.',
        'auth.passwordMismatch': 'New passwords do not match.',
        'status.loadingUsers': 'Loading user profiles...',
        'status.loadingData': 'Loading your workspace...',
        'network.offline': 'You are offline. Changes may not sync until the connection returns.',
        'network.restored': 'Connection restored.',
        'errors.authNotConfigured': 'Authentication is not configured. Contact the administrator.',
        'errors.disabledAccount': 'This account is disabled. Please contact an administrator.',
        'errors.cognitoSignIn': 'Cognito rejected the sign-in. Verify the configured user pool and enter the temporary password exactly.',
        'errors.incorrectCredentials': 'Incorrect username or password.',
        'errors.profileNotFound': 'Cognito login succeeded, but no matching application user profile was found. Contact the administrator.',
        'errors.apiAuthentication': 'The login session was not accepted by the application API. Sign in again.',
        'errors.apiForbidden': 'Your Cognito account is not authorized to access the application workspace.',
        'errors.apiUnavailable': 'The application API could not load your profile. Check the server and DynamoDB configuration.',
        'errors.passwordSave': 'The new password could not be saved. Please try again.',
        'errors.passwordSessionExpired': 'The temporary-password session expired. Sign in again with the temporary password, then set the new password without refreshing the page.',
        'success.passwordChanged': 'Password changed successfully!',
        'errors.passwordChange': 'The current password is incorrect or the new password could not be saved.',
        'errors.passwordChangeGeneric': 'The password could not be changed.',
        'errors.removeItem': 'An error occurred while trying to remove the item. Please try again.',
        'errors.authImport': 'Authentication error. Cannot import items.',
        'errors.import': 'An error occurred during the import process. Please try again.',
        'errors.removeTask': 'An error occurred while trying to remove the task. Please try again.',
        'errors.removeDailyOrder': 'An error occurred while trying to remove the daily order. Please try again.',
        'errors.removeOrderRequest': 'An error occurred while trying to remove the order request. Please try again.',
        'errors.legacyOrder': 'Cannot process this old order format automatically. Please handle it manually.',
        'errors.processOrder': 'An error occurred while processing the order. Please try again.',
        'errors.removeLaboratory': 'An error occurred while trying to remove the laboratory. Please try again.',
        'errors.removeBackorder': 'An error occurred while trying to remove the backorder. Please try again.',
        'errors.usernameTaken': 'That username is already in use.',
        'errors.selfDisable': 'You cannot disable your own account.',
        'errors.createUser': 'The user could not be created. Check the email, Cognito configuration, and try again.',
        'notifications.new': 'New Notification',
        'notifications.close': 'Close',
        'confirm.title': 'Confirm action',
        'confirm.delete': 'Delete',
        'nav.menu': 'Menu',
        'nav.closeSidebar': 'Close sidebar',
        'nav.openSidebar': 'Open sidebar',
        'nav.dashboard': 'Dashboard',
        'nav.inventory': 'Inventory',
        'nav.inStock': 'In Stock',
        'nav.reorderNeeded': 'Reorder Needed',
        'nav.orderRequests': 'Order Requests',
        'nav.dailyOrders': 'Daily Orders',
        'nav.backorder': 'Backorder',
        'nav.teamTasks': 'Team Tasks',
        'nav.laboratories': 'Laboratories',
        'nav.users': 'Users',
        'nav.audit': 'Audit history',
        'nav.expand': 'Expand',
        'nav.collapse': 'Collapse',
        'header.welcome': 'Welcome',
        'header.changePassword': 'Change password',
        'header.logOut': 'Log out',
        'header.language': 'Language',
        'header.languageSelection': 'Language selection',
        'header.english': 'English',
        'header.arabic': 'Arabic',
        'header.switchToLight': 'Switch to light mode',
        'header.switchToDark': 'Switch to dark mode',
        'audit.title': 'Audit history',
        'audit.subtitle': 'Workspace governance',
        'audit.events': 'events',
        'audit.emptyTitle': 'No audit events yet',
        'audit.emptyDescription': 'Important changes will appear here with the actor, role, action, and timestamp.',
        'dashboard.itemsToReorder': 'Items to Reorder',
        'dashboard.pendingTasks': 'Your Pending Tasks',
        'dashboard.ordersSentToday': "Today's Orders Sent",
        'dashboard.myPendingTasks': 'My Pending Tasks',
        'dashboard.viewAll': 'View All',
        'dashboard.by': 'By',
        'dashboard.due': 'Due',
        'dashboard.noPendingTasks': 'You have no pending tasks. Great job!',
        'dashboard.recentActivity': 'Recent Activity',
        'dashboard.noRecentActivity': 'No recent activity yet.',
        'dashboard.system': 'System',
        'activity.addedToStock': 'added to stock.',
        'activity.assignedTask': 'assigned a task to',
        'activity.completedTask': 'completed task:',
        'activity.loggedOrder': 'logged an order for',
        'activity.loggedRequest': 'logged a new order request from',
        'time.yearsAgo': 'years ago',
        'time.monthsAgo': 'months ago',
        'time.daysAgo': 'days ago',
        'time.hoursAgo': 'hours ago',
        'time.minutesAgo': 'minutes ago',
        'time.secondsAgo': 'seconds ago',
        'inventory.inStockItems': 'In Stock Items',
        'inventory.addNew': 'Add New Stock Item',
        'inventory.reference': 'Reference',
        'inventory.itemName': 'Item Name',
        'inventory.itemType': 'Item Type',
        'inventory.quantity': 'Quantity',
        'inventory.quantityMinimum': 'Quantity (>=3)',
        'inventory.outOfStock': 'Out of stock',
        'inventory.lowStock': 'Low stock',
        'inventory.inStock': 'In stock',
        'inventory.managedBy': 'Managed By',
        'inventory.actions': 'Actions',
        'inventory.search': 'Search by ref, name, type...',
        'inventory.import': 'Import',
        'inventory.export': 'Export',
        'inventory.add': 'Add',
        'inventory.cancel': 'Cancel',
        'inventory.noSearchResults': 'No items found for',
        'inventory.noItems': 'No items in stock. Add one to get started!',
        'inventory.paginationShowing': 'Showing {from}-{to} of {total} items',
        'inventory.paginationPrevious': 'Previous',
        'inventory.paginationNext': 'Next',
        'inventory.importEmpty': 'The CSV file is empty or has no data rows.',
        'inventory.importInvalidFormat': 'Invalid CSV format. Include Reference, Item Name, Type, and Quantity columns.',
        'inventory.importNoValidRows': 'No valid items were found in the file.',
        'inventory.importSuccess': 'Successfully imported or updated {count} items.',
        'inventory.importFailed': 'Failed to import file: {error}',
        'inventory.exportDate': 'inventory-stock',
        'inventory.edit': 'Edit',
        'inventory.remove': 'Remove',
        'reorder.title': 'Reorder Needed',
        'reorder.export': 'Export',
        'reorder.addManually': 'Add Manually',
        'reorder.addItemTitle': 'Add Item to Reorder List',
        'reorder.addItem': 'Add Item',
        'reorder.allStocked': 'All items are well-stocked!',
        'reorder.lowStockHint': 'Items with less than 3 units will appear here.',
        'reorder.left': 'left',
        'reorder.restock': 'Restock',
        'reorder.editItem': 'Edit',
        'reorder.removeItem': 'Remove',
        'reorder.removeConfirmation': 'Are you sure you want to remove item "{name}"? This action cannot be undone.',
        'reorder.paginationShowing': 'Showing {from}-{to} of {total} items',
        'reorder.paginationPrevious': 'Previous',
        'reorder.paginationNext': 'Next',
        'reorder.exportDate': 'reorder-needed',
        'editItem.title': 'Edit Item',
        'editItem.save': 'Save Changes',
        'orderRequests.title': 'Pending Order Requests',
        'orderRequests.logNew': 'Log a New Request',
        'orderRequests.customerName': 'Customer Name',
        'orderRequests.requestedItems': 'Requested Items',
        'orderRequests.searchItem': 'Search or type item name...',
        'orderRequests.inStock': 'in stock',
        'orderRequests.ready': 'Ready to fulfill',
        'orderRequests.noItemsFound': 'No items found. You can still add it.',
        'orderRequests.quantity': 'Qty',
        'orderRequests.removeItem': 'Remove item',
        'orderRequests.addAnother': 'Add another item',
        'orderRequests.addRequest': 'Add Request',
        'orderRequests.noPending': 'No pending requests.',
        'orderRequests.emptyHint': 'Log uncompleted orders or customer requests here.',
        'orderRequests.for': 'For:',
        'orderRequests.by': 'By:',
        'orderRequests.createdBy': 'Created by',
        'orderRequests.moveToBackorder': 'Move to Backorder',
        'orderRequests.removeOrder': 'Remove order for',
        'orderRequests.removeConfirmation': 'Are you sure you want to remove the order request for "{name}"? This action cannot be undone.',
        'orderRequests.search': 'Search customer or item...',
        'orderRequests.allStatuses': 'All statuses',
        'orderRequests.readyFilter': 'Ready to fulfill',
        'orderRequests.backorderFilter': 'Needs backorder',
        'orderRequests.noFilteredResults': 'No requests match your filters.',
        'orderRequests.paginationShowing': 'Showing {from}-{to} of {total} requests',
        'orderRequests.paginationPrevious': 'Previous',
        'orderRequests.paginationNext': 'Next',
        'dailyOrders.title': 'Log of Sent Daily Orders',
        'dailyOrders.addToday': "Add Today's Order",
        'dailyOrders.details': 'Order Details (e.g., items, quantities)',
        'dailyOrders.customerName': 'Customer Name',
        'dailyOrders.logOrder': 'Log Order',
        'dailyOrders.empty': 'No orders logged yet.',
        'dailyOrders.emptyHint': 'Use the form above to record an order that has been sent out.',
        'dailyOrders.customer': 'Customer:',
        'dailyOrders.removeOrder': 'Remove order for',
        'dailyOrders.removeConfirmation': 'Are you sure you want to remove the order for "{name}" from {date}? This action cannot be undone.',
        'dailyOrders.paginationShowing': 'Showing {from}-{to} of {total} orders',
        'dailyOrders.paginationPrevious': 'Previous',
        'dailyOrders.paginationNext': 'Next',
        'backorder.title': 'Pending Backorders',
        'backorder.empty': 'No pending backorders.',
        'backorder.emptyHint': 'Items from unfulfillable order requests will appear here.',
        'backorder.for': 'For:',
        'backorder.by': 'By:',
        'backorder.loggedBy': 'Logged by',
        'backorder.remove': 'Remove backorder for',
        'backorder.removeConfirmation': 'Are you sure you want to remove the backorder for "{name}"? This should be done only after the order is fulfilled.',
        'backorder.paginationShowing': 'Showing {from}-{to} of {total} backorders',
        'backorder.paginationPrevious': 'Previous',
        'backorder.paginationNext': 'Next',
        'tasks.title': 'Team Tasks',
        'tasks.assignNew': 'Assign a New Task',
        'tasks.description': 'Task Description',
        'tasks.assignTo': 'Assign To',
        'tasks.dueDate': 'Due Date',
        'tasks.add': 'Add Task',
        'tasks.empty': 'No tasks assigned.',
        'tasks.emptyHint': 'Use the form above to create a new task for a team member.',
        'tasks.to': 'To:',
        'tasks.by': 'By:',
        'tasks.assignedTo': 'Assigned to',
        'tasks.createdBy': 'Created by',
        'tasks.due': 'Due:',
        'tasks.remove': 'Remove task',
        'tasks.removeConfirmation': 'Are you sure you want to remove this task? This action cannot be undone.',
        'tasks.completeConfirmation': 'Are you sure you want to mark this task as completed?',
        'tasks.statusToDo': 'To Do',
        'tasks.statusInProgress': 'In Progress',
        'tasks.statusCompleted': 'Completed',
        'tasks.status': 'Task status',
        'tasks.paginationShowing': 'Showing {from}-{to} of {total} tasks',
        'tasks.paginationPrevious': 'Previous',
        'tasks.paginationNext': 'Next',
        'userManagement.paginationShowing': 'Showing {from}-{to} of {total} users',
        'userManagement.paginationPrevious': 'Previous',
        'userManagement.paginationNext': 'Next',
        'userManagement.title': 'User Management',
        'userManagement.subtitle': 'Manage team access and role assignments.',
        'userManagement.addUser': 'Add User',
        'userManagement.fullName': 'Full name',
        'userManagement.fullNamePlaceholder': 'e.g. Abdullah Al-Salloum',
        'userManagement.username': 'Username',
        'userManagement.usernamePlaceholder': 'e.g. abdullah',
        'userManagement.role': 'Role',
        'userManagement.email': 'Email',
        'userManagement.emailPlaceholder': 'name@example.com',
        'userManagement.optional': 'optional',
        'userManagement.cognitoHint': 'A temporary Cognito invitation will be sent to the user email.',
        'userManagement.localHint': 'Local development mode: the user and password are stored only in this browser.',
        'userManagement.userCreated': 'User created. A temporary password invitation was sent by Cognito.',
        'userManagement.teamMembers': 'Team Members',
        'userManagement.active': 'active',
        'userManagement.disabled': 'disabled',
        'userManagement.enable': 'Enable',
        'userManagement.disable': 'Disable',
        'userManagement.roleFor': 'Role for',
        'userManagement.roleOwner': 'Owner',
        'userManagement.roleManager': 'Manager',
        'userManagement.roleSalesManager': 'Sales Manager',
        'userManagement.roleTechnicalService': 'Technical Service',
        'userManagement.roleAccountant': 'Accountant',
        'userManagement.roleSalesLead': 'Sales Lead',
        'userManagement.roleComputerEngineer': 'Computer Engineer',
        'laboratories.title': 'Laboratory Information',
        'laboratories.addNew': 'Add New Laboratory',
        'laboratories.name': 'Laboratory Name',
        'laboratories.mapsLink': 'Google Maps Link',
        'laboratories.contacts': 'Contacts',
        'laboratories.contactName': 'Contact Name',
        'laboratories.phoneNumber': 'Phone Number',
        'laboratories.removeContact': 'Remove contact',
        'laboratories.addContact': 'Add another contact',
        'laboratories.add': 'Add Laboratory',
        'laboratories.empty': 'No laboratories added yet.',
        'laboratories.emptyHint': 'Use the form above to add a new laboratory and its contacts.',
        'laboratories.viewMap': 'View map for',
        'laboratories.copyMap': 'Copy map link for',
        'laboratories.copied': 'Copied!',
        'laboratories.remove': 'Remove',
        'laboratories.validation': 'Please provide a laboratory name and at least one contact.',
        'laboratories.removeConfirmation': 'Are you sure you want to remove the laboratory "{name}"? This action cannot be undone.',
        'laboratories.copyFailed': 'Could not copy link to clipboard.',
        'laboratories.paginationShowing': 'Showing {from}-{to} of {total} laboratories',
        'laboratories.paginationPrevious': 'Previous',
        'laboratories.paginationNext': 'Next'
    },
    ar: {
        'app.name': 'نظام إدارة زيفا',
        'auth.signInTitle': 'تسجيل الدخول إلى حسابك',
        'auth.signInSubtitle': 'استخدم اسم المستخدم وكلمة المرور المخصصين لك.',
        'auth.usernameOrEmail': 'اسم المستخدم أو البريد الإلكتروني',
        'auth.password': 'كلمة المرور',
        'auth.currentPassword': 'كلمة المرور الحالية',
        'auth.signIn': 'تسجيل الدخول',
        'auth.localSetupTitle': 'إنشاء المسؤول المحلي',
        'auth.localSetupSubtitle': 'أنشئ أول مستخدم محلي لتجربة التطبيق.',
        'auth.createLocalUser': 'إنشاء المستخدم المحلي',
        'auth.completeAllFields': 'أكمل جميع الحقول للمتابعة.',
        'auth.enterPassword': 'أدخل كلمة المرور للمتابعة.',
        'auth.passwordEmpty': 'لا يمكن أن تكون كلمة المرور فارغة.',
        'auth.showPassword': 'إظهار كلمة المرور',
        'auth.hidePassword': 'إخفاء كلمة المرور',
        'auth.setNewPassword': 'تعيين كلمة مرور جديدة',
        'auth.changePassword': 'تغيير كلمة المرور',
        'auth.passwordSetupHint': 'لأمان حسابك، يرجى تعيين كلمة المرور الخاصة بك.',
        'auth.newPassword': 'كلمة المرور الجديدة',
        'auth.confirmNewPassword': 'تأكيد كلمة المرور الجديدة',
        'auth.savePassword': 'حفظ كلمة المرور',
        'auth.cancel': 'إلغاء',
        'auth.passwordMinLength': 'يجب أن تتكون كلمة المرور الجديدة من 6 أحرف على الأقل.',
        'auth.passwordMismatch': 'كلمتا المرور الجديدتان غير متطابقتين.',
        'status.loadingUsers': 'جارٍ تحميل ملفات المستخدمين...',
        'status.loadingData': 'جارٍ تحميل مساحة العمل...',
        'network.offline': 'أنت غير متصل بالإنترنت. قد لا تتم مزامنة التغييرات حتى يعود الاتصال.',
        'network.restored': 'تمت استعادة الاتصال.',
        'errors.authNotConfigured': 'المصادقة غير مُعدّة. تواصل مع المسؤول.',
        'errors.disabledAccount': 'هذا الحساب معطل. تواصل مع المسؤول.',
        'errors.cognitoSignIn': 'رفض Cognito تسجيل الدخول. تحقق من مجموعة المستخدمين المُعدّة وأدخل كلمة المرور المؤقتة كما هي.',
        'errors.incorrectCredentials': 'اسم المستخدم أو كلمة المرور غير صحيحة.',
        'errors.profileNotFound': 'تم تسجيل الدخول عبر Cognito، لكن لم يتم العثور على ملف مستخدم مطابق في التطبيق. تواصل مع المسؤول.',
        'errors.apiAuthentication': 'لم يقبل خادم التطبيق جلسة تسجيل الدخول. سجّل الدخول مرة أخرى.',
        'errors.apiForbidden': 'حساب Cognito غير مخوّل للوصول إلى مساحة العمل.',
        'errors.apiUnavailable': 'تعذّر على خادم التطبيق تحميل ملفك. تحقّق من إعدادات الخادم وDynamoDB.',
        'errors.passwordSave': 'تعذر حفظ كلمة المرور الجديدة. حاول مرة أخرى.',
        'errors.passwordSessionExpired': 'انتهت جلسة كلمة المرور المؤقتة. سجّل الدخول مجددًا بكلمة المرور المؤقتة، ثم عيّن كلمة المرور الجديدة دون تحديث الصفحة.',
        'success.passwordChanged': 'تم تغيير كلمة المرور بنجاح!',
        'errors.passwordChange': 'كلمة المرور الحالية غير صحيحة أو تعذر حفظ كلمة المرور الجديدة.',
        'errors.passwordChangeGeneric': 'تعذر تغيير كلمة المرور.',
        'errors.removeItem': 'حدث خطأ أثناء محاولة حذف الصنف. حاول مرة أخرى.',
        'errors.authImport': 'خطأ في المصادقة. لا يمكن استيراد الأصناف.',
        'errors.import': 'حدث خطأ أثناء عملية الاستيراد. حاول مرة أخرى.',
        'errors.removeTask': 'حدث خطأ أثناء محاولة حذف المهمة. حاول مرة أخرى.',
        'errors.removeDailyOrder': 'حدث خطأ أثناء محاولة حذف الطلب اليومي. حاول مرة أخرى.',
        'errors.removeOrderRequest': 'حدث خطأ أثناء محاولة حذف طلب التوريد. حاول مرة أخرى.',
        'errors.legacyOrder': 'لا يمكن معالجة صيغة الطلب القديمة تلقائيًا. يرجى التعامل معها يدويًا.',
        'errors.processOrder': 'حدث خطأ أثناء معالجة الطلب. حاول مرة أخرى.',
        'errors.removeLaboratory': 'حدث خطأ أثناء محاولة حذف المختبر. حاول مرة أخرى.',
        'errors.removeBackorder': 'حدث خطأ أثناء محاولة حذف الطلب المؤجل. حاول مرة أخرى.',
        'errors.usernameTaken': 'اسم المستخدم مستخدم بالفعل.',
        'errors.selfDisable': 'لا يمكنك تعطيل حسابك الخاص.',
        'errors.createUser': 'تعذر إنشاء المستخدم. تحقق من البريد وإعدادات Cognito وحاول مرة أخرى.',
        'notifications.new': 'إشعار جديد',
        'notifications.close': 'إغلاق',
        'confirm.title': 'تأكيد الإجراء',
        'confirm.delete': 'حذف',
        'nav.menu': 'القائمة',
        'nav.closeSidebar': 'إغلاق القائمة الجانبية',
        'nav.openSidebar': 'فتح القائمة الجانبية',
        'nav.dashboard': 'لوحة التحكم',
        'nav.inventory': 'المخزون',
        'nav.inStock': 'متوفر',
        'nav.reorderNeeded': 'يحتاج إلى إعادة طلب',
        'nav.orderRequests': 'طلبات التوريد',
        'nav.dailyOrders': 'الطلبات اليومية',
        'nav.backorder': 'طلبات مؤجلة',
        'nav.teamTasks': 'مهام الفريق',
        'nav.laboratories': 'المختبرات',
        'nav.users': 'المستخدمون',
        'nav.audit': 'سجل التدقيق',
        'nav.expand': 'توسيع',
        'nav.collapse': 'طي',
        'header.welcome': 'مرحبًا',
        'header.changePassword': 'تغيير كلمة المرور',
        'header.logOut': 'تسجيل الخروج',
        'header.language': 'اللغة',
        'header.languageSelection': 'اختيار اللغة',
        'header.english': 'الإنجليزية',
        'header.arabic': 'العربية',
        'header.switchToLight': 'التبديل إلى الوضع الفاتح',
        'header.switchToDark': 'التبديل إلى الوضع الداكن',
        'audit.title': 'سجل التدقيق',
        'audit.subtitle': 'حوكمة مساحة العمل',
        'audit.events': 'سجلات',
        'audit.emptyTitle': 'لا توجد سجلات تدقيق بعد',
        'audit.emptyDescription': 'ستظهر هنا التغييرات المهمة مع المستخدم والدور والعملية والتوقيت.',
        'dashboard.itemsToReorder': 'أصناف تحتاج إلى إعادة طلب',
        'dashboard.pendingTasks': 'مهامي المعلقة',
        'dashboard.ordersSentToday': 'الطلبات المرسلة اليوم',
        'dashboard.myPendingTasks': 'مهامي المعلقة',
        'dashboard.viewAll': 'عرض الكل',
        'dashboard.by': 'بواسطة',
        'dashboard.due': 'تاريخ الاستحقاق',
        'dashboard.noPendingTasks': 'لا توجد مهام معلقة. أحسنت!',
        'dashboard.recentActivity': 'النشاط الأخير',
        'dashboard.noRecentActivity': 'لا يوجد نشاط حديث حتى الآن.',
        'dashboard.system': 'النظام',
        'activity.addedToStock': 'أضاف إلى المخزون.',
        'activity.assignedTask': 'أسند مهمة إلى',
        'activity.completedTask': 'أكمل المهمة:',
        'activity.loggedOrder': 'سجّل طلبًا للعميل',
        'activity.loggedRequest': 'سجّل طلبًا جديدًا من العميل',
        'time.yearsAgo': 'سنوات مضت',
        'time.monthsAgo': 'أشهر مضت',
        'time.daysAgo': 'أيام مضت',
        'time.hoursAgo': 'ساعات مضت',
        'time.minutesAgo': 'دقائق مضت',
        'time.secondsAgo': 'ثوانٍ مضت',
        'inventory.inStockItems': 'الأصناف المتوفرة',
        'inventory.addNew': 'إضافة صنف جديد للمخزون',
        'inventory.reference': 'المرجع',
        'inventory.itemName': 'اسم الصنف',
        'inventory.itemType': 'نوع الصنف',
        'inventory.quantity': 'الكمية',
        'inventory.quantityMinimum': 'الكمية (>=3)',
        'inventory.outOfStock': 'نفد المخزون',
        'inventory.lowStock': 'مخزون منخفض',
        'inventory.inStock': 'متوفر',
        'inventory.managedBy': 'المسؤول',
        'inventory.actions': 'الإجراءات',
        'inventory.search': 'البحث بالمرجع أو الاسم أو النوع...',
        'inventory.import': 'استيراد',
        'inventory.export': 'تصدير',
        'inventory.add': 'إضافة',
        'inventory.cancel': 'إلغاء',
        'inventory.noSearchResults': 'لم يتم العثور على أصناف لـ',
        'inventory.noItems': 'لا توجد أصناف في المخزون. أضف صنفًا للبدء!',
        'inventory.paginationShowing': 'عرض {from}-{to} من أصل {total} صنف',
        'inventory.paginationPrevious': 'السابق',
        'inventory.paginationNext': 'التالي',
        'inventory.importEmpty': 'ملف CSV فارغ أو لا يحتوي على صفوف بيانات.',
        'inventory.importInvalidFormat': 'تنسيق CSV غير صالح. أضف أعمدة المرجع واسم الصنف والنوع والكمية.',
        'inventory.importNoValidRows': 'لم يتم العثور على أصناف صالحة في الملف.',
        'inventory.importSuccess': 'تم استيراد أو تحديث {count} صنف بنجاح.',
        'inventory.importFailed': 'فشل استيراد الملف: {error}',
        'inventory.exportDate': 'مخزون-المستودع',
        'inventory.edit': 'تعديل',
        'inventory.remove': 'حذف',
        'reorder.title': 'يحتاج إلى إعادة طلب',
        'reorder.export': 'تصدير',
        'reorder.addManually': 'إضافة يدويًا',
        'reorder.addItemTitle': 'إضافة صنف إلى قائمة إعادة الطلب',
        'reorder.addItem': 'إضافة الصنف',
        'reorder.allStocked': 'جميع الأصناف متوفرة بشكل جيد!',
        'reorder.lowStockHint': 'ستظهر هنا الأصناف التي تقل كميتها عن 3 وحدات.',
        'reorder.left': 'متبقي',
        'reorder.restock': 'تزويد المخزون',
        'reorder.editItem': 'تعديل',
        'reorder.removeItem': 'حذف',
        'reorder.removeConfirmation': 'هل أنت متأكد من حذف الصنف "{name}"؟ لا يمكن التراجع عن هذا الإجراء.',
        'reorder.paginationShowing': 'عرض {from}-{to} من أصل {total} صنف',
        'reorder.paginationPrevious': 'السابق',
        'reorder.paginationNext': 'التالي',
        'reorder.exportDate': 'إعادة-طلب',
        'editItem.title': 'تعديل الصنف',
        'editItem.save': 'حفظ التغييرات',
        'orderRequests.title': 'طلبات التوريد المعلقة',
        'orderRequests.logNew': 'تسجيل طلب جديد',
        'orderRequests.customerName': 'اسم العميل',
        'orderRequests.requestedItems': 'الأصناف المطلوبة',
        'orderRequests.searchItem': 'ابحث عن اسم الصنف أو اكتبه...',
        'orderRequests.inStock': 'في المخزون',
        'orderRequests.ready': 'جاهز للتنفيذ',
        'orderRequests.noItemsFound': 'لم يتم العثور على أصناف. يمكنك إضافته على أي حال.',
        'orderRequests.quantity': 'الكمية',
        'orderRequests.removeItem': 'إزالة الصنف',
        'orderRequests.addAnother': 'إضافة صنف آخر',
        'orderRequests.addRequest': 'إضافة طلب',
        'orderRequests.noPending': 'لا توجد طلبات معلقة.',
        'orderRequests.emptyHint': 'سجّل الطلبات غير المكتملة أو طلبات العملاء هنا.',
        'orderRequests.for': 'للعميل:',
        'orderRequests.by': 'بواسطة:',
        'orderRequests.createdBy': 'أنشأه',
        'orderRequests.moveToBackorder': 'نقل إلى الطلبات المؤجلة',
        'orderRequests.removeOrder': 'حذف طلب العميل',
        'orderRequests.removeConfirmation': 'هل أنت متأكد من حذف طلب العميل "{name}"؟ لا يمكن التراجع عن هذا الإجراء.',
        'orderRequests.search': 'البحث عن العميل أو الصنف...',
        'orderRequests.allStatuses': 'كل الحالات',
        'orderRequests.readyFilter': 'جاهز للتنفيذ',
        'orderRequests.backorderFilter': 'يحتاج طلبًا مؤجلًا',
        'orderRequests.noFilteredResults': 'لا توجد طلبات تطابق عوامل التصفية.',
        'orderRequests.paginationShowing': 'عرض {from}-{to} من أصل {total} طلب',
        'orderRequests.paginationPrevious': 'السابق',
        'orderRequests.paginationNext': 'التالي',
        'dailyOrders.title': 'سجل الطلبات اليومية المرسلة',
        'dailyOrders.addToday': 'إضافة طلب اليوم',
        'dailyOrders.details': 'تفاصيل الطلب (مثل الأصناف والكميات)',
        'dailyOrders.customerName': 'اسم العميل',
        'dailyOrders.logOrder': 'تسجيل الطلب',
        'dailyOrders.empty': 'لم يتم تسجيل أي طلبات بعد.',
        'dailyOrders.emptyHint': 'استخدم النموذج أعلاه لتسجيل طلب تم إرساله.',
        'dailyOrders.customer': 'العميل:',
        'dailyOrders.removeOrder': 'حذف طلب العميل',
        'dailyOrders.removeConfirmation': 'هل أنت متأكد من حذف طلب العميل "{name}" بتاريخ {date}؟ لا يمكن التراجع عن هذا الإجراء.',
        'dailyOrders.paginationShowing': 'عرض {from}-{to} من أصل {total} طلب',
        'dailyOrders.paginationPrevious': 'السابق',
        'dailyOrders.paginationNext': 'التالي',
        'backorder.title': 'الطلبات المؤجلة المعلقة',
        'backorder.empty': 'لا توجد طلبات مؤجلة معلقة.',
        'backorder.emptyHint': 'ستظهر هنا الأصناف من طلبات التوريد غير القابلة للتنفيذ.',
        'backorder.for': 'للعميل:',
        'backorder.by': 'بواسطة:',
        'backorder.loggedBy': 'سجله',
        'backorder.remove': 'حذف الطلب المؤجل للعميل',
        'backorder.removeConfirmation': 'هل أنت متأكد من حذف الطلب المؤجل للعميل "{name}"؟ يجب تنفيذ ذلك فقط بعد إتمام الطلب.',
        'backorder.paginationShowing': 'عرض {from}-{to} من أصل {total} طلب مؤجل',
        'backorder.paginationPrevious': 'السابق',
        'backorder.paginationNext': 'التالي',
        'tasks.title': 'مهام الفريق',
        'tasks.assignNew': 'تعيين مهمة جديدة',
        'tasks.description': 'وصف المهمة',
        'tasks.assignTo': 'تعيين إلى',
        'tasks.dueDate': 'تاريخ الاستحقاق',
        'tasks.add': 'إضافة مهمة',
        'tasks.empty': 'لا توجد مهام معينة.',
        'tasks.emptyHint': 'استخدم النموذج أعلاه لإنشاء مهمة جديدة لأحد أعضاء الفريق.',
        'tasks.to': 'إلى:',
        'tasks.by': 'بواسطة:',
        'tasks.assignedTo': 'معينة إلى',
        'tasks.createdBy': 'أنشأها',
        'tasks.due': 'الاستحقاق:',
        'tasks.remove': 'حذف المهمة',
        'tasks.removeConfirmation': 'هل أنت متأكد من حذف هذه المهمة؟ لا يمكن التراجع عن هذا الإجراء.',
        'tasks.completeConfirmation': 'هل أنت متأكد من وضع علامة مكتملة على هذه المهمة؟',
        'tasks.statusToDo': 'للإنجاز',
        'tasks.statusInProgress': 'قيد التنفيذ',
        'tasks.statusCompleted': 'مكتملة',
        'tasks.status': 'حالة المهمة',
        'tasks.paginationShowing': 'عرض {from}-{to} من أصل {total} مهمة',
        'tasks.paginationPrevious': 'السابق',
        'tasks.paginationNext': 'التالي',
        'userManagement.paginationShowing': 'عرض {from}-{to} من أصل {total} مستخدم',
        'userManagement.paginationPrevious': 'السابق',
        'userManagement.paginationNext': 'التالي',
        'userManagement.title': 'إدارة المستخدمين',
        'userManagement.subtitle': 'إدارة صلاحيات الفريق وتعيين الأدوار.',
        'userManagement.addUser': 'إضافة مستخدم',
        'userManagement.fullName': 'الاسم الكامل',
        'userManagement.fullNamePlaceholder': 'مثال: عبدالله السلوم',
        'userManagement.username': 'اسم المستخدم',
        'userManagement.usernamePlaceholder': 'مثال: abdullah',
        'userManagement.role': 'الدور',
        'userManagement.email': 'البريد الإلكتروني',
        'userManagement.emailPlaceholder': 'name@example.com',
        'userManagement.optional': 'اختياري',
        'userManagement.cognitoHint': 'سيتم إرسال دعوة بكلمة مرور مؤقتة إلى بريد المستخدم.',
        'userManagement.localHint': 'وضع التطوير المحلي: يتم حفظ المستخدم وكلمة المرور في هذا المتصفح فقط.',
        'userManagement.userCreated': 'تم إنشاء المستخدم وإرسال دعوة كلمة المرور المؤقتة عبر Cognito.',
        'userManagement.teamMembers': 'أعضاء الفريق',
        'userManagement.active': 'نشط',
        'userManagement.disabled': 'معطل',
        'userManagement.enable': 'تفعيل',
        'userManagement.disable': 'تعطيل',
        'userManagement.roleFor': 'دور المستخدم',
        'userManagement.roleOwner': 'المالك',
        'userManagement.roleManager': 'مدير',
        'userManagement.roleSalesManager': 'مدير المبيعات',
        'userManagement.roleTechnicalService': 'الخدمة الفنية',
        'userManagement.roleAccountant': 'محاسب',
        'userManagement.roleSalesLead': 'رئيس المبيعات',
        'userManagement.roleComputerEngineer': 'مهندس حاسب',
        'laboratories.title': 'معلومات المختبرات',
        'laboratories.addNew': 'إضافة مختبر جديد',
        'laboratories.name': 'اسم المختبر',
        'laboratories.mapsLink': 'رابط خرائط Google',
        'laboratories.contacts': 'جهات الاتصال',
        'laboratories.contactName': 'اسم جهة الاتصال',
        'laboratories.phoneNumber': 'رقم الهاتف',
        'laboratories.removeContact': 'إزالة جهة الاتصال',
        'laboratories.addContact': 'إضافة جهة اتصال أخرى',
        'laboratories.add': 'إضافة المختبر',
        'laboratories.empty': 'لم تتم إضافة مختبرات بعد.',
        'laboratories.emptyHint': 'استخدم النموذج أعلاه لإضافة مختبر وجهات الاتصال الخاصة به.',
        'laboratories.viewMap': 'عرض خريطة',
        'laboratories.copyMap': 'نسخ رابط الخريطة',
        'laboratories.copied': 'تم النسخ!',
        'laboratories.remove': 'حذف',
        'laboratories.validation': 'يرجى إدخال اسم المختبر وجهة اتصال واحدة على الأقل.',
        'laboratories.removeConfirmation': 'هل أنت متأكد من حذف المختبر "{name}"؟ لا يمكن التراجع عن هذا الإجراء.',
        'laboratories.copyFailed': 'تعذر نسخ الرابط إلى الحافظة.',
        'laboratories.paginationShowing': 'عرض {from}-{to} من أصل {total} مختبر',
        'laboratories.paginationPrevious': 'السابق',
        'laboratories.paginationNext': 'التالي'
    }
};
}),
"[project]/src/services/auth/authSession.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearStoredUserId",
    ()=>clearStoredUserId,
    "getStoredUserId",
    ()=>getStoredUserId,
    "storeUserId",
    ()=>storeUserId
]);
const SESSION_KEY = 'invictus-manager-authenticated-user';
const getStoredUserId = ()=>{
    try {
        return localStorage.getItem(SESSION_KEY);
    } catch (error) {
        console.error('Unable to read the authentication session:', error);
        return null;
    }
};
const storeUserId = (userId)=>{
    try {
        localStorage.setItem(SESSION_KEY, userId);
    } catch (error) {
        console.error('Unable to save the authentication session:', error);
    }
};
const clearStoredUserId = ()=>{
    try {
        localStorage.removeItem(SESSION_KEY);
    } catch (error) {
        console.error('Unable to clear the authentication session:', error);
    }
};
}),
"[project]/src/services/auth/databaseAuthService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DatabaseAuthService",
    ()=>DatabaseAuthService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
;
const profileFromSession = (session)=>{
    const profile = session?.user;
    if (!profile?.id || typeof profile.name !== 'string' || typeof profile.username !== 'string') return null;
    return {
        id: String(profile.id),
        name: profile.name,
        username: profile.username,
        description: typeof profile.description === 'string' ? profile.description : '',
        role: profile.role,
        status: profile.status,
        email: typeof profile.email === 'string' ? profile.email : undefined,
        hasSetPassword: profile.hasSetPassword !== false
    };
};
class DatabaseAuthService {
    async authenticate(identifier, password) {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"])('credentials', {
            identifier,
            password,
            redirect: false
        });
        if (result?.error) return {
            success: false,
            error: 'invalid-credentials'
        };
        const sessionResponse = await fetch('/api/auth/session', {
            cache: 'no-store'
        });
        const session = sessionResponse.ok ? await sessionResponse.json() : null;
        const user = profileFromSession(session);
        return user ? {
            success: true,
            user
        } : {
            success: false,
            error: 'profile-not-found'
        };
    }
    async restoreSession() {
        const response = await fetch('/api/auth/session', {
            cache: 'no-store'
        });
        if (!response.ok) return null;
        return profileFromSession(await response.json());
    }
    async changePassword(currentPassword, newPassword) {
        const response = await fetch('/api/auth/password', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                currentPassword,
                newPassword
            })
        });
        return response.ok ? {
            success: true
        } : {
            success: false,
            error: 'password-update-failed'
        };
    }
    async logout() {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
            redirect: false
        });
    }
}
}),
"[project]/src/services/database/apiDatabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiDatabase",
    ()=>ApiDatabase,
    "ApiHttpError",
    ()=>ApiHttpError
]);
class ApiHttpError extends Error {
    status;
    constructor(message, status){
        super(message), this.status = status;
        this.name = 'ApiHttpError';
    }
}
const collectionPaths = {
    orderRequests: 'order-requests',
    dailyOrders: 'daily-orders',
    customers: 'laboratories'
};
const createId = ()=>`${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
const createSnapshot = (documents)=>{
    const docs = documents.map((document)=>({
            id: String(document.id),
            data: ()=>({
                    ...document
                })
        }));
    return {
        docs,
        empty: docs.length === 0,
        forEach: (callback)=>docs.forEach(callback)
    };
};
const isOperation = (value)=>Boolean(value && typeof value === 'object' && '__localOperation' in value);
class ApiDatabase {
    isRemote = true;
    baseUrl;
    listeners = new Map();
    constructor(baseUrl){
        this.baseUrl = baseUrl.replace(/\/+$/, '');
    }
    collection(name) {
        return new ApiCollectionReference(this, name);
    }
    batch() {
        return new ApiBatch();
    }
    getCollection() {
        return {};
    }
    async request(path, init) {
        const method = init?.method ?? 'GET';
        const canRetry = method === 'GET' || method === 'HEAD';
        let lastError;
        for(let attempt = 0; attempt < (canRetry ? 3 : 1); attempt += 1){
            try {
                const response = await fetch(`${this.baseUrl}${path}`, {
                    ...init,
                    headers: {
                        'content-type': 'application/json',
                        ...init?.headers
                    }
                });
                const text = await response.text();
                const body = text ? JSON.parse(text) : undefined;
                if (!response.ok) {
                    if (canRetry && response.status >= 500 && attempt < 2) {
                        await new Promise((resolve)=>window.setTimeout(resolve, 250 * (attempt + 1)));
                        continue;
                    }
                    throw new ApiHttpError(body && typeof body === 'object' && 'message' in body && body.message ? body.message : `API request failed with status ${response.status}.`, response.status);
                }
                return body;
            } catch (error) {
                lastError = error;
                if (!(error instanceof ApiHttpError) && attempt < (canRetry ? 2 : 0)) {
                    await new Promise((resolve)=>window.setTimeout(resolve, 250 * (attempt + 1)));
                    continue;
                }
                throw error;
            }
        }
        throw lastError instanceof Error ? lastError : new Error('API request failed.');
    }
    async getDocument(collection, id) {
        return this.request(await this.documentPath(collection, id));
    }
    pathFor(collection) {
        return collectionPaths[collection] ?? collection;
    }
    subscribe(collection, refresh) {
        const listeners = this.listeners.get(collection) ?? new Set();
        listeners.add(refresh);
        this.listeners.set(collection, listeners);
        return ()=>listeners.delete(refresh);
    }
    notify(collection) {
        this.listeners.get(collection)?.forEach((refresh)=>refresh());
    }
    async documentPath(collection, id) {
        if (collection !== 'notifications') {
            return `/${this.pathFor(collection)}/${encodeURIComponent(id)}`;
        }
        const response = await fetch('/api/auth/session', {
            cache: 'no-store'
        });
        const session = response.ok ? await response.json() : null;
        const subject = session?.user?.id;
        if (typeof subject !== 'string' || !subject) {
            throw new Error('An authenticated session is required to access notifications.');
        }
        return `/${this.pathFor(collection)}/${encodeURIComponent(subject)}`;
    }
}
class ApiCollectionReference {
    apiDatabase;
    collectionName;
    limitCount;
    constructor(database, collectionName, limitCount){
        this.apiDatabase = database;
        this.collectionName = collectionName;
        this.limitCount = limitCount;
    }
    doc(id = createId()) {
        return new ApiDocumentReference(this.apiDatabase, this.collectionName, id);
    }
    async add(data) {
        const reference = this.doc();
        await reference.set(data);
        return reference;
    }
    limit(count) {
        return new ApiCollectionReference(this.apiDatabase, this.collectionName, count);
    }
    async get() {
        const items = [];
        let nextToken;
        do {
            const params = new URLSearchParams({
                limit: String(this.limitCount ?? 100)
            });
            if (nextToken) params.set('nextToken', nextToken);
            const result = await this.apiDatabase.request(`/${this.apiDatabase.pathFor(this.collectionName)}?${params.toString()}`);
            items.push(...result.items);
            nextToken = result.nextToken;
        }while (nextToken && this.limitCount === undefined)
        return createSnapshot(items);
    }
    onSnapshot(listener) {
        let active = true;
        const refresh = async ()=>{
            try {
                const snapshot = await this.get();
                if (active) listener(snapshot);
            } catch (error) {
                console.error(`Unable to load ${this.collectionName} from the API:`, error);
            }
        };
        void refresh();
        const unsubscribe = this.apiDatabase.subscribe(this.collectionName, ()=>void refresh());
        const intervalId = window.setInterval(()=>void refresh(), 30_000);
        return ()=>{
            active = false;
            unsubscribe();
            window.clearInterval(intervalId);
        };
    }
}
class ApiDocumentReference {
    database;
    collectionName;
    id;
    constructor(database, collectionName, id){
        this.database = database;
        this.collectionName = collectionName;
        this.id = id;
    }
    async set(data, options) {
        if (options?.merge) return this.update(data);
        await this.database.request(await this.database.documentPath(this.collectionName, this.id), {
            method: 'PUT',
            body: JSON.stringify(data)
        });
        this.database.notify(this.collectionName);
    }
    async update(updates) {
        const existing = await this.database.getDocument(this.collectionName, this.id);
        const resolved = Object.fromEntries(Object.entries(updates).map(([key, value])=>{
            if (!isOperation(value)) return [
                key,
                value
            ];
            if (value.__localOperation === 'increment') {
                return [
                    key,
                    Number(existing[key] ?? 0) + Number(value.amount ?? 0)
                ];
            }
            const current = Array.isArray(existing[key]) ? existing[key] : [];
            return [
                key,
                [
                    ...new Set([
                        ...current,
                        ...value.values ?? []
                    ])
                ]
            ];
        }));
        await this.database.request(await this.database.documentPath(this.collectionName, this.id), {
            method: 'PATCH',
            body: JSON.stringify(resolved)
        });
        this.database.notify(this.collectionName);
    }
    async delete() {
        await this.database.request(await this.database.documentPath(this.collectionName, this.id), {
            method: 'DELETE'
        });
        this.database.notify(this.collectionName);
    }
}
class ApiBatch {
    operations = [];
    set(reference, data) {
        this.operations.push(()=>reference.set(data));
        return this;
    }
    update(reference, updates) {
        this.operations.push(()=>reference.update(updates));
        return this;
    }
    delete(reference) {
        this.operations.push(()=>reference.delete());
        return this;
    }
    async commit() {
        for (const operation of this.operations)await operation();
    }
}
}),
"[project]/src/services/database/createDatabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDatabase",
    ()=>createDatabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$database$2f$apiDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/database/apiDatabase.ts [app-ssr] (ecmascript)");
;
const createDatabase = ()=>{
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? '/api';
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$database$2f$apiDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiDatabase"](apiBaseUrl);
};
}),
"[project]/src/services/database/localDatabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocalBatch",
    ()=>LocalBatch,
    "LocalCollectionReference",
    ()=>LocalCollectionReference,
    "LocalDatabase",
    ()=>LocalDatabase,
    "LocalDocumentReference",
    ()=>LocalDocumentReference,
    "LocalFieldValue",
    ()=>LocalFieldValue
]);
const STORAGE_KEY = 'invictus-manager-data';
const createId = ()=>`${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
const readStore = ()=>{
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        const store = stored ? JSON.parse(stored) : {};
        let removedPasswords = false;
        if (store.users) {
            Object.values(store.users).forEach((user)=>{
                if ('password' in user) {
                    delete user.password;
                    removedPasswords = true;
                }
            });
        }
        if (removedPasswords) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
        }
        return store;
    } catch (error) {
        console.error('Unable to read local application data:', error);
        return {};
    }
};
const writeStore = (store)=>{
    try {
        const safeStore = JSON.parse(JSON.stringify(store));
        if (safeStore.users) {
            Object.values(safeStore.users).forEach((user)=>{
                delete user.password;
            });
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(safeStore));
    } catch (error) {
        console.error('Unable to save local application data:', error);
        throw error;
    }
};
const createSnapshot = (documents, limit)=>{
    const docs = Object.entries(documents).slice(0, limit).map(([id, data])=>({
            id,
            data: ()=>({
                    ...data
                })
        }));
    return {
        docs,
        empty: docs.length === 0,
        forEach: (callback)=>docs.forEach(callback)
    };
};
const applyUpdate = (document, updates)=>{
    const next = {
        ...document
    };
    Object.entries(updates).forEach(([key, value])=>{
        if (value && value.__localOperation === 'increment') {
            next[key] = (next[key] || 0) + value.amount;
        } else if (value && value.__localOperation === 'arrayUnion') {
            const current = Array.isArray(next[key]) ? next[key] : [];
            next[key] = [
                ...new Set([
                    ...current,
                    ...value.values
                ])
            ];
        } else {
            next[key] = value;
        }
    });
    return next;
};
class LocalDocumentReference {
    database;
    collectionName;
    id;
    constructor(database, collectionName, id){
        this.database = database;
        this.collectionName = collectionName;
        this.id = id;
    }
    update(updates) {
        this.database.update(this.collectionName, this.id, updates);
        return Promise.resolve();
    }
    delete() {
        this.database.delete(this.collectionName, this.id);
        return Promise.resolve();
    }
    set(data, options) {
        this.database.set(this.collectionName, this.id, data, options?.merge);
        return Promise.resolve();
    }
}
class LocalCollectionReference {
    database;
    collectionName;
    limitCount;
    constructor(database, collectionName, limitCount){
        this.database = database;
        this.collectionName = collectionName;
        this.limitCount = limitCount;
    }
    doc(id = createId()) {
        return new LocalDocumentReference(this.database, this.collectionName, id);
    }
    add(data) {
        const reference = this.doc();
        return reference.set(data).then(()=>reference);
    }
    limit(count) {
        return new LocalCollectionReference(this.database, this.collectionName, count);
    }
    get() {
        return Promise.resolve(createSnapshot(this.database.getCollection(this.collectionName), this.limitCount));
    }
    onSnapshot(listener) {
        listener(createSnapshot(this.database.getCollection(this.collectionName), this.limitCount));
        return this.database.subscribe(this.collectionName, ()=>{
            listener(createSnapshot(this.database.getCollection(this.collectionName), this.limitCount));
        });
    }
}
class LocalBatch {
    operations = [];
    set(reference, data) {
        this.operations.push(()=>reference.set(data));
        return this;
    }
    update(reference, updates) {
        this.operations.push(()=>reference.update(updates));
        return this;
    }
    delete(reference) {
        this.operations.push(()=>reference.delete());
        return this;
    }
    commit() {
        this.operations.forEach((operation)=>operation());
        return Promise.resolve();
    }
}
class LocalDatabase {
    store = readStore();
    listeners = new Map();
    collection(name) {
        return new LocalCollectionReference(this, name);
    }
    batch() {
        return new LocalBatch();
    }
    getCollection(name) {
        return this.store[name] || {};
    }
    set(collectionName, id, data, merge = false) {
        const collection = this.store[collectionName] || {};
        collection[id] = merge ? {
            ...collection[id],
            ...data
        } : {
            ...data
        };
        this.store[collectionName] = collection;
        this.persist(collectionName);
    }
    update(collectionName, id, updates) {
        const collection = this.store[collectionName] || {};
        if (!collection[id]) throw new Error(`Document ${collectionName}/${id} does not exist.`);
        collection[id] = applyUpdate(collection[id], updates);
        this.store[collectionName] = collection;
        this.persist(collectionName);
    }
    delete(collectionName, id) {
        const collection = this.store[collectionName] || {};
        delete collection[id];
        this.store[collectionName] = collection;
        this.persist(collectionName);
    }
    subscribe(collectionName, listener) {
        const collectionListeners = this.listeners.get(collectionName) || new Set();
        collectionListeners.add(listener);
        this.listeners.set(collectionName, collectionListeners);
        return ()=>collectionListeners.delete(listener);
    }
    persist(changedCollection) {
        writeStore(this.store);
        this.listeners.get(changedCollection)?.forEach((listener)=>listener());
    }
}
const LocalFieldValue = {
    increment: (amount)=>({
            __localOperation: 'increment',
            amount
        }),
    arrayUnion: (...values)=>({
            __localOperation: 'arrayUnion',
            values
        })
};
}),
"[project]/src/types/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tab",
    ()=>Tab
]);
var Tab = /*#__PURE__*/ function(Tab) {
    Tab["Dashboard"] = "DASHBOARD";
    Tab["Inventory"] = "INVENTORY";
    Tab["Reorder"] = "REORDER";
    Tab["OrderRequests"] = "ORDER_REQUESTS";
    Tab["Tasks"] = "TASKS";
    Tab["DailyOrders"] = "DAILY_ORDERS";
    Tab["Laboratories"] = "LABORATORIES";
    Tab["Backorder"] = "BACKORDER";
    Tab["Users"] = "USERS";
    Tab["Audit"] = "AUDIT";
    return Tab;
}({});
}),
];

//# sourceMappingURL=src_1rcn4pkknkoro._.js.map