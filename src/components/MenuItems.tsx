import React from 'react';
import { MenuItem } from '../types';
import { useOrder } from '../contexts/OrderContext';
import { PlusCircle } from 'lucide-react';

interface MenuItemsProps {
  items: MenuItem[];
  category: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({ items, category }) => {
  const { addToOrder } = useOrder();
  const filteredItems = items.filter(item => item.category === category);

  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                <span className="font-bold text-red-700">${item.price.toFixed(2)}</span>
              </div>
              
              {item.description && (
                <p className="text-gray-600 text-sm mt-1 mb-3">{item.description}</p>
              )}
              
              <button 
                onClick={() => addToOrder(item)}
                className="mt-2 flex items-center space-x-1 text-sm bg-red-700 text-white px-3 py-1 rounded hover:bg-red-800 transition-colors"
              >
                <PlusCircle size={16} />
                <span>Add to Order</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No items available in this category.
        </div>
      )}
    </div>
  );
};

export default MenuItems;