import React, { useContext } from "react";
import { CartTemplate } from "components/templates/CartTemplate";
import { CartContext } from "contexts/cart/cartContext";
import { PageWrapper } from "pages/PageWrapper";

export function Cart(): JSX.Element {
  const { cartDetails } = useContext(CartContext);

  return (
    <>
      <PageWrapper title="Store App cart" description="Product cart Store App">
        <CartTemplate cartDetails={cartDetails} />
      </PageWrapper>
    </>
  );
}
