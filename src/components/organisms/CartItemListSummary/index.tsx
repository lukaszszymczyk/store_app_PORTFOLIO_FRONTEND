import React from "react";
import { Button } from "components/atoms/Button";
import { CHECKOUT_PAGE_PATH, HOME_PAGE_PATH } from "config/constants";
import { useNavigate } from "react-router";
import styles from "./style.module.scss";

export interface CartItemListSummaryProps {
  totalPrice: number;
}

export function CartItemListSummary({ totalPrice }: CartItemListSummaryProps) {
  const navigate = useNavigate();

  const handleNavigateToPath = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.cartItemListSummary}>
      <div className={styles.cartItemListSummaryPrice}>
        <h3>Total price:</h3>
        <h3 className={styles.cartItemListSummaryPriceValue}>
          {totalPrice} zł
        </h3>
      </div>
      <Button
        text="Continue shopping"
        onClick={() => handleNavigateToPath(HOME_PAGE_PATH)}
        variant="secondary"
        className={styles.cartItemListSummaryButton}
      />
      <Button
        text="Checkout"
        onClick={() => handleNavigateToPath(CHECKOUT_PAGE_PATH)}
        className={styles.cartItemListSummaryButton}
      />
    </div>
  );
}
