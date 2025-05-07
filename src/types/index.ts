export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  image?: string;
}

export interface OrderItem extends MenuItem {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
}

export interface User {
  id: string;
  name: string;
  role: 'Staff' | 'Manager' | 'Admin';
}