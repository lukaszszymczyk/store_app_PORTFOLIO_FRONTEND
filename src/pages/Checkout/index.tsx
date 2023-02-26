import React, { useContext } from "react";
import { CheckoutTemplate } from "components/templates/CheckoutTemplate";
import { CartContext } from "context/cart/cartContext";

export function Checkout(): JSX.Element {
  const { cartDetails } = useContext(CartContext);

  return <CheckoutTemplate cartDetails={cartDetails} />;
}
