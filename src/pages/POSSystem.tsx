import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MenuItems from '../components/MenuItems';
import OrderPanel from '../components/OrderPanel';
import { categories, menuItems } from '../data/menuData';

const POSSystem: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={setActiveCategory}
      />
      
      <MenuItems 
        items={menuItems}
        category={activeCategory}
      />
      
      <OrderPanel />
    </div>
  );
};

export default POSSystem;