import { CartDetails } from "context/cart/cartContext";
import React from "react";
import { CheckoutForm } from "components/organisms/CheckoutForm";
import { useCheckoutFormSteps } from "pages/Checkout/useCheckoutFormSteps";
import styles from "./style.module.scss";

export interface CheckoutTemplateProps {
  cartDetails: CartDetails;
}

export function CheckoutTemplate({
  cartDetails,
}: CheckoutTemplateProps): JSX.Element {
  const formStepsOutput = useCheckoutFormSteps();

  return (
    <div className={styles.checkoutTemplate}>
      <CheckoutForm
        cartDetails={cartDetails}
        formStepsOutput={formStepsOutput}
      />
    </div>
  );
}
