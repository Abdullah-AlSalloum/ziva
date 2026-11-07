import React, { useEffect, useState } from 'react';
import { InventoryItem, User } from '../types';
// FIX: Imported ArrowDownTrayIcon for the export button and removed unused ArrowUpTrayIcon.
import { PlusIcon, TrashIcon, PencilIcon, ArrowDownTrayIcon } from './icons';
import EditItemModal from './EditItemModal';
import { formatNumber, useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';
import ConfirmDialog from './ConfirmDialog';

interface ReorderSectionProps {
  items: InventoryItem[];
  users: User[];
  onRestock: (itemId: string, restockQuantity: number) => void;
  onAddItem: (newItem: Omit<InventoryItem, 'id' | 'managedBy' | 'createdAt'>) => void;
  onRemoveItem: (itemId: string) => void;
  onUpdateItem: (itemId: string, updates: Partial<Omit<InventoryItem, 'id'>>) => void;
}

const AddReorderItemForm: React.FC<{ onAddItem: ReorderSectionProps['onAddItem'], onCancel: () => void }> = ({ onAddItem, onCancel }) => {
  const { t } = useTranslation(translations);
  const [reference, setReference] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reference && name && type) {
      onAddItem({ reference, name, type, quantity: 0 }); // Add with quantity 0 to ensure it's in reorder list
      onCancel();
    }
  };

  return (
    <div className="my-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-800 dark:ring-slate-700/80 sm:p-6">
        <h3 className="mb-5 text-lg font-bold text-slate-900 dark:text-white">{t('reorder.addItemTitle')}</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
              <span className="mb-2 block">{t('inventory.reference')}</span>
              <input type="text" value={reference} onChange={e => setReference(e.target.value)} required className="block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700/70 dark:text-white sm:text-sm" />
            </label>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
              <span className="mb-2 block">{t('inventory.itemName')}</span>
              <input type="text" value={name} onChange={e => setName(e.target.value)} required className="block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700/70 dark:text-white sm:text-sm" />
            </label>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
              <span className="mb-2 block">{t('inventory.itemType')}</span>
              <input type="text" value={type} onChange={e => setType(e.target.value)} required className="block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700/70 dark:text-white sm:text-sm" />
            </label>
            <div className="flex flex-col-reverse gap-3 md:col-span-3 md:flex-row md:justify-end">
                <button type="button" onClick={onCancel} className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">{t('inventory.cancel')}</button>
                <button type="submit" className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">{t('reorder.addItem')}</button>
            </div>
        </form>
    </div>
  );
};


