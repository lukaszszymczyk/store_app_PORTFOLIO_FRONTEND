import { CartItem } from "context/cart/cartContext";
import React from "react";
import { PurchaseForm } from "components/organisms/PurchaseForm";
import { UseFormStepsOutput } from "components/pages/Checkout/useCheckoutFormSteps";
import styles from "components/templates/CartTemplate/style.module.scss";

export interface CheckoutTemplateProps {
  cart: CartItem[];
  formStepsOutput: UseFormStepsOutput;
}

export function CheckoutTemplate({
  cart,
  formStepsOutput,
}: CheckoutTemplateProps): JSX.Element {
  return (
    <div className={styles.cartTemplate}>
      <PurchaseForm cart={cart} formStepsOutput={formStepsOutput} />
    </div>
  );
}
