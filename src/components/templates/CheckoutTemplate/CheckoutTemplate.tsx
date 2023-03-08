import { CartDetails } from "contexts/cart/cartContext";
import React from "react";
import { CheckoutForm } from "components/organisms/CheckoutForm/CheckoutForm";
import { useCheckoutFormSteps } from "components/templates/CheckoutTemplate/useCheckoutFormSteps";
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
