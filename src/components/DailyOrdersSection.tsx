import React, { useEffect, useState } from 'react';
import { DailyOrder } from '../types';
import { PlusIcon, TrashIcon } from './icons';
import { formatDate, formatNumber, useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';
import ConfirmDialog from './ConfirmDialog';

interface DailyOrdersSectionProps {
  orders: DailyOrder[];
  onAddOrder: (order: Omit<DailyOrder, 'id' | 'createdAt'>) => void;
  onRemoveOrder: (orderId: string) => void;
}

const DailyOrdersSection: React.FC<DailyOrdersSectionProps> = ({ orders, onAddOrder, onRemoveOrder }) => {
  const { language, t } = useTranslation(translations);
  const [orderDetails, setOrderDetails] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [pendingRemoval, setPendingRemoval] = useState<{ id: string; message: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  
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
    setPendingRemoval({ id: order.id, message: t('dailyOrders.removeConfirmation').replace('{name}', order.customerName).replace('{date}', date) });
  };

  const totalPages = Math.max(1, Math.ceil(orders.length / pageSize));
  const paginatedOrders = orders.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    setCurrentPage(page => Math.min(page, totalPages));
  }, [totalPages]);

  return (
    <div className="space-y-6">
      {pendingRemoval && <ConfirmDialog message={pendingRemoval.message} onCancel={() => setPendingRemoval(null)} onConfirm={() => { onRemoveOrder(pendingRemoval.id); setPendingRemoval(null); }} />}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{t('dailyOrders.title')}</h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('dailyOrders.emptyHint')}</p>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80 sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            <PlusIcon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('dailyOrders.addToday')}</h3>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 items-end gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(220px,1fr)_auto]">
          <div>
            <label htmlFor="order-details" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('dailyOrders.details')}</label>
            <textarea id="order-details" value={orderDetails} onChange={e => setOrderDetails(e.target.value)} required rows={3} className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="order-customer" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('dailyOrders.customerName')}</label>
            <input type="text" id="order-customer" value={customerName} onChange={e => setCustomerName(e.target.value)} required className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
          </div>
          <div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 lg:w-auto">
              <PlusIcon className="h-5 w-5" /> {t('dailyOrders.logOrder')}
            </button>
          </div>
        </form>
      </div>
      
      {orders.length === 0 ? (
        <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-gray-700">
            <PlusIcon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{t('dailyOrders.empty')}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('dailyOrders.emptyHint')}</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80">
          <ul role="list" className="divide-y divide-gray-200/80 dark:divide-gray-700/80">
            {paginatedOrders.map(order => (
              <li key={order.id} className="px-4 py-5 transition-colors duration-200 hover:bg-gray-50/80 dark:hover:bg-gray-700/40 sm:px-6">
                <div className="grid items-start gap-4 md:grid-cols-[minmax(0,1fr)_auto]">
                    <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">{formatDate(order.dateSent, language)}</p>
                        <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-gray-800 dark:text-gray-200">{order.orderDetails}</p>
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{t('dailyOrders.customer')} <span className="font-semibold text-gray-700 dark:text-gray-300">{order.customerName}</span></p>
                    </div>
                    <div className="flex justify-end">
                        <button onClick={() => handleRemoveClick(order)} className="rounded-xl p-2 text-gray-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-red-500" aria-label={`${t('dailyOrders.removeOrder')} ${order.customerName}`}>
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {orders.length > 0 && (
        <div className="flex flex-col gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('dailyOrders.paginationShowing')
              .replace('{from}', formatNumber((currentPage - 1) * pageSize + 1, language))
              .replace('{to}', formatNumber(Math.min(currentPage * pageSize, orders.length), language))
              .replace('{total}', formatNumber(orders.length, language))}
          </p>
          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <button
              type="button"
              onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              {t('dailyOrders.paginationPrevious')}
            </button>
            <span className="min-w-20 text-center text-sm font-semibold text-gray-700 dark:text-gray-200">
              {formatNumber(currentPage, language)} / {formatNumber(totalPages, language)}
            </span>
            <button
              type="button"
              onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
              disabled={currentPage === totalPages}
              className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              {t('dailyOrders.paginationNext')}
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default DailyOrdersSection;