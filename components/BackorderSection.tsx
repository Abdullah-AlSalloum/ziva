import React from 'react';
import { Backorder, User, OrderItem } from '../types';
import { TrashIcon } from './icons';
import Avatar from './Avatar';

interface BackorderSectionProps {
  backorders: Backorder[];
  users: User[];
  onRemoveBackorder: (orderId: string) => void;
}

const BackorderSection: React.FC<BackorderSectionProps> = ({ backorders, users, onRemoveBackorder }) => {
  const getUser = (userId: string) => users.find(u => u.id === userId);

  const handleRemoveClick = (order: Backorder) => {
    if (window.confirm(`Are you sure you want to remove the backorder for "${order.customerName}"? This should be done only after the order is fulfilled.`)) {
        onRemoveBackorder(order.id);
    }
  };

  const renderOrderDetails = (details: Backorder['orderDetails']) => {
    if (typeof details === 'string') {
      return <p className="whitespace-pre-wrap">{details}</p>;
    }
    if (Array.isArray(details)) {
      if (details.length === 0) return null;
      const firstItem = details[0];

      if (typeof firstItem === 'object' && firstItem !== null && 'name' in firstItem && 'quantity' in firstItem) {
        return (
          <ul className="list-disc list-inside space-y-1">
            {(details as OrderItem[]).map((item, index) => (
              <li key={index}>
                {item.name}{' '}
                <span className="text-gray-500 dark:text-gray-400">({item.quantity}x)</span>
              </li>
            ))}
          </ul>
        );
      }
       return (
        <ul className="list-disc list-inside space-y-1">
          {(details as string[]).map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Pending Backorders</h2>
      
      {backorders.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">No pending backorders.</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Items from unfulfillable order requests will appear here.</p>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {backorders.map(order => {
              const user = getUser(order.userId);
              return (
              <li key={order.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                            {new Date(order.createdAt).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        
                        <div className="text-base text-gray-800 dark:text-gray-200 mt-2">
                          {renderOrderDetails(order.orderDetails)}
                        </div>
                        
                        <div className="flex items-center flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-500 dark:text-gray-400">
                            <p>For: <span className="font-medium text-gray-700 dark:text-gray-300">{order.customerName}</span></p>
                            {user && (
                                <div className="flex items-center" title={`Logged by ${user.name}`}>
                                    <span>By:</span>
                                    <div className="ml-1.5 flex items-center">
                                      <Avatar name={user.name} size="small"/>
                                      <span className="ml-1.5 font-medium text-gray-700 dark:text-gray-300">{user.name}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                        <button onClick={() => handleRemoveClick(order)} className="p-2 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" aria-label={`Remove backorder for ${order.customerName}`}>
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
              </li>
            )})}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BackorderSection;