import React, { useContext } from "react";
import { CartTemplate } from "components/templates/CartTemplate";
import { CartContext } from "context/cart/cartContext";

export function Cart(): JSX.Element {
  const { cartDetails } = useContext(CartContext);

  return <CartTemplate cartDetails={cartDetails} />;
}
