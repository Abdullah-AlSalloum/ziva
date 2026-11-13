import { useEffect, useRef, useState } from 'react';
import { AuditEvent, Backorder, DailyOrder, InventoryItem, Laboratory, OrderItem, OrderRequest, Tab, Task, TaskStatus, User } from '../types';
import { createDatabase } from '../services/database/createDatabase';
import { Database, LocalFieldValue } from '../services/database/localDatabase';
import { AuthService } from '../services/auth/authService';
import { CognitoAuthService } from '../services/auth/cognitoAuthService';
import { LocalAuthService } from '../services/auth/localAuthService';
import { configureCognito } from '../config/cognitoConfig';
import { clearStoredUserId, getStoredUserId, storeUserId } from '../services/auth/authSession';
import { getStoredLanguage, useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';

const playSound = (type: 'confirmation' | 'notification') => {
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
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

export const useAppController = () => {
  const { language, direction, t } = useTranslation(translations);
  const isLocalDevelopment = import.meta.env.DEV && !import.meta.env.VITE_API_BASE_URL;
  const [db] = useState<Database>(() => createDatabase());
  const [authService] = useState<AuthService | null>(() => isLocalDevelopment
    ? new LocalAuthService()
    : configureCognito()
      ? new CognitoAuthService()
      : null);
  const [users, setUsers] = useState<User[]>([]);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [orderRequests, setOrderRequests] = useState<OrderRequest[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [dailyOrders, setDailyOrders] = useState<DailyOrder[]>([]);
  const [laboratories, setLaboratories] = useState<Laboratory[]>([]);
  const [backorders, setBackorders] = useState<Backorder[]>([]);
  const [auditEvents, setAuditEvents] = useState<AuditEvent[]>([]);
  const [notifications, setNotifications] = useState<Record<string, string[]>>({});
  const [isDataReady, setIsDataReady] = useState(false);
  const loadedCollections = useRef(new Set<string>());

  const [selectedUserForLogin, setSelectedUserForLogin] = useState<User | null>(null);
  const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(null);
  const [loginError, setLoginError] = useState('');
  
  const [isSettingFirstPassword, setIsSettingFirstPassword] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Dashboard);
  const [activeNotifications, setActiveNotifications] = useState<{id: number; message: string; type?: 'success' | 'error' | 'info'}[]>([]);
  const notificationIdCounter = useRef(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const notify = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setActiveNotifications(previous => [...previous, { id: notificationIdCounter.current++, message, type }]);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [direction, language]);
  
  useEffect(() => {
    // --- Real-time Listeners ---
    loadedCollections.current.clear();
    setIsDataReady(false);
    const markCollectionLoaded = (collection: string) => {
        loadedCollections.current.add(collection);
        if (loadedCollections.current.size === 8) {
            setIsDataReady(true);
        }
    };
    const unsubscribers = [
        db.collection('users').onSnapshot((snapshot: any) => { setUsers(snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id } as User))); markCollectionLoaded('users'); }),
        db.collection('inventory').onSnapshot((snapshot: any) => { setInventory(snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id } as InventoryItem))); markCollectionLoaded('inventory'); }),
        db.collection('orderRequests').onSnapshot((snapshot: any) => { setOrderRequests(snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id } as OrderRequest))); markCollectionLoaded('orderRequests'); }),
        db.collection('tasks').onSnapshot((snapshot: any) => { setTasks(snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id } as Task))); markCollectionLoaded('tasks'); }),
        db.collection('dailyOrders').onSnapshot((snapshot: any) => { setDailyOrders(snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id } as DailyOrder))); markCollectionLoaded('dailyOrders'); }),
        db.collection('customers').onSnapshot((snapshot: any) => { setLaboratories(snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id } as Laboratory))); markCollectionLoaded('customers'); }),
        db.collection('backorders').onSnapshot((snapshot: any) => { setBackorders(snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id } as Backorder))); markCollectionLoaded('backorders'); }),
        db.collection('notifications').onSnapshot((snapshot: any) => {
            const notifs: Record<string, string[]> = {};
            snapshot.forEach((doc: any) => { notifs[doc.id] = doc.data().messages; });
            setNotifications(notifs);
            markCollectionLoaded('notifications');
        }),
    ];
    return () => unsubscribers.forEach(unsub => unsub());
  }, [authenticatedUser, db]);

  useEffect(() => {
    if (authenticatedUser || users.length === 0) return;
    if (!authService) return;

    if (authService.restoreSession) {
        void authService.restoreSession(users).then(user => {
            if (user && user.status !== 'disabled') {
                setAuthenticatedUser(user);
            }
        });
        return;
    }

    const storedUserId = getStoredUserId();
    const storedUser = users.find(user => user.id === storedUserId);

    if (storedUser && storedUser.status !== 'disabled') {
        setAuthenticatedUser(storedUser);
    } else if (storedUserId) {
        clearStoredUserId();
    }
  }, [authenticatedUser, users, authService]);
  
   useEffect(() => {
    if (authenticatedUser && notifications[authenticatedUser.id]) {
        playSound('notification');
        const newMessages = notifications[authenticatedUser.id];
        const newNotifications = newMessages.map(message => ({
            id: notificationIdCounter.current++,
            message,
        }));
        setActiveNotifications(prev => [...prev, ...newNotifications]);
        db?.collection('notifications').doc(authenticatedUser.id).delete();
    }
  }, [authenticatedUser, notifications, db]);

  useEffect(() => {
    if (!authenticatedUser || !['Owner', 'Manager'].includes(authenticatedUser.role)) {
      setAuditEvents([]);
      return;
    }

    let active = true;
    void db.collection('audit-events').get()
      .then(snapshot => {
        if (active) {
          setAuditEvents(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as AuditEvent)));
        }
      })
      .catch(error => console.error('Unable to load audit history:', error));

    return () => {
      active = false;
    };
  }, [authenticatedUser, db]);
  
  // --- Auth Handlers ---
  const handleLogin = async (username: string, password: string) => {
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
                const profiles = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as User));
                const authenticatedProfile = authService.restoreSession
                    ? await authService.restoreSession(profiles)
                    : null;
                if (authenticatedProfile && authenticatedProfile.status !== 'disabled') {
                    setAuthenticatedUser(authenticatedProfile);
                    storeUserId(authenticatedProfile.id);
                    return;
                }
            } catch (error) {
                console.error('Unable to load the authenticated user profile:', error);
            }
            setLoginError(t('errors.profileNotFound'));
            return;
        }
        setLoginError(result.error === 'disabled-account'
            ? t('errors.disabledAccount')
            : result.detail
                ? result.detail === 'NotAuthorizedException'
                    ? t('errors.cognitoSignIn')
                    : t('errors.incorrectCredentials')
                : t('errors.incorrectCredentials'));
        return;
    }
    const user = result.user;
    setSelectedUserForLogin(user);
    if (!user.hasSetPassword) {
        setIsSettingFirstPassword(true);
    } else {
        setAuthenticatedUser(user);
        storeUserId(user.id);
        setSelectedUserForLogin(null);
    }
  };
  
  const handleSetFirstPassword = async ({ newPassword }: Record<string, string>) => {
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
    const profiles = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as User));
    const updatedUser = authService.restoreSession
      ? await authService.restoreSession(profiles)
      : null;
    if (!updatedUser || updatedUser.status === 'disabled') {
        notify(t('errors.profileNotFound'), 'error');
        return;
    }
    await db.collection('users').doc(updatedUser.id).update({ hasSetPassword: true });
    const authenticatedUser = { ...updatedUser, hasSetPassword: true };
    setAuthenticatedUser(authenticatedUser);
    storeUserId(authenticatedUser.id);
    setIsSettingFirstPassword(false);
    setSelectedUserForLogin(null);
  };

  const handleChangePassword = async ({ currentPassword, newPassword }: Record<string, string>) => {
    if (!authService || !authService.changePassword) return;
    const result = await authService.changePassword(currentPassword, newPassword);
    if (result.success) {
        notify(t('success.passwordChanged'), 'success');
        setIsChangingPassword(false);
    } else {
        notify(result.error === 'password-update-failed' ? t('errors.passwordChange') : t('errors.passwordChangeGeneric'), 'error');
    }
  };
  
  const handleLogout = () => {
    clearStoredUserId();
    setAuthenticatedUser(null);
  };
  
  // --- Data Handlers ---
  const handleAddItem = (newItem: Omit<InventoryItem, 'id' | 'managedBy' | 'createdAt'>) => {
    if (!db || !authenticatedUser) return;
    db.collection('inventory').add({ ...newItem, managedBy: authenticatedUser.id, createdAt: new Date().toISOString() });
  };
  const handleUpdateItem = (itemId: string, updates: Partial<Omit<InventoryItem, 'id'>>) => {
    db?.collection('inventory').doc(itemId).update(updates);
  };
  const handleRemoveItem = async (itemId: string) => {
    if (!db) return;
    try {
        await db.collection('inventory').doc(itemId).delete();
    } catch (error) {
        console.error("Error removing item:", error);
        notify(t('errors.removeItem'), 'error');
    }
  };
  
  const handleImportItems = async (itemsToImport: Omit<InventoryItem, 'id' | 'managedBy' | 'createdAt'>[]) => {
    if (!db || !authenticatedUser) {
        notify(t('errors.authImport'), 'error');
        return;
    }

    const batch = db.batch();
    const inventoryCollection = db.collection('inventory');

    const existingItemsMap = new Map<string, InventoryItem>();
    inventory.forEach(item => {
        if (item.reference) {
            existingItemsMap.set(item.reference.toLowerCase(), item);
        }
    });

    for (const itemToImport of itemsToImport) {
        const existingItem = itemToImport.reference
            ? existingItemsMap.get(itemToImport.reference.toLowerCase())
            : undefined;

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

  const handleAddTask = (task: Omit<Task, 'id' | 'createdBy' | 'createdAt'>) => {
    if (!db || !authenticatedUser) return;
    // FIX: Explicitly type `newTask` to prevent type inference issues.
    const newTask: Omit<Task, 'id'> = { ...task, createdBy: authenticatedUser.id, createdAt: new Date().toISOString() };
    db.collection('tasks').add(newTask);

    if (newTask.assignedTo !== authenticatedUser.id) {
        playSound('confirmation');
        const message = `${authenticatedUser.name} assigned you a new task: "${newTask.description.substring(0, 50)}..."`;
        db.collection('notifications').doc(newTask.assignedTo).set({
            messages: LocalFieldValue.arrayUnion(message)
        }, { merge: true });
    }
  };
  const handleUpdateTaskStatus = (taskId: string, status: TaskStatus) => {
     const task = tasks.find(existingTask => existingTask.id === taskId);
     if (!task || !authenticatedUser) return;
     const canManageTask = authenticatedUser.role === 'Owner'
        || task.assignedTo === authenticatedUser.id
        || task.createdBy === authenticatedUser.id;
     if (canManageTask) {
         db.collection('tasks').doc(taskId).update({ status });
     }
  };
  const handleRemoveTask = async (taskId: string) => {
    const task = tasks.find(existingTask => existingTask.id === taskId);
    if (!task || !authenticatedUser) return;
    const canManageTask = authenticatedUser.role === 'Owner'
        || task.assignedTo === authenticatedUser.id
        || task.createdBy === authenticatedUser.id;
    if (!canManageTask) return;
    try {
        await db.collection('tasks').doc(taskId).delete();
    } catch (error) {
        console.error("Error removing task:", error);
        notify(t('errors.removeTask'), 'error');
    }
  };
  const handleAddDailyOrder = (order: Omit<DailyOrder, 'id' | 'createdAt'>) => {
    db?.collection('dailyOrders').add({ ...order, createdAt: new Date().toISOString() });
  };
  const handleRemoveDailyOrder = async (orderId: string) => {
    if (!db) return;
    try {
        await db.collection('dailyOrders').doc(orderId).delete();
    } catch (error) {
        console.error("Error removing daily order:", error);
        notify(t('errors.removeDailyOrder'), 'error');
    }
  };
   const handleAddOrderRequest = (order: Omit<OrderRequest, 'id' | 'userId' | 'createdAt'>) => {
    if (!db || !authenticatedUser) return;
    db.collection('orderRequests').add({ ...order, userId: authenticatedUser.id, createdAt: new Date().toISOString() });
  };
  const handleRemoveOrderRequest = async (itemId: string) => {
    if (!db) return;
    try {
        await db.collection('orderRequests').doc(itemId).delete();
    } catch (error) {
        console.error("Error removing order request:", error);
        notify(t('errors.removeOrderRequest'), 'error');
    }
  };
  const handleMoveToBackorder = async (order: OrderRequest) => {
    if (!db) return;

    if (!Array.isArray(order.orderDetails) || typeof order.orderDetails[0] !== 'object') {
        notify(t('errors.legacyOrder'), 'error');
        return;
    }

    const itemsToBackorder: OrderItem[] = [];
    const itemsToFulfill: OrderItem[] = [];

    const inventoryMap = new Map(inventory.map(item => [item.name.toLowerCase(), item.quantity]));

    for (const requestedItem of order.orderDetails as OrderItem[]) {
        const availableQuantity = inventoryMap.get(requestedItem.name.toLowerCase()) || 0;

        if (requestedItem.quantity > availableQuantity) {
            const shortfall = requestedItem.quantity - availableQuantity;
            itemsToBackorder.push({
                name: requestedItem.name,
                quantity: shortfall,
            });

            if (availableQuantity > 0) {
                itemsToFulfill.push({
                    name: requestedItem.name,
                    quantity: availableQuantity,
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
            const backorderToAdd: Omit<Backorder, 'id'> = {
                userId: order.userId,
                customerName: order.customerName,
                orderDetails: itemsToBackorder,
                createdAt: new Date().toISOString(),
            };
            batch.set(backorderRef, backorderToAdd);
        }

        const orderRequestRef = db.collection('orderRequests').doc(order.id);

        if (itemsToFulfill.length > 0) {
            batch.update(orderRequestRef, { orderDetails: itemsToFulfill });
        } else {
            batch.delete(orderRequestRef);
        }
        
        await batch.commit();
        
    } catch (error) {
        console.error("Error splitting order request:", error);
        notify(t('errors.processOrder'), 'error');
    }
  };
  const handleRestock = (itemId: string, restockQuantity: number) => {
    if (!db) return;
    db.collection('inventory').doc(itemId).update({ quantity: LocalFieldValue.increment(restockQuantity) });
  };
  const handleAddLaboratory = (laboratory: Omit<Laboratory, 'id' | 'createdAt'>) => {
    db?.collection('customers').add({ ...laboratory, createdAt: new Date().toISOString() });
  };
  const handleRemoveLaboratory = async (laboratoryId: string) => {
    if (!db) return;
    try {
        await db.collection('customers').doc(laboratoryId).delete();
    } catch (error) {
        console.error("Error removing customer:", error);
        notify(t('errors.removeLaboratory'), 'error');
    }
  };
  const handleAddBackorder = (order: Omit<Backorder, 'id' | 'userId' | 'createdAt'>) => {
    if (!db || !authenticatedUser) return;
    db.collection('backorders').add({ ...order, userId: authenticatedUser.id, createdAt: new Date().toISOString() });
  };
  const handleRemoveBackorder = async (orderId: string) => {
    if (!db) return;
    try {
        await db.collection('backorders').doc(orderId).delete();
    } catch (error) {
        console.error("Error removing backorder:", error);
        notify(t('errors.removeBackorder'), 'error');
    }
  };
  const handleAddUser = async (user: Omit<User, 'id' | 'hasSetPassword'>, password?: string) => {
    if (authenticatedUser?.role !== 'Owner') return;
    if (users.some(existingUser => (existingUser.username || existingUser.name).toLowerCase() === user.username.toLowerCase())) {
        notify(t('errors.usernameTaken'), 'error');
        return;
    }
    try {
      const hasLocalPassword = isLocalDevelopment && Boolean(password) && Boolean(authService?.setPassword);
      const reference = await db.collection('users').add({ ...user, hasSetPassword: hasLocalPassword });
      if (hasLocalPassword && password && authService?.setPassword) {
        await authService.setPassword(reference.id, password);
      }
      notify(t('userManagement.userCreated'), 'success');
    } catch (error) {
      console.error('Unable to create user:', error);
      notify(t('errors.createUser'), 'error');
    }
  };

  const handleCreateFirstLocalUser = async (
    user: Omit<User, 'id' | 'hasSetPassword'>,
    password: string,
  ) => {
    if (!isLocalDevelopment || users.length > 0) return;
    try {
      const reference = await db.collection('users').add({ ...user, hasSetPassword: true });
      await authService?.setPassword?.(reference.id, password);
      const createdUser = { ...user, id: reference.id, hasSetPassword: true };
      setAuthenticatedUser(createdUser);
      storeUserId(reference.id);
    } catch (error) {
      console.error('Unable to create the first local user:', error);
      setLoginError(t('errors.createUser'));
    }
  };
  const handleUpdateUser = (userId: string, updates: Partial<User>) => {
    if (authenticatedUser?.role !== 'Owner') return;
    db.collection('users').doc(userId).update(updates);
  };
  const handleToggleUserStatus = (user: User) => {
    if (authenticatedUser?.role !== 'Owner') return;
    if (user.id === authenticatedUser.id) {
        notify(t('errors.selfDisable'), 'error');
        return;
    }
    db.collection('users').doc(user.id).update({ status: user.status === 'disabled' ? 'active' : 'disabled' });
  };
   const handleRemoveNotification = (id: number) => {
    setActiveNotifications(prev => prev.filter(n => n.id !== id));
  };
  const visibleTasks = authenticatedUser?.role === 'Owner'
    ? tasks
    : tasks.filter(task => task.assignedTo === authenticatedUser?.id || task.createdBy === authenticatedUser?.id);
  const stockItemsCount = inventory.filter(item => item.quantity >= 3).length;
  const reorderItemsCount = inventory.filter(item => item.quantity < 3).length;

  return {
    users, inventory, orderRequests, tasks: visibleTasks, dailyOrders, laboratories, backorders, auditEvents,
    authenticatedUser, selectedUserForLogin, loginError, authService, isLocalDevelopment,
    handleCreateFirstLocalUser,
    isSettingFirstPassword, isChangingPassword, activeTab, activeNotifications, isSidebarOpen, isDataReady,
    stockItemsCount, reorderItemsCount,
    setActiveTab, setIsSidebarOpen, setIsChangingPassword, setSelectedUserForLogin,
    setIsSettingFirstPassword, handleLogin, handleSetFirstPassword, handleChangePassword,
    handleLogout, handleRemoveNotification, notify, handleAddItem, handleUpdateItem, handleRemoveItem, handleImportItems,
    handleAddTask, handleUpdateTaskStatus, handleRemoveTask, handleAddDailyOrder,
    handleRemoveDailyOrder, handleAddOrderRequest, handleRemoveOrderRequest, handleMoveToBackorder,
    handleRestock, handleAddLaboratory, handleRemoveLaboratory, handleAddBackorder,
    handleRemoveBackorder, handleAddUser, handleUpdateUser, handleToggleUserStatus,
  };
};