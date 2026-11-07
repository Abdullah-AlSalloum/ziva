import React, { useState, useEffect } from 'react';
import { InventoryItem, User } from '../types';
import { XMarkIcon } from './icons';
import DropdownMenu from './DropdownMenu';
import { useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';

interface EditItemModalProps {
  item: InventoryItem;
  users: User[];
  onSave: (updates: Partial<Omit<InventoryItem, 'id'>>) => void;
  onClose: () => void;
}

const EditItemModal: React.FC<EditItemModalProps> = ({ item, users, onSave, onClose }) => {
  const { t } = useTranslation(translations);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-[2px] transition-opacity" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="max-h-[calc(100vh-2rem)] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/10 dark:bg-slate-800 dark:ring-white/10">
        <div className="p-5 sm:p-7">
          <div className="mb-6 flex items-center justify-between">
            <h2 id="modal-title" className="text-xl font-semibold text-gray-900 dark:text-white">{t('editItem.title')}</h2>
            <button onClick={onClose} className="rounded-xl p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="edit-reference" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('inventory.reference')}</label>
              <input type="text" id="edit-reference" value={reference} onChange={e => setReference(e.target.value)} required className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="edit-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('inventory.itemName')}</label>
              <input type="text" id="edit-name" value={name} onChange={e => setName(e.target.value)} required className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="edit-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('inventory.itemType')}</label>
              <input type="text" id="edit-type" value={type} onChange={e => setType(e.target.value)} required className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="edit-quantity" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('inventory.quantity')}</label>
              <input type="number" id="edit-quantity" value={quantity} onChange={e => setQuantity(parseInt(e.target.value, 10))} min="0" required className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="edit-managedBy" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('inventory.managedBy')}</label>
              <div className="mt-2">
                <DropdownMenu
                  id="edit-managedBy"
                  value={managedBy}
                  options={users.map(user => ({ value: user.id, label: user.name }))}
                  onChange={setManagedBy}
                  ariaLabel={t('inventory.managedBy')}
                />
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end dark:border-gray-700">
              <button type="button" onClick={onClose} className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">{t('inventory.cancel')}</button>
              <button type="submit" className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">{t('editItem.save')}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItemModal;