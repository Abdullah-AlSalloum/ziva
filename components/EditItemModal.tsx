import React, { useState, useEffect } from 'react';
import { InventoryItem, User } from '../types';
import { XMarkIcon } from './icons';

interface EditItemModalProps {
  item: InventoryItem;
  users: User[];
  onSave: (updates: Partial<Omit<InventoryItem, 'id'>>) => void;
  onClose: () => void;
}

const EditItemModal: React.FC<EditItemModalProps> = ({ item, users, onSave, onClose }) => {
  const [reference, setReference] = useState(item.reference);
  const [name, setName] = useState(item.name);
  const [type, setType] = useState(item.type);
  const [quantity, setQuantity] = useState(item.quantity);
  const [managedBy, setManagedBy] = useState(item.managedBy);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reference && name && type && quantity >= 0) {
      onSave({ reference, name, type, quantity, managedBy });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50 transition-opacity" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg transform transition-all">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 id="modal-title" className="text-xl font-semibold text-gray-900 dark:text-white">Edit Item</h2>
            <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="edit-reference" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Reference</label>
              <input type="text" id="edit-reference" value={reference} onChange={e => setReference(e.target.value)} required className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="edit-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Item Name</label>
              <input type="text" id="edit-name" value={name} onChange={e => setName(e.target.value)} required className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="edit-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Item Type</label>
              <input type="text" id="edit-type" value={type} onChange={e => setType(e.target.value)} required className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="edit-quantity" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Quantity</label>
              <input type="number" id="edit-quantity" value={quantity} onChange={e => setQuantity(parseInt(e.target.value, 10))} min="0" required className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="edit-managedBy" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Managed By</label>
              <select id="edit-managedBy" value={managedBy} onChange={e => setManagedBy(e.target.value)} required className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
              </select>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
              <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItemModal;