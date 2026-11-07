import React, { useState } from 'react';
import { InventoryItem, User } from '../types';
// FIX: Imported ArrowDownTrayIcon for the export button and removed unused ArrowUpTrayIcon.
import { PlusIcon, TrashIcon, PencilIcon, ArrowDownTrayIcon } from './icons';
import EditItemModal from './EditItemModal';

interface ReorderSectionProps {
  items: InventoryItem[];
  users: User[];
  onRestock: (itemId: string, restockQuantity: number) => void;
  onAddItem: (newItem: Omit<InventoryItem, 'id' | 'managedBy' | 'createdAt'>) => void;
  onRemoveItem: (itemId: string) => void;
  onUpdateItem: (itemId: string, updates: Partial<Omit<InventoryItem, 'id'>>) => void;
}

const AddReorderItemForm: React.FC<{ onAddItem: ReorderSectionProps['onAddItem'], onCancel: () => void }> = ({ onAddItem, onCancel }) => {
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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 my-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Add Item to Reorder List</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="Reference" value={reference} onChange={e => setReference(e.target.value)} required className="md:col-span-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            <input type="text" placeholder="Item Name" value={name} onChange={e => setName(e.target.value)} required className="md:col-span-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            <input type="text" placeholder="Item Type" value={type} onChange={e => setType(e.target.value)} required className="block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            <div className="md:col-span-3 flex justify-end space-x-3">
                <button type="button" onClick={onCancel} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Add Item</button>
            </div>
        </form>
    </div>
  );
};


const ReorderSection: React.FC<ReorderSectionProps> = ({ items, users, onRestock, onAddItem, onRemoveItem, onUpdateItem }) => {
    const [restockAmount, setRestockAmount] = useState<{ [key: string]: number }>({});
    const [showAddForm, setShowAddForm] = useState(false);
    const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);

    const handleRestockClick = (itemId: string) => {
        const amount = restockAmount[itemId] || 10;
        if(amount > 0) {
            onRestock(itemId, amount);
            setRestockAmount(prev => ({...prev, [itemId]: 10}));
        }
    };
    
    const handleExport = () => {
        const headers = ["Reference", "Item Name", "Type", "Quantity"];
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
        link.setAttribute("download", `reorder-needed-${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (
    <div>
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Reorder Needed</h2>
            <div className="flex items-center space-x-2">
                 <button onClick={handleExport} className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                    Export
                </button>
                <button onClick={() => setShowAddForm(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    <PlusIcon className="w-5 h-5 mr-2" />
                    Add Manually
                </button>
            </div>
        </div>

      {showAddForm && <AddReorderItemForm onAddItem={onAddItem} onCancel={() => setShowAddForm(false)} />}
      
      {!items.length && !showAddForm ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">All items are well-stocked!</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Items with less than 3 units will appear here.</p>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {items.map(item => (
              <li key={item.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.quantity === 0 ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
                        {item.quantity} left
                      </span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-mono text-gray-500 dark:text-gray-400">{item.reference}</p>
                      <p className="text-lg font-medium text-gray-900 dark:text-white truncate">{item.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.type}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center space-x-2">
                    <div className="flex items-center">
                        <input 
                          type="number"
                          value={restockAmount[item.id] ?? 10}
                          onChange={(e) => setRestockAmount({...restockAmount, [item.id]: parseInt(e.target.value, 10)})}
                          className="w-20 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-l-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          min="1"
                        />
                        <button
                          onClick={() => handleRestockClick(item.id)}
                          className="inline-flex items-center px-3 py-2 border border-l-0 border-transparent text-sm leading-4 font-medium rounded-r-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          <PlusIcon className="w-4 h-4" />
                          <span className="hidden sm:inline ml-1.5">Restock</span>
                        </button>
                    </div>
                    <div className="border-l border-gray-200 dark:border-gray-600 h-6"></div>
                    <button onClick={() => setEditingItem(item)} className="p-2 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-label={`Edit ${item.name}`}>
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button onClick={() => { if(window.confirm(`Are you sure you want to remove item "${item.name}"? This action cannot be undone.`)) { onRemoveItem(item.id) } }} className="p-2 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" aria-label={`Remove ${item.name}`}>
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
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