import React from "react";
import { Product } from "services/api/interfaces/Product";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: number) => void;
  changeItemQuantity: (id: number, quantity: number) => void;
}

const defaultCartContext = {
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  changeItemQuantity: () => {},
};

export const CartContext =
  React.createContext<CartContextType>(defaultCartContext);