const ReorderSection: React.FC<ReorderSectionProps> = ({ items, users, onRestock, onAddItem, onRemoveItem, onUpdateItem }) => {
    const { t, language } = useTranslation(translations);
    const [restockAmount, setRestockAmount] = useState<{ [key: string]: number }>({});
    const [showAddForm, setShowAddForm] = useState(false);
    const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
    const [pendingRemoval, setPendingRemoval] = useState<{ id: string; message: string } | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
    const paginatedItems = items.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    useEffect(() => {
        setCurrentPage(page => Math.min(page, totalPages));
    }, [totalPages]);

    const handleRestockClick = (itemId: string) => {
        const amount = restockAmount[itemId] || 10;
        if(amount > 0) {
            onRestock(itemId, amount);
            setRestockAmount(prev => ({...prev, [itemId]: 10}));
        }
    };
    
    const handleExport = () => {
        const headers = [
          t('inventory.reference'),
          t('inventory.itemName'),
          t('inventory.itemType'),
          t('inventory.quantity'),
        ];
        const escapeCsvCell = (cell: any) => {
            let strCell = String(cell);
            if (strCell.includes(',') || strCell.includes('"') || strCell.includes('\n')) {
                return `"${strCell.replace(/"/g, '""')}"`;
            }
            return strCell;
        };
        const rows = items.map(item => [item.reference, item.name, item.type, item.quantity].map(escapeCsvCell).join(','));
        const csvContent = [headers.join(','), ...rows].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `${t('reorder.exportDate')}-${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      };

  return (
    <div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{t('reorder.title')}</h2>
            <div className="flex w-full flex-wrap gap-2 sm:w-auto">
                 <button type="button" onClick={handleExport} className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 sm:flex-none">
                    <ArrowDownTrayIcon className="h-5 w-5" />
                    {t('reorder.export')}
                </button>
                <button type="button" onClick={() => setShowAddForm(true)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:flex-none">
                    <PlusIcon className="h-5 w-5" />
                    {t('reorder.addManually')}
                </button>
            </div>
        </div>

      {showAddForm && <AddReorderItemForm onAddItem={onAddItem} onCancel={() => setShowAddForm(false)} />}
      
      {!items.length && !showAddForm ? (
        <div className="rounded-2xl bg-white px-6 py-14 text-center shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-800 dark:ring-slate-700/80">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('reorder.allStocked')}</h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">{t('reorder.lowStockHint')}</p>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm ring-1 ring-gray-200/70 dark:ring-gray-700/70 overflow-hidden">
          <ul role="list" className="divide-y divide-gray-200/80 dark:divide-gray-700/80">
            {paginatedItems.map(item => (
              <li key={item.id} className="px-4 py-5 sm:px-6 hover:bg-gray-50/80 dark:hover:bg-gray-700/40 transition-colors duration-200">
                <div className="grid items-center gap-5 md:grid-cols-[minmax(0,1fr)_auto_auto]">
                  <div className="flex min-w-0 items-center gap-4">
                    <span className={`inline-flex shrink-0 items-center rounded-full px-3 py-1 text-xs font-semibold ${item.quantity === 0 ? 'bg-red-100 text-red-800 dark:bg-red-900/60 dark:text-red-200' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200'}`}>
                      {item.quantity} {t('reorder.left')}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{item.reference}</p>
                      <p className="truncate text-base font-semibold text-gray-900 dark:text-white">{item.name}</p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">{item.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2 md:justify-center">
                    <label htmlFor={`restock-${item.id}`} className="sr-only">{t('reorder.restock')}</label>
                    <div className="flex items-stretch overflow-hidden rounded-lg ring-1 ring-gray-300 dark:ring-gray-600">
                        <input 
                          id={`restock-${item.id}`}
                          type="number"
                          value={restockAmount[item.id] ?? 10}
                          onChange={(e) => setRestockAmount({...restockAmount, [item.id]: parseInt(e.target.value, 10)})}
                          className="w-16 border-0 bg-gray-50 px-3 py-2 text-center text-sm text-gray-900 focus:ring-2 focus:ring-inset focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                          min="1"
                        />
                        <button
                          onClick={() => handleRestockClick(item.id)}
                          className="inline-flex items-center gap-1.5 border-0 bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-300"
                        >
                          <PlusIcon className="w-4 h-4" />
                          <span>{t('reorder.restock')}</span>
                        </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-1 border-gray-200 dark:border-gray-700 md:border-s md:ps-4 md:justify-center">
                    <button onClick={() => setEditingItem(item)} className="rounded-lg p-2 text-gray-400 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/50 focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-label={`${t('reorder.editItem')} ${item.name}`}>
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button onClick={() => setPendingRemoval({ id: item.id, message: t('reorder.removeConfirmation').replace('{name}', item.name) })} className="rounded-lg p-2 text-gray-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-red-500" aria-label={`${t('reorder.removeItem')} ${item.name}`}>
                      <TrashIcon className="h-5 w-5" />
                    </button>
                    {pendingRemoval && <ConfirmDialog message={pendingRemoval.message} onCancel={() => setPendingRemoval(null)} onConfirm={() => { onRemoveItem(pendingRemoval.id); setPendingRemoval(null); }} />}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {items.length > 0 && (
        <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('reorder.paginationShowing')
              .replace('{from}', formatNumber((currentPage - 1) * pageSize + 1, language))
              .replace('{to}', formatNumber(Math.min(currentPage * pageSize, items.length), language))
              .replace('{total}', formatNumber(items.length, language))}
          </p>
          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <button
              type="button"
              onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              {t('reorder.paginationPrevious')}
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
              {t('reorder.paginationNext')}
            </button>
          </div>
        </div>
      )}
      {editingItem && (
        <EditItemModal
            item={editingItem}
            users={users}
            onSave={(updates) => onUpdateItem(editingItem.id, updates)}
            onClose={() => setEditingItem(null)}
        />
      )}
    </div>
  );
};

export default ReorderSection;