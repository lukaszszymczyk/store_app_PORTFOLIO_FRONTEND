import React from "react";
import { Product } from "types/product";
import { useCart } from "contexts/cart/useCart";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartDetails {
  cartItems: CartItem[];
  allItemsQuantity: number;
  totalPrice: number;
}

export interface CartContextType {
  cartDetails: CartDetails;
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: number) => void;
  changeItemQuantity: (id: number, quantity: number) => void;
}

const defaultCartContext = {
  cartDetails: {
    cartItems: [],
    allItemsQuantity: 0,
    totalPrice: 0,
  },
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  changeItemQuantity: () => {},
};

export const CartContext =
  React.createContext<CartContextType>(defaultCartContext);
