import React, { useEffect } from 'react';
import { XMarkIcon, BellIcon } from './icons';

interface NotificationToastProps {
  message: string;
  onDismiss: () => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ message, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 7000); // Auto-dismiss after 7 seconds

    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-full max-w-sm pointer-events-auto ring-1 ring-black dark:ring-white/10 ring-opacity-5 overflow-hidden transition-all transform-gpu animate-fade-in-right">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <BellIcon className="h-6 w-6 text-indigo-500" />
        </div>
        <div className="ml-3 w-0 flex-1 pt-0.5">
          <p className="text-sm font-medium text-gray-900 dark:text-white">New Notification</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{message}</p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            onClick={onDismiss}
            className="inline-flex text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-indigo-500"
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface NotificationContainerProps {
    notifications: { id: number; message: string }[];
    onRemoveNotification: (id: number) => void;
}

export const NotificationContainer: React.FC<NotificationContainerProps> = ({ notifications, onRemoveNotification }) => {
    return (
        <div aria-live="assertive" className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50">
            <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                {notifications.map((notification) => (
                    <NotificationToast
                        key={notification.id}
                        message={notification.message}
                        onDismiss={() => onRemoveNotification(notification.id)}
                    />
                ))}
            </div>
        </div>
    );
};
