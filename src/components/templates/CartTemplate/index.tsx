import { CartDetails } from "contexts/cart/cartContext";
import React from "react";
import { CartItemList } from "components/organisms/CartItemList";
import { CartItemListSummary } from "components/organisms/CartItemListSummary";
import styles from "./style.module.scss";

export interface CartTemplateProps {
  cartDetails: CartDetails;
}

export function CartTemplate({ cartDetails }: CartTemplateProps): JSX.Element {
  return (
    <div className={styles.cartTemplate}>
      <CartItemList cartItems={cartDetails.cartItems} />
      <CartItemListSummary totalPrice={cartDetails.totalPrice} />
    </div>
  );
}
