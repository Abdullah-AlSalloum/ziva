import React, { useState, useMemo, useRef } from 'react';
import { InventoryItem, User } from '../types';
import { PlusIcon, MinusIcon, SearchIcon, ArrowDownTrayIcon, ArrowUpTrayIcon, TrashIcon, PencilIcon, ChevronUpIcon, ChevronDownIcon } from './icons';
import Avatar from './Avatar';
import EditItemModal from './EditItemModal';

interface InventorySectionProps {
  items: InventoryItem[];
  users: User[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onAddItem: (newItem: Omit<InventoryItem, 'id' | 'managedBy' | 'createdAt'>) => void;
  onImportItems: (items: Omit<InventoryItem, 'id' | 'managedBy' | 'createdAt'>[]) => void;
  onRemoveItem: (itemId: string) => void;
  onUpdateItem: (itemId: string, updates: Partial<Omit<InventoryItem, 'id'>>) => void;
}

type SortKey = 'reference' | 'name' | 'type' | 'quantity';

const AddItemForm: React.FC<{ onAddItem: InventorySectionProps['onAddItem'], onCancel: () => void }> = ({ onAddItem, onCancel }) => {
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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Add New Stock Item</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <input type="text" placeholder="Reference" value={reference} onChange={e => setReference(e.target.value)} required className="md:col-span-2 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            <input type="text" placeholder="Item Name" value={name} onChange={e => setName(e.target.value)} required className="md:col-span-2 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            <input type="text" placeholder="Item Type" value={type} onChange={e => setType(e.target.value)} required className="md:col-span-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            <input type="number" placeholder="Quantity (>=3)" value={quantity} onChange={e => setQuantity(parseInt(e.target.value, 10))} min="3" required className="md:col-span-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            <div className="md:col-span-6 flex justify-end space-x-3">
                <button type="button" onClick={onCancel} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Item</button>
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
    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer ${className}`} onClick={() => onSort(sortKey)}>
        <div className="flex items-center">
            <span>{label}</span>
            {currentSortKey === sortKey && (
                <span className="ml-1">
                    {sortDirection === 'asc' ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
                </span>
            )}
        </div>
    </th>
);


const InventorySection: React.FC<InventorySectionProps> = ({ items, users, onUpdateQuantity, onAddItem, onImportItems, onRemoveItem, onUpdateItem }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>('reference');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
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
  
  const handleExport = () => {
    const headers = ["Reference", "Item Name", "Type", "Quantity"];
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
    link.setAttribute("download", `inventory-stock-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            if (lines.length < 2) throw new Error("CSV file is empty or has no data rows.");
            
            const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
            const refIndex = headers.indexOf('reference');
            const nameIndex = headers.indexOf('item name');
            const typeIndex = headers.indexOf('type');
            const quantityIndex = headers.indexOf('quantity');
            
            if (refIndex === -1 || nameIndex === -1 || typeIndex === -1 || quantityIndex === -1) {
                 throw new Error('Invalid CSV format. Please ensure file has "Reference", "Item Name", "Type", and "Quantity" columns.');
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
            if (importedItems.length === 0) throw new Error("No valid items found in the file.");
            onImportItems(importedItems);
            alert(`Successfully imported/updated ${importedItems.length} items!`);
        } catch (error) {
            console.error("Error parsing CSV:", error);
            alert(`Failed to import file: ${error instanceof Error ? error.message : String(error)}`);
        } finally {
            if (event.target) event.target.value = '';
        }
    };
    reader.readAsText(file);
  };

  return (
    <div>
        <div className="sm:flex sm:items-center sm:justify-between mb-4 gap-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">In Stock Items</h2>
            <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="search"
                        placeholder="Search by ref, name, type..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="block w-full sm:w-56 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".csv" style={{ display: 'none' }} />
                     <button onClick={handleImportClick} className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <ArrowUpTrayIcon className="w-5 h-5 mr-2" />
                        Import
                    </button>
                     <button onClick={handleExport} className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                        Export
                    </button>
                    <button onClick={() => setShowAddForm(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <PlusIcon className="w-5 h-5 mr-2" />
                      Add
                    </button>
                </div>
            </div>
        </div>

      {showAddForm && <AddItemForm onAddItem={onAddItem} onCancel={() => setShowAddForm(false)} />}
      
      {!showAddForm && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <SortableHeader label="Reference" sortKey="reference" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                <SortableHeader label="Item Name" sortKey="name" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                <SortableHeader label="Type" sortKey="type" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Managed By</th>
                <SortableHeader label="Quantity" sortKey="quantity" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} className="text-center" />
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {sortedAndFilteredItems.length > 0 ? sortedAndFilteredItems.map(item => {
                const user = getUser(item.managedBy);
                return (
                <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                   <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-mono text-gray-500 dark:text-gray-400">{item.reference}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">{item.type}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user && (
                    <div className="flex items-center">
                        <Avatar name={user.name} size="small" />
                        <div className="ml-2 text-sm text-gray-500 dark:text-gray-400 hidden md:block">{user.name}</div>
                    </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex justify-center items-center space-x-3">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50" disabled={item.quantity === 0}>
                        <MinusIcon className="h-5 w-5" />
                      </button>
                      <span className="text-base font-bold text-gray-900 dark:text-white w-8 text-center">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <PlusIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-2">
                    <button onClick={() => setEditingItem(item)} className="p-1 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-label={`Edit ${item.name}`}>
                        <PencilIcon className="h-5 w-5" />
                    </button>
                    <button onClick={() => { if (window.confirm(`Are you sure you want to remove item "${item.name}"? This action cannot be undone.`)) { onRemoveItem(item.id) } }} className="p-1 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" aria-label={`Remove ${item.name}`}>
                        <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              )}) : (
                <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-500 dark:text-gray-400">
                        {searchTerm ? `No items found for "${searchTerm}".` : 'No items in stock. Add one to get started!'}
                    </td>
                </tr>
              )}
            </tbody>
          </table>
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