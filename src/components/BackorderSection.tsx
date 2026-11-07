import React from 'react';
import { Backorder, User, OrderItem } from '../types';
import { ArchiveBoxIcon, TrashIcon } from './icons';
import Avatar from './Avatar';
import { formatDate, formatNumber, useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';
import ConfirmDialog from './ConfirmDialog';

interface BackorderSectionProps {
  backorders: Backorder[];
  users: User[];
  onRemoveBackorder: (orderId: string) => void;
}

const BackorderSection: React.FC<BackorderSectionProps> = ({ backorders, users, onRemoveBackorder }) => {
  const { language, t } = useTranslation(translations);
  const [pendingRemoval, setPendingRemoval] = React.useState<{ id: string; message: string } | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 10;
  const getUser = (userId: string) => users.find(u => u.id === userId);

  const handleRemoveClick = (order: Backorder) => {
    setPendingRemoval({ id: order.id, message: t('backorder.removeConfirmation').replace('{name}', order.customerName) });
  };

  const totalPages = Math.max(1, Math.ceil(backorders.length / pageSize));
  const paginatedBackorders = backorders.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  React.useEffect(() => {
    setCurrentPage(page => Math.min(page, totalPages));
  }, [totalPages]);

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
    <div className="space-y-6">
      {pendingRemoval && <ConfirmDialog message={pendingRemoval.message} onCancel={() => setPendingRemoval(null)} onConfirm={() => { onRemoveBackorder(pendingRemoval.id); setPendingRemoval(null); }} />}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{t('backorder.title')}</h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('backorder.emptyHint')}</p>
      </div>
      
      {backorders.length === 0 ? (
        <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-300">
            <ArchiveBoxIcon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{t('backorder.empty')}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('backorder.emptyHint')}</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80">
          <ul role="list" className="divide-y divide-gray-200/80 dark:divide-gray-700/80">
            {paginatedBackorders.map(order => {
              const user = getUser(order.userId);
              return (
              <li key={order.id} className="px-4 py-5 transition-colors duration-200 hover:bg-gray-50/80 dark:hover:bg-gray-700/40 sm:px-6">
                <div className="grid items-start gap-5 md:grid-cols-[minmax(0,1fr)_auto]">
                    <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
                            {formatDate(order.createdAt, language)}
                          </p>
                          <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                            {t('backorder.title')}
                          </span>
                        </div>
                        
                        <div className="mt-4 text-sm leading-6 text-gray-800 dark:text-gray-200">
                          {renderOrderDetails(order.orderDetails)}
                        </div>
                        
                        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500 dark:text-gray-400">
                            <p>{t('backorder.for')} <span className="font-semibold text-gray-700 dark:text-gray-300">{order.customerName}</span></p>
                            {user && (
                                <div className="flex items-center gap-2" title={`${t('backorder.loggedBy')} ${user.name}`}>
                                    <span>{t('backorder.by')}</span>
                                    <div className="flex items-center gap-2">
                                      <Avatar name={user.name} size="small"/>
                                      <span className="font-semibold text-gray-700 dark:text-gray-300">{user.name}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button onClick={() => handleRemoveClick(order)} className="rounded-xl p-2 text-gray-400 hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:hover:bg-red-900/50" aria-label={`${t('backorder.remove')} ${order.customerName}`}>
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
              </li>
            )})}
          </ul>
        </div>
      )}
      {backorders.length > 0 && (
        <div className="flex flex-col gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('backorder.paginationShowing')
              .replace('{from}', formatNumber((currentPage - 1) * pageSize + 1, language))
              .replace('{to}', formatNumber(Math.min(currentPage * pageSize, backorders.length), language))
              .replace('{total}', formatNumber(backorders.length, language))}
          </p>
          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <button
              type="button"
              onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              {t('backorder.paginationPrevious')}
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
              {t('backorder.paginationNext')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackorderSection;