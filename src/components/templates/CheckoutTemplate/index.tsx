import { CartItem } from "context/cart/cartContext";
import React from "react";
import { PurchaseForm } from "components/organisms/PurchaseForm";
import { useCheckoutFormSteps } from "pages/Checkout/useCheckoutFormSteps";
import styles from "components/templates/CartTemplate/style.module.scss";

export interface CheckoutTemplateProps {
  cart: CartItem[];
}

export function CheckoutTemplate({ cart }: CheckoutTemplateProps): JSX.Element {
  const formStepsOutput = useCheckoutFormSteps();

  return (
    <div className={styles.cartTemplate}>
      <PurchaseForm cart={cart} formStepsOutput={formStepsOutput} />
    </div>
  );
}
