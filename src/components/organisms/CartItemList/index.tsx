import React from "react";
import { CartItem } from "contexts/cart/cartContext";
import { CartItemRow } from "components/molecules/CartItemRow";
import styles from "./style.module.scss";

export interface CartItemListProps {
  cartItems: CartItem[];
}

export function CartItemList({ cartItems }: CartItemListProps) {
  return (
    <div className={styles.cartItemList}>
      {cartItems.map((item) => (
        <CartItemRow key={item.id} cartItem={item} />
      ))}
    </div>
  );
}
