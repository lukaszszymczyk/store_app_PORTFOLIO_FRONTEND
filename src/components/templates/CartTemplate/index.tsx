import { CartItem } from "context/cart/cartContext";
import React from "react";
import { CartItemList } from "components/organisms/CartItemList";
import styles from "./style.module.scss";

export interface CartTemplateProps {
  cart: CartItem[];
}

export function CartTemplate({ cart }: CartTemplateProps): JSX.Element {
  return (
    <div className={styles.cartTemplate}>
      <h1>Shopping Cart</h1>
      <CartItemList cartItems={cart} />
    </div>
  );
}
