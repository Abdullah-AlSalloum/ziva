import React, { useEffect, useState, useMemo } from 'react';
import { OrderRequest, User, OrderItem, InventoryItem } from '../types';
import { PlusIcon, TrashIcon, ClockIcon, SearchIcon } from './icons';
import DropdownMenu from './DropdownMenu';
import Avatar from './Avatar';
import { formatDate, formatNumber, useTranslation } from '../i18n/i18n';
import { translations } from '../i18n/translations';
import ConfirmDialog from './ConfirmDialog';

interface OrderRequestSectionProps {
  items: OrderRequest[];
  users: User[];
  inventory: InventoryItem[];
  onAddItem: (order: Omit<OrderRequest, 'id' | 'userId' | 'createdAt'>) => void;
  onRemoveItem: (orderId: string) => void;
  onMoveToBackorder: (order: OrderRequest) => void;
}

const OrderRequestSection: React.FC<OrderRequestSectionProps> = ({ items, users, inventory, onAddItem, onRemoveItem, onMoveToBackorder }) => {
  const { language, t } = useTranslation(translations);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([{ name: '', quantity: 1 }]);
  const [customerName, setCustomerName] = useState('');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [pendingRemoval, setPendingRemoval] = useState<{ id: string; message: string } | null>(null);
  const [requestSearch, setRequestSearch] = useState('');
  const [requestStatus, setRequestStatus] = useState<'all' | 'ready' | 'backorder'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const getUser = (userId: string) => users.find(u => u.id === userId);
  
  const handleItemChange = (index: number, field: keyof OrderItem, value: string) => {
    const newItems = [...orderItems];
    if (field === 'name') {
      newItems[index].name = value;
    } else if (field === 'quantity') {
      newItems[index].quantity = parseInt(value, 10);
    }
    setOrderItems(newItems);
  };

  const handleSelectItem = (itemIndex: number, itemName: string) => {
    const newItems = [...orderItems];
    newItems[itemIndex].name = itemName;
    setOrderItems(newItems);
    setActiveItemIndex(null); // Close dropdown
  };

  const handleAddItemField = () => {
    setOrderItems([...orderItems, { name: '', quantity: 1 }]);
  };

  const handleRemoveItemField = (index: number) => {
    if (orderItems.length > 1) {
      const newItems = orderItems.filter((_, i) => i !== index);
      setOrderItems(newItems);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredItems = orderItems
      .filter(item => item.name.trim() !== '')
      .map(item => ({
        name: item.name.trim(),
        quantity: isNaN(item.quantity) || item.quantity < 1 ? 1 : item.quantity,
      }));

    if (filteredItems.length > 0 && customerName.trim() !== '') {
      onAddItem({ orderDetails: filteredItems, customerName: customerName.trim() });
      setOrderItems([{ name: '', quantity: 1 }]);
      setCustomerName('');
    }
  };

  const handleRemoveClick = (order: OrderRequest) => {
    setPendingRemoval({ id: order.id, message: t('orderRequests.removeConfirmation').replace('{name}', order.customerName) });
  };

  const renderOrderDetails = (details: OrderRequest['orderDetails']) => {
    if (typeof details === 'string') {
      return <p className="whitespace-pre-wrap">{details}</p>;
    }
    if (Array.isArray(details)) {
      if (details.length === 0) return null;
      const firstItem = details[0];
      if (typeof firstItem === 'object' && firstItem !== null && 'name' in firstItem && 'quantity' in firstItem) {
        return (
          <ul className="list-none space-y-1">
            {(details as OrderItem[]).map((item, index) => {
               const stockItem = inventory.find(invItem => invItem.name.toLowerCase() === item.name.toLowerCase());
               const isAvailable = stockItem && stockItem.quantity >= item.quantity;
              return (
              <li key={index} className="flex items-center">
                <span className={`w-2.5 h-2.5 rounded-full mr-2.5 flex-shrink-0 ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`} title={isAvailable ? 'In Stock' : 'Out of Stock'}></span>
                {item.name}{' '}
                <span className="text-gray-500 dark:text-gray-400">({item.quantity}x)</span>
              </li>
            )})}
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

  const sortedInventory = useMemo(() => [...inventory].sort((a, b) => a.name.localeCompare(b.name)), [inventory]);
  const filteredRequests = useMemo(() => {
    const normalizedSearch = requestSearch.trim().toLowerCase();
    return items.filter(order => {
      const details = typeof order.orderDetails === 'string'
        ? order.orderDetails
        : Array.isArray(order.orderDetails)
          ? order.orderDetails.map(detail => typeof detail === 'string' ? detail : detail.name).join(' ')
          : '';
      const matchesSearch = !normalizedSearch
        || order.customerName.toLowerCase().includes(normalizedSearch)
        || details.toLowerCase().includes(normalizedSearch);
      const orderItems = Array.isArray(order.orderDetails) && order.orderDetails.length > 0 && typeof order.orderDetails[0] === 'object'
        ? order.orderDetails as OrderItem[]
        : [];
      const isFulfillable = orderItems.length > 0 && orderItems.every(item => {
        const stockItem = inventory.find(inv => inv.name.toLowerCase() === item.name.toLowerCase());
        return stockItem && stockItem.quantity >= item.quantity;
      });
      const matchesStatus = requestStatus === 'all'
        || (requestStatus === 'ready' && isFulfillable)
        || (requestStatus === 'backorder' && !isFulfillable);
      return matchesSearch && matchesStatus;
    });
  }, [items, inventory, requestSearch, requestStatus]);

  const totalPages = Math.max(1, Math.ceil(filteredRequests.length / pageSize));
  const paginatedRequests = filteredRequests.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [requestSearch, requestStatus, filteredRequests.length]);

  useEffect(() => {
    setCurrentPage(page => Math.min(page, totalPages));
  }, [totalPages]);

  return (
    <div className="space-y-6">
      {pendingRemoval && <ConfirmDialog message={pendingRemoval.message} onCancel={() => setPendingRemoval(null)} onConfirm={() => { onRemoveItem(pendingRemoval.id); setPendingRemoval(null); }} />}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{t('orderRequests.title')}</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('orderRequests.emptyHint')}</p>
        </div>
        <span className="hidden rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200 sm:inline-flex">
          {formatNumber(items.length, language)}
        </span>
      </div>

      <div className="overflow-visible rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200/80 dark:bg-slate-800 dark:ring-slate-700/80 sm:p-7">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
            <PlusIcon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('orderRequests.logNew')}</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="order-customer" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('orderRequests.customerName')}</label>
              <input type="text" id="order-customer" value={customerName} onChange={e => setCustomerName(e.target.value)} required className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-slate-700 dark:text-white sm:text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('orderRequests.requestedItems')}</label>
              <div className="mt-3 space-y-3">
                {orderItems.map((item, index) => {
                  const filteredInventory = item.name
                    ? sortedInventory.filter(invItem => 
                        invItem.name.toLowerCase().includes(item.name.toLowerCase())
                      )
                    : sortedInventory;

                  const inventoryItem = inventory.find(
                    (inv) => inv.name.toLowerCase() === item.name.toLowerCase()
                  );

                  return (
                    <div key={index} className="grid items-start gap-3 sm:grid-cols-[minmax(0,1fr)_auto_auto]">
                      <div className="relative flex-grow">
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => {
                            handleItemChange(index, 'name', e.target.value);
                            if (activeItemIndex !== index) {
                              setActiveItemIndex(index);
                            }
                          }}
                          onFocus={() => setActiveItemIndex(index)}
                          onBlur={() => setTimeout(() => setActiveItemIndex(null), 200)}
                          required
                          placeholder={t('orderRequests.searchItem')}
                          autoComplete="off"
                          className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-slate-700 dark:text-white sm:text-sm"
                        />
                        {activeItemIndex === index && item.name.length > 0 && (
                          <div className="absolute z-20 mt-2 max-h-60 w-full overflow-y-auto rounded-xl border border-gray-200 bg-white p-1 shadow-xl shadow-slate-900/10 dark:border-slate-600 dark:bg-slate-800 dark:shadow-black/25">
                            <ul className="py-1" role="listbox">
                              {filteredInventory.length > 0 ? (
                                filteredInventory.map((invItem) => (
                                  <li
                                    key={invItem.id}
                                    onMouseDown={() => handleSelectItem(index, invItem.name)}
                                    className="flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-amber-50 dark:text-gray-200 dark:hover:bg-amber-900/30"
                                    role="option"
                                    aria-selected={item.name === invItem.name}
                                  >
                                    <span>{invItem.name}</span>
                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                                      invItem.quantity > 0 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                    }`}>
                                      {formatNumber(invItem.quantity, language)} {t('orderRequests.inStock')}
                                    </span>
                                  </li>
                                ))
                              ) : (
                                <li className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400 italic">{t('orderRequests.noItemsFound')}</li>
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="flex items-start gap-2">
                           <div className="flex flex-col">
                             <input
                              type="number"
                              value={item.quantity || ''}
                              onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                              min="1"
                              required
                              placeholder={t('orderRequests.quantity')}
                              className="block w-24 rounded-xl border-gray-300 bg-gray-50 px-3 py-3 text-center text-gray-900 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-slate-700 dark:text-white sm:text-sm"
                            />
                            {inventoryItem != null && (
                              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 pl-1">
                                {formatNumber(inventoryItem.quantity, language)} {t('orderRequests.inStock')}
                              </span>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveItemField(index)}
                            disabled={orderItems.length <= 1}
                            className="mt-1 rounded-lg p-2 text-gray-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/50 disabled:cursor-not-allowed disabled:opacity-50"
                            aria-label={t('orderRequests.removeItem')}
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                    </div>
                  )
                })}
              </div>
              <button
                type="button"
                onClick={handleAddItemField}
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-dashed border-gray-300 bg-gray-50 px-3 py-2.5 text-sm font-medium text-gray-700 hover:border-amber-400 hover:bg-amber-50 dark:border-gray-600 dark:bg-gray-700/50 dark:text-gray-300 dark:hover:bg-amber-900/20"
              >
                <PlusIcon className="h-4 w-4" />
                {t('orderRequests.addAnother')}
              </button>
            </div>
            
            <div className="flex justify-end border-t border-gray-200 pt-5 dark:border-gray-700">
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 sm:w-auto">
                <PlusIcon className="h-5 w-5" /> {t('orderRequests.addRequest')}
              </button>
            </div>
          </form>
      </div>
      
      {items.length === 0 ? (
        <div className="rounded-2xl bg-white px-6 py-20 text-center shadow-sm ring-1 ring-gray-200/80 dark:bg-slate-800 dark:ring-slate-700/80">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-700 dark:text-slate-300">
            <ClockIcon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{t('orderRequests.noPending')}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('orderRequests.emptyHint')}</p>
        </div>
      ) : (
        <>
        <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80 sm:flex-row">
          <div className="relative min-w-0 flex-1">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input type="search" value={requestSearch} onChange={event => setRequestSearch(event.target.value)} placeholder={t('orderRequests.search')} className="w-full rounded-xl border-gray-300 bg-gray-50 py-3 pl-10 pr-4 text-sm shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          </div>
          <DropdownMenu
            value={requestStatus}
            options={[
              { value: 'all', label: t('orderRequests.allStatuses') },
              { value: 'ready', label: t('orderRequests.readyFilter') },
              { value: 'backorder', label: t('orderRequests.backorderFilter') },
            ]}
            onChange={value => setRequestStatus(value as typeof requestStatus)}
            ariaLabel={t('orderRequests.allStatuses')}
            className="min-w-52 border-amber-300 focus:ring-amber-500/30 dark:border-amber-700"
            menuClassName="min-w-52"
          />
        </div>
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80">
          <ul role="list" className="divide-y divide-gray-200/80 dark:divide-gray-700/80">
            {paginatedRequests.length > 0 ? paginatedRequests.map(order => {
              const user = getUser(order.userId);
              const orderItems = Array.isArray(order.orderDetails) && order.orderDetails.length > 0 && typeof order.orderDetails[0] === 'object'
                ? order.orderDetails as OrderItem[]
                : [];
        
              const isFulfillable = orderItems.length > 0 && orderItems.every(item => {
                  const stockItem = inventory.find(inv => inv.name.toLowerCase() === item.name.toLowerCase());
                  return stockItem && stockItem.quantity >= item.quantity;
              });

              return (
              <li key={order.id} className="px-4 py-5 transition-colors duration-200 hover:bg-gray-50/80 dark:hover:bg-gray-700/40 sm:px-6">
                <div className="grid items-start gap-4 md:grid-cols-[minmax(0,1fr)_auto]">
                    <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
                            {formatDate(order.createdAt, language)}
                          </p>
                          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${isFulfillable ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'}`}>
                            {isFulfillable ? t('orderRequests.ready') : t('orderRequests.moveToBackorder')}
                          </span>
                        </div>
                        
                        <div className="mt-3 text-sm text-gray-800 dark:text-gray-200">
                          {renderOrderDetails(order.orderDetails)}
                        </div>
                        
                        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <p>{t('orderRequests.for')} <span className="font-medium text-gray-700 dark:text-gray-300">{order.customerName}</span></p>
                            {user && (
                                <div className="flex items-center" title={`${t('orderRequests.createdBy')} ${user.name}`}>
                                    <span>{t('orderRequests.by')}</span>
                                    <div className="flex items-center gap-1.5">
                                      <Avatar name={user.name} size="small"/>
                                      <span className="font-medium text-gray-700 dark:text-gray-300">{user.name}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-1 md:pt-1">
                        {!isFulfillable && orderItems.length > 0 && (
                            <button 
                                onClick={() => onMoveToBackorder(order)}
                                className="inline-flex items-center gap-2 rounded-xl bg-amber-100 px-3 py-2 text-sm font-medium text-amber-800 hover:bg-amber-200 dark:bg-amber-900/40 dark:text-amber-200 dark:hover:bg-amber-900/60 focus:outline-none focus:ring-2 focus:ring-amber-500" 
                                title={t('orderRequests.moveToBackorder')}
                            >
                                <span className="sr-only">{t('orderRequests.moveToBackorder')}</span>
                                <ClockIcon className="h-4 w-4" />
                                <span className="hidden sm:inline">{t('orderRequests.moveToBackorder')}</span>
                            </button>
                        )}
                        <button onClick={() => handleRemoveClick(order)} className="inline-flex items-center gap-2 rounded-xl p-2 text-gray-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-red-500" aria-label={`${t('orderRequests.removeOrder')} ${order.customerName}`}>
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
              </li>
            )            }) : (
              <li className="px-6 py-14 text-center text-sm text-gray-500 dark:text-gray-400">{t('orderRequests.noFilteredResults')}</li>
            )}
          </ul>
        </div>
        {filteredRequests.length > 0 && (
          <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700/80 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('orderRequests.paginationShowing')
                .replace('{from}', formatNumber((currentPage - 1) * pageSize + 1, language))
                .replace('{to}', formatNumber(Math.min(currentPage * pageSize, filteredRequests.length), language))
                .replace('{total}', formatNumber(filteredRequests.length, language))}
            </p>
            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <button
                type="button"
                onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                {t('orderRequests.paginationPrevious')}
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
                {t('orderRequests.paginationNext')}
              </button>
            </div>
          </div>
        )}
        </>
      )}
    </div>
  );
};

export default OrderRequestSection;