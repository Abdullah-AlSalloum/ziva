import React, { useState, useMemo, useRef, useEffect } from 'react';
import { InventoryItem, User } from '../types';
import { PlusIcon, MinusIcon, SearchIcon, ArrowDownTrayIcon, ArrowUpTrayIcon, TrashIcon, PencilIcon, ChevronUpIcon, ChevronDownIcon } from './icons';
import Avatar from './Avatar';
import EditItemModal from './EditItemModal';
import { formatNumber, useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';
import ConfirmDialog from './ConfirmDialog';

interface InventorySectionProps {
  items: InventoryItem[];
  users: User[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onAddItem: (newItem: Omit<InventoryItem, 'id' | 'managedBy' | 'createdAt'>) => void;
  onImportItems: (items: Omit<InventoryItem, 'id' | 'managedBy' | 'createdAt'>[]) => void;
  onRemoveItem: (itemId: string) => void;
  onUpdateItem: (itemId: string, updates: Partial<Omit<InventoryItem, 'id'>>) => void;
  onNotify: (message: string, type?: 'success' | 'error' | 'info') => void;
}

type SortKey = 'reference' | 'name' | 'type' | 'quantity';

const AddItemForm: React.FC<{ onAddItem: InventorySectionProps['onAddItem'], onCancel: () => void }> = ({ onAddItem, onCancel }) => {
  const { t } = useTranslation(translations);
  const [reference, setReference] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reference && name && type && quantity >= 3) {
      onAddItem({ reference, name, type, quantity });
      setReference('');
      setName('');
      setType('');
      setQuantity(3);
      onCancel();
    }
  };

  return (
    <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80 sm:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">{t('inventory.addNew')}</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 sm:col-span-1 lg:col-span-2">
              <span className="mb-2 block">{t('inventory.reference')}</span>
              <input type="text" value={reference} onChange={e => setReference(e.target.value)} required className="block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700/70 dark:text-white dark:placeholder:text-slate-400 sm:text-sm" />
            </label>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 sm:col-span-1 lg:col-span-2">
              <span className="mb-2 block">{t('inventory.itemName')}</span>
              <input type="text" value={name} onChange={e => setName(e.target.value)} required className="block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700/70 dark:text-white dark:placeholder:text-slate-400 sm:text-sm" />
            </label>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 lg:col-span-1">
              <span className="mb-2 block">{t('inventory.itemType')}</span>
              <input type="text" value={type} onChange={e => setType(e.target.value)} required className="block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700/70 dark:text-white dark:placeholder:text-slate-400 sm:text-sm" />
            </label>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 lg:col-span-1">
              <span className="mb-2 block">{t('inventory.quantityMinimum')}</span>
              <input type="number" value={quantity} onChange={e => setQuantity(parseInt(e.target.value, 10))} min="3" required className="block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700/70 dark:text-white dark:placeholder:text-slate-400 sm:text-sm" />
            </label>
            <div className="flex flex-col-reverse gap-3 sm:col-span-2 sm:flex-row sm:justify-end lg:col-span-6">
                <button type="button" onClick={onCancel} className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">{t('inventory.cancel')}</button>
                <button type="submit" className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">{t('inventory.add')}</button>
            </div>
        </form>
    </div>
  );
};

const SortableHeader: React.FC<{
  label: string;
  sortKey: SortKey;
  currentSortKey: SortKey;
  sortDirection: 'asc' | 'desc';
  onSort: (key: SortKey) => void;
  className?: string;
}> = ({ label, sortKey, currentSortKey, sortDirection, onSort, className = '' }) => (
    <th scope="col" className={`px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer ${className}`} onClick={() => onSort(sortKey)}>
        <div className="flex items-center justify-center gap-1">
            <span>{label}</span>
            {currentSortKey === sortKey && (
                <span>
                    {sortDirection === 'asc' ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
                </span>
            )}
        </div>
    </th>
);


const InventorySection: React.FC<InventorySectionProps> = ({ items, users, onUpdateQuantity, onAddItem, onImportItems, onRemoveItem, onUpdateItem, onNotify }) => {
  const { t, language } = useTranslation(translations);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>('reference');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pendingRemoval, setPendingRemoval] = useState<{ id: string; message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pageSize = 10;
  
  const getUser = (userId: string) => users.find(u => u.id === userId);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const sortedAndFilteredItems = useMemo(() => {
    const filtered = items.filter(item => 
      (item.reference || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.type || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
        const valA = a[sortKey] ?? '';
        const valB = b[sortKey] ?? '';
        
        let comparison = 0;
        if (typeof valA === 'string' && typeof valB === 'string') {
            comparison = valA.localeCompare(valB);
        } else if (typeof valA === 'number' && typeof valB === 'number') {
            comparison = valA - valB;
        }

        return sortDirection === 'asc' ? comparison : -comparison;
    });

  }, [items, searchTerm, sortKey, sortDirection]);

  const totalPages = Math.max(1, Math.ceil(sortedAndFilteredItems.length / pageSize));
  const paginatedItems = sortedAndFilteredItems.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortKey, sortDirection]);

  useEffect(() => {
    setCurrentPage(page => Math.min(page, totalPages));
  }, [totalPages]);
  
  const handleExport = () => {
    const headers = [
      t('inventory.reference'),
      t('inventory.itemName'),
      t('inventory.itemType'),
      t('inventory.quantity'),
    ];
    const escapeCsvCell = (cell: any) => {
        let strCell = String(cell ?? '');
        if (strCell.includes(',') || strCell.includes('"') || strCell.includes('\n')) {
            return `"${strCell.replace(/"/g, '""')}"`;
        }
        return strCell;
    };
    const rows = sortedAndFilteredItems.map(item => 
        [item.reference, item.name, item.type, item.quantity].map(escapeCsvCell).join(',')
    );
    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${t('inventory.exportDate')}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => { fileInputRef.current?.click(); };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const text = e.target?.result as string;
            const lines = text.split(/\r?\n/).filter(line => line.trim());
            if (lines.length < 2) throw new Error(t('inventory.importEmpty'));
            
            const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
            const refIndex = headers.indexOf('reference');
            const nameIndex = headers.indexOf('item name');
            const typeIndex = headers.indexOf('type');
            const quantityIndex = headers.indexOf('quantity');
            
            if (refIndex === -1 || nameIndex === -1 || typeIndex === -1 || quantityIndex === -1) {
                 throw new Error(t('inventory.importInvalidFormat'));
            }

            const importedItems: Omit<InventoryItem, 'id' | 'managedBy' | 'createdAt'>[] = [];
            for (let i = 1; i < lines.length; i++) {
                const values = lines[i].split(',');
                const reference = values[refIndex]?.trim();
                const name = values[nameIndex]?.trim();
                const type = values[typeIndex]?.trim();
                const quantityStr = values[quantityIndex]?.trim();
                const quantity = parseInt(quantityStr, 10);

                if (!reference || !name || !type || isNaN(quantity) || quantity < 0) {
                    console.warn(`Skipping invalid row ${i + 1}: ${lines[i]}`);
                    continue;
                }
                importedItems.push({ reference, name, type, quantity });
            }
            if (importedItems.length === 0) throw new Error(t('inventory.importNoValidRows'));
            onImportItems(importedItems);
            onNotify(t('inventory.importSuccess').replace('{count}', formatNumber(importedItems.length, language)), 'success');
        } catch (error) {
            console.error("Error parsing CSV:", error);
            onNotify(t('inventory.importFailed').replace('{error}', error instanceof Error ? error.message : String(error)), 'error');
        } finally {
            if (event.target) event.target.value = '';
        }
    };
    reader.readAsText(file);
  };

  return (
    <div>
        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{t('inventory.inStockItems')}</h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('inventory.quantityMinimum')}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="search"
                        placeholder={t('inventory.search')}
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="block w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 leading-5 text-slate-900 shadow-sm placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder:text-slate-300 sm:w-72 lg:w-80 sm:text-sm"
                    />
                </div>
                <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center">
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".csv" style={{ display: 'none' }} />
                     <button type="button" onClick={handleImportClick} className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 sm:px-4">
                        <ArrowUpTrayIcon className="h-5 w-5" />
                        {t('inventory.import')}
                    </button>
                     <button type="button" onClick={handleExport} className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 sm:px-4">
                        <ArrowDownTrayIcon className="h-5 w-5" />
                        {t('inventory.export')}
                    </button>
                    <button type="button" onClick={() => setShowAddForm(true)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:px-4">
                      <PlusIcon className="h-5 w-5" />
                      {t('inventory.add')}
                    </button>
                </div>
            </div>
        </div>

      {showAddForm && <AddItemForm onAddItem={onAddItem} onCancel={() => setShowAddForm(false)} />}
      
      {!showAddForm && (
        <div className="touch-pan-x overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/80 [-webkit-overflow-scrolling:touch] dark:bg-gray-800 dark:ring-gray-700/80">
          <table className="w-full min-w-[820px] table-fixed divide-y divide-gray-200 dark:divide-gray-700">
            <colgroup>
              <col className="w-[16%]" />
              <col className="w-[22%]" />
              <col className="w-[16%]" />
              <col className="w-[19%]" />
              <col className="w-[15%]" />
              <col className="w-[12%]" />
            </colgroup>
            <thead className="sticky top-0 z-10 bg-gray-50 shadow-sm dark:bg-gray-700">
              <tr>
                <SortableHeader label={t('inventory.reference')} sortKey="reference" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                <SortableHeader label={t('inventory.itemName')} sortKey="name" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                <SortableHeader label={t('inventory.itemType')} sortKey="type" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{t('inventory.managedBy')}</th>
                <SortableHeader label={t('inventory.quantity')} sortKey="quantity" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} className="text-center" />
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{t('inventory.actions')}</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {paginatedItems.length > 0 ? paginatedItems.map(item => {
                const user = getUser(item.managedBy);
                return (
                <tr key={item.id} className="transition-colors duration-200 hover:bg-gray-50/80 dark:hover:bg-gray-700/40">
                   <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="text-sm font-mono text-gray-500 dark:text-gray-400">{item.reference}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">{item.type}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {user && (
                    <div className="flex items-center justify-center gap-2">
                        <Avatar name={user.name} size="small" />
                        <div className="text-sm text-gray-500 dark:text-gray-400 hidden md:block">{user.name}</div>
                    </div>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-500">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex items-center justify-center gap-3">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-700" disabled={item.quantity === 0}>
                        <MinusIcon className="h-5 w-5" />
                      </button>
                      <span className="text-base font-bold text-gray-900 dark:text-white w-8 text-center">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700">
                        <PlusIcon className="h-5 w-5" />
                      </button>
                      </div>
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${item.quantity === 0 ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-200' : item.quantity < 3 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200'}`}>
                        {item.quantity === 0 ? t('inventory.outOfStock') : item.quantity < 3 ? t('inventory.lowStock') : t('inventory.inStock')}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <div className="flex items-center justify-center gap-2">
                    <button onClick={() => setEditingItem(item)} className="p-1 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-label={`Edit ${item.name}`}>
                        <PencilIcon className="h-5 w-5" />
                    </button>
                    <button onClick={() => setPendingRemoval({ id: item.id, message: `Are you sure you want to remove item "${item.name}"? This action cannot be undone.` })} className="p-1 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" aria-label={`Remove ${item.name}`}>
                        <TrashIcon className="h-5 w-5" />
                    </button>
                      {pendingRemoval && <ConfirmDialog message={pendingRemoval.message} onCancel={() => setPendingRemoval(null)} onConfirm={() => { onRemoveItem(pendingRemoval.id); setPendingRemoval(null); }} />}
                    </div>
                  </td>
                </tr>
              )}) : (
                <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-500 dark:text-gray-400">
                        {searchTerm ? `${t('inventory.noSearchResults')} "${searchTerm}".` : t('inventory.noItems')}
                    </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      {!showAddForm && sortedAndFilteredItems.length > 0 && (
        <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('inventory.paginationShowing')
              .replace('{from}', formatNumber((currentPage - 1) * pageSize + 1, language))
              .replace('{to}', formatNumber(Math.min(currentPage * pageSize, sortedAndFilteredItems.length), language))
              .replace('{total}', formatNumber(sortedAndFilteredItems.length, language))}
          </p>
          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <button
              type="button"
              onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              {t('inventory.paginationPrevious')}
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
              {t('inventory.paginationNext')}
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

export default InventorySection;