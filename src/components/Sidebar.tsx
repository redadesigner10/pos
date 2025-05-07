import React from 'react';
import { Category } from '../types';
import { 
  Coffee, Utensils, ChefHat, Salad, Wheat, Soup, 
  LogOut, User as UserIcon
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  categories: Category[];
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryClick 
}) => {
  const { user, logout } = useAuth();

  // Map category icon names to Lucide React components
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'utensils': return <Utensils size={20} />;
      case 'chef-hat': return <ChefHat size={20} />;
      case 'salad': return <Salad size={20} />;
      case 'wheat': return <Wheat size={20} />;
      case 'soup': return <Soup size={20} />;
      case 'coffee': return <Coffee size={20} />;
      default: return <Utensils size={20} />;
    }
  };

  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col">
      <div className="p-4 bg-gray-900">
        <h1 className="text-xl font-bold">Restaurant POS</h1>
      </div>
      
      {/* User info */}
      <div className="p-4 bg-gray-700 flex items-center space-x-2">
        <UserIcon size={20} />
        <div>
          <p className="font-medium">{user?.name || 'User'}</p>
          <p className="text-xs text-gray-300">{user?.role || 'Guest'}</p>
        </div>
      </div>
      
      {/* Category buttons */}
      <div className="flex-1 overflow-y-auto">
        <ul className="p-2 space-y-1">
          {categories.map(category => (
            <li key={category.id}>
              <button
                onClick={() => onCategoryClick(category.id)}
                className={`w-full text-left p-3 rounded flex items-center space-x-3 transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-red-700 text-white' 
                    : 'hover:bg-gray-700'
                }`}
              >
                <span className="flex-shrink-0">{getIcon(category.icon)}</span>
                <span>{category.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Logout button */}
      <div className="p-4 border-t border-gray-700">
        <button 
          onClick={logout}
          className="w-full p-2 rounded bg-gray-700 hover:bg-gray-600 flex items-center justify-center space-x-2"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;