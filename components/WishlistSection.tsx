import React, { useState, useMemo } from 'react';
import { OrderRequest, User, OrderItem, InventoryItem } from '../types';
import { PlusIcon, TrashIcon, MinusIcon, ClockIcon } from './icons';
import Avatar from './Avatar';

interface OrderRequestSectionProps {
  items: OrderRequest[];
  users: User[];
  inventory: InventoryItem[];
  onAddItem: (order: Omit<OrderRequest, 'id' | 'userId' | 'createdAt'>) => void;
  onRemoveItem: (orderId: string) => void;
  onMoveToBackorder: (order: OrderRequest) => void;
}

const OrderRequestSection: React.FC<OrderRequestSectionProps> = ({ items, users, inventory, onAddItem, onRemoveItem, onMoveToBackorder }) => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([{ name: '', quantity: 1 }]);
  const [customerName, setCustomerName] = useState('');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

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
    if (window.confirm(`Are you sure you want to remove the order request for "${order.customerName}"? This action cannot be undone.`)) {
        onRemoveItem(order.id);
    }
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

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Pending Order Requests</h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Log a New Request</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="order-customer" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Customer Name</label>
              <input type="text" id="order-customer" value={customerName} onChange={e => setCustomerName(e.target.value)} required className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Requested Items</label>
              <div className="space-y-2 mt-1">
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
                    <div key={index} className="flex items-start space-x-2">
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
                          placeholder="Search or type item name..."
                          autoComplete="off"
                          className="block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                        />
                        {activeItemIndex === index && item.name.length > 0 && (
                          <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-y-auto">
                            <ul className="py-1" role="listbox">
                              {filteredInventory.length > 0 ? (
                                filteredInventory.map((invItem) => (
                                  <li
                                    key={invItem.id}
                                    onMouseDown={() => handleSelectItem(index, invItem.name)}
                                    className="flex justify-between items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-amber-100 dark:hover:bg-amber-800/50 cursor-pointer"
                                    role="option"
                                    aria-selected={item.name === invItem.name}
                                  >
                                    <span>{invItem.name}</span>
                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                                      invItem.quantity > 0 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                    }`}>
                                      {invItem.quantity} in stock
                                    </span>
                                  </li>
                                ))
                              ) : (
                                <li className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400 italic">No items found. You can still add it.</li>
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        <div className="flex items-center space-x-2">
                           <div className="flex flex-col">
                             <input
                              type="number"
                              value={item.quantity || ''}
                              onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                              min="1"
                              required
                              placeholder="Qty"
                              className="block w-20 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                            />
                            {inventoryItem != null && (
                              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 pl-1">
                                {inventoryItem.quantity} in stock
                              </span>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveItemField(index)}
                            disabled={orderItems.length <= 1}
                            className="p-2 self-center rounded-full text-gray-400 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/50 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Remove item"
                          >
                            <MinusIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <button
                type="button"
                onClick={handleAddItemField}
                className="mt-2 inline-flex items-center px-3 py-1.5 border border-dashed border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <PlusIcon className="w-4 h-4 mr-2" />
                Add another item
              </button>
            </div>
            
            <div className="flex justify-end">
              <button type="submit" className="w-full sm:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                <PlusIcon className="w-5 h-5 mr-2" /> Add Request
              </button>
            </div>
          </form>
      </div>
      
      {items.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">No pending requests.</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Log uncompleted orders or customer requests here.</p>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {items.map(order => {
              const user = getUser(order.userId);
              const orderItems = Array.isArray(order.orderDetails) && order.orderDetails.length > 0 && typeof order.orderDetails[0] === 'object'
                ? order.orderDetails as OrderItem[]
                : [];
        
              const isFulfillable = orderItems.length > 0 && orderItems.every(item => {
                  const stockItem = inventory.find(inv => inv.name.toLowerCase() === item.name.toLowerCase());
                  return stockItem && stockItem.quantity >= item.quantity;
              });

              return (
              <li key={order.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                <div className="flex items-start justify-between flex-wrap gap-2">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                            {new Date(order.createdAt).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        
                        <div className="text-base text-gray-800 dark:text-gray-200 mt-2">
                          {renderOrderDetails(order.orderDetails)}
                        </div>
                        
                        <div className="flex items-center flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-500 dark:text-gray-400">
                            <p>For: <span className="font-medium text-gray-700 dark:text-gray-300">{order.customerName}</span></p>
                            {user && (
                                <div className="flex items-center" title={`Created by ${user.name}`}>
                                    <span>By:</span>
                                    <div className="ml-1.5 flex items-center">
                                      <Avatar name={user.name} size="small"/>
                                      <span className="ml-1.5 font-medium text-gray-700 dark:text-gray-300">{user.name}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex-shrink-0 ml-4 flex items-center space-x-1">
                        {!isFulfillable && orderItems.length > 0 && (
                            <button 
                                onClick={() => onMoveToBackorder(order)}
                                className="p-2 rounded-full text-gray-400 hover:text-yellow-600 hover:bg-yellow-100 dark:hover:bg-yellow-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-gray-800 focus:ring-yellow-500" 
                                title="Move to Backorder"
                            >
                                <span className="sr-only">Move to Backorder</span>
                                <ClockIcon className="h-5 w-5" />
                            </button>
                        )}
                        <button onClick={() => handleRemoveClick(order)} className="p-2 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-gray-800 focus:ring-red-500" aria-label={`Remove order for ${order.customerName}`}>
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
              </li>
            )})}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderRequestSection;