import React, { useState } from 'react';
import { DailyOrder } from '../types';
import { PlusIcon, TrashIcon } from './icons';
import { formatDate, useTranslation } from '../i18n';
import { translations } from '../translations';

interface DailyOrdersSectionProps {
  orders: DailyOrder[];
  onAddOrder: (order: Omit<DailyOrder, 'id' | 'createdAt'>) => void;
  onRemoveOrder: (orderId: string) => void;
}

const DailyOrdersSection: React.FC<DailyOrdersSectionProps> = ({ orders, onAddOrder, onRemoveOrder }) => {
  const { language, t } = useTranslation(translations);
  const [orderDetails, setOrderDetails] = useState('');
  const [customerName, setCustomerName] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderDetails) {
      const today = new Date().toISOString().split('T')[0];
      onAddOrder({ orderDetails, customerName, dateSent: today });
      setOrderDetails('');
      setCustomerName('');
    }
  };

  const handleRemoveClick = (order: DailyOrder) => {
    const date = formatDate(order.dateSent, language);
    if (window.confirm(t('dailyOrders.removeConfirmation').replace('{name}', order.customerName).replace('{date}', date))) {
        onRemoveOrder(order.id);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('dailyOrders.title')}</h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{t('dailyOrders.addToday')}</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-3">
            <label htmlFor="order-details" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('dailyOrders.details')}</label>
            <textarea id="order-details" value={orderDetails} onChange={e => setOrderDetails(e.target.value)} required rows={2} className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="order-customer" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('dailyOrders.customerName')}</label>
            <input type="text" id="order-customer" value={customerName} onChange={e => setCustomerName(e.target.value)} required className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
          </div>
          <div className="md:col-span-1 flex items-end">
            <button type="submit" className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
              <PlusIcon className="w-5 h-5 mr-2" /> {t('dailyOrders.logOrder')}
            </button>
          </div>
        </form>
      </div>
      
      {orders.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t('dailyOrders.empty')}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('dailyOrders.emptyHint')}</p>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {orders.map(order => (
              <li key={order.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{formatDate(order.dateSent, language)}</p>
                        <p className="text-base text-gray-800 dark:text-gray-200 mt-1 whitespace-pre-wrap">{order.orderDetails}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('dailyOrders.customer')} <span className="font-medium text-gray-700 dark:text-gray-300">{order.customerName}</span></p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                        <button onClick={() => handleRemoveClick(order)} className="p-2 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" aria-label={`${t('dailyOrders.removeOrder')} ${order.customerName}`}>
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default DailyOrdersSection;