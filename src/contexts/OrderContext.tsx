import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem, OrderItem } from '../types';

interface OrderContextType {
  orderItems: OrderItem[];
  addToOrder: (item: MenuItem) => void;
  removeFromOrder: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearOrder: () => void;
  subtotal: number;
  tax: number;
  total: number;
}

const TAX_RATE = 0.1; // 10% tax rate

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const addToOrder = (item: MenuItem) => {
    setOrderItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      
      if (existingItem) {
        return prevItems.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromOrder = (itemId: string) => {
    setOrderItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromOrder(itemId);
      return;
    }
    
    setOrderItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearOrder = () => {
    setOrderItems([]);
  };

  // Calculate totals
  const subtotal = orderItems.reduce(
    (sum, item) => sum + (item.price * item.quantity), 
    0
  );
  
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <OrderContext.Provider 
      value={{ 
        orderItems, 
        addToOrder, 
        removeFromOrder, 
        updateQuantity, 
        clearOrder,
        subtotal,
        tax,
        total
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};