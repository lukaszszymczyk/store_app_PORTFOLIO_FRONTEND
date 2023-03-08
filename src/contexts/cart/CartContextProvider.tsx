import React from "react";
import { useCart } from "contexts/cart/useCart";
import { CartContext } from "contexts/cart/cartContext";

export interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const cartOutput = useCart();

  return (
    <CartContext.Provider value={cartOutput}>{children}</CartContext.Provider>
  );
}
