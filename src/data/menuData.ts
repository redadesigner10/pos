import { MenuItem, Category } from '../types';

export const categories: Category[] = [
  { id: 'appetizers', name: 'Appetizers', icon: 'utensils' },
  { id: 'main', name: 'Main Course', icon: 'chef-hat' },
  { id: 'salad', name: 'Salad', icon: 'salad' },
  { id: 'rice', name: 'Rice', icon: 'wheat' },
  { id: 'chinese', name: 'Chinese', icon: 'soup' },
  { id: 'beverages', name: 'Beverages', icon: 'coffee' },
];

export const menuItems: MenuItem[] = [
  // Appetizers
  { 
    id: 'app1', 
    name: 'Garlic Bread', 
    price: 5.99, 
    category: 'appetizers',
    description: 'Toasted bread with garlic butter and herbs'
  },
  { 
    id: 'app2', 
    name: 'Mozzarella Sticks', 
    price: 7.99, 
    category: 'appetizers',
    description: 'Deep-fried mozzarella with marinara sauce'
  },
  { 
    id: 'app3', 
    name: 'Calamari', 
    price: 9.99, 
    category: 'appetizers',
    description: 'Crispy fried calamari with aioli sauce'
  },
  
  // Main Course
  { 
    id: 'main1', 
    name: 'Steak', 
    price: 24.99, 
    category: 'main',
    description: 'Grilled ribeye steak with vegetables'
  },
  { 
    id: 'main2', 
    name: 'Grilled Salmon', 
    price: 22.99, 
    category: 'main',
    description: 'Atlantic salmon with lemon butter sauce'
  },
  { 
    id: 'main3', 
    name: 'Chicken Parmesan', 
    price: 18.99, 
    category: 'main',
    description: 'Breaded chicken with tomato sauce and mozzarella'
  },
  
  // Salad
  { 
    id: 'salad1', 
    name: 'Caesar Salad', 
    price: 9.99, 
    category: 'salad',
    description: 'Romaine lettuce with croutons and caesar dressing'
  },
  { 
    id: 'salad2', 
    name: 'Greek Salad', 
    price: 10.99, 
    category: 'salad',
    description: 'Fresh vegetables with feta cheese and olives'
  },
  
  // Rice
  { 
    id: 'rice1', 
    name: 'Fried Rice', 
    price: 12.99, 
    category: 'rice',
    description: 'Stir-fried rice with vegetables and egg'
  },
  { 
    id: 'rice2', 
    name: 'Risotto', 
    price: 14.99, 
    category: 'rice',
    description: 'Creamy Italian rice with parmesan cheese'
  },
  
  // Chinese
  { 
    id: 'chinese1', 
    name: 'Sweet and Sour Chicken', 
    price: 15.99, 
    category: 'chinese',
    description: 'Crispy chicken with sweet and sour sauce'
  },
  { 
    id: 'chinese2', 
    name: 'Kung Pao Chicken', 
    price: 16.99, 
    category: 'chinese',
    description: 'Spicy stir-fried chicken with peanuts'
  },
  { 
    id: 'chinese3', 
    name: 'Beef with Broccoli', 
    price: 17.99, 
    category: 'chinese',
    description: 'Tender beef with broccoli in brown sauce'
  },
  
  // Beverages
  { 
    id: 'bev1', 
    name: 'Soda', 
    price: 2.99, 
    category: 'beverages',
    description: 'Assorted sodas (Coke, Sprite, etc.)'
  },
  { 
    id: 'bev2', 
    name: 'Iced Tea', 
    price: 3.99, 
    category: 'beverages',
    description: 'Freshly brewed iced tea'
  },
  { 
    id: 'bev3', 
    name: 'Coffee', 
    price: 3.99, 
    category: 'beverages',
    description: 'Regular or decaf coffee'
  },
];