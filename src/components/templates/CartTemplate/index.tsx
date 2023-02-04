import { CartItem } from "context/cart/cartContext";
import React from "react";
import { CartItemList } from "components/organisms/CartItemList";
import { Button } from "components/atoms/Button";
import { useNavigate } from "react-router";
import { CHECKOUT_PAGE_PATH, HOME_PAGE_PATH } from "config/constants";
import styles from "./style.module.scss";

export interface CartTemplateProps {
  cart: CartItem[];
}

export function CartTemplate({ cart }: CartTemplateProps): JSX.Element {
  const navigate = useNavigate();

  const handleNavigateToPath = (path: string) => {
    navigate(path);
  };

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
        text="Proceed to checkout"
        onClick={() => handleNavigateToPath(CHECKOUT_PAGE_PATH)}
      />
    </div>
  );
}
