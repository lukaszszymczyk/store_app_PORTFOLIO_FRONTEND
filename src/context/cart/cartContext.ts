import React from "react";
import { Product } from "services/api/interfaces/Product";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: number) => void;
}
// TODO: change quantity

const defaultCartContext = {
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
};

export const CartContext =
  React.createContext<CartContextType>(defaultCartContext);
