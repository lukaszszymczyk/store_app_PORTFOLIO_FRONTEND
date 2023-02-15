import React, { useContext } from "react";
import { useCheckoutFormSteps } from "pages/Checkout/useCheckoutFormSteps";
import { CheckoutTemplate } from "components/templates/CheckoutTemplate";
import { CartContext } from "context/cart/cartContext";

export function Checkout(): JSX.Element {
  const formStepsOutput = useCheckoutFormSteps();
  const { cart } = useContext(CartContext);

  return <CheckoutTemplate cart={cart} formStepsOutput={formStepsOutput} />;
}
