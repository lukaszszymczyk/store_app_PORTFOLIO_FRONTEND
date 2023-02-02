import React from "react";
import { CartItem } from "context/cart/cartContext";
import { CartItemRow } from "components/molecules/CartItemRow";

export interface CartItemListProps {
  cartItems: CartItem[];
}

export function CartItemList({ cartItems }: CartItemListProps) {
  return (
    <>
      {cartItems.map((item) => (
        <CartItemRow key={item.id} cartItem={item} />
      ))}
    </>
  );
}
