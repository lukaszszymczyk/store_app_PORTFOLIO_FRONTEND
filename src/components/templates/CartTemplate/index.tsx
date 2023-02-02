import { CartItem } from "context/cart/cartContext";
import React from "react";
import { CartItemList } from "components/organisms/CartItemList";
import { Button } from "components/atoms/Button";
import { useNavigate } from "react-router";
import { HOME_PAGE_PATH, PAYMENT_PAGE_PATH } from "config/constants";
import styles from "./style.module.scss";

export interface CartTemplateProps {
  cart: CartItem[];
}

export function CartTemplate({ cart }: CartTemplateProps): JSX.Element {
  const navigate = useNavigate();

  const handleNavigateToPath = (path: string) => {
    navigate(path);
  };

  // 1 - 2 - 3 - 4

  return (
    <div className={styles.cartTemplate}>
      <h1>Shopping Cart</h1>
      <CartItemList cartItems={cart} />
      <Button
        text="Continue shopping"
        onClick={() => handleNavigateToPath(HOME_PAGE_PATH)}
        variant="secondary"
      />
      <Button
        text="Pay with card"
        onClick={() => handleNavigateToPath(PAYMENT_PAGE_PATH)}
      />
    </div>
  );
}
