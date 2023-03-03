import React, { useContext } from "react";
import { CheckoutTemplate } from "components/templates/CheckoutTemplate";
import { CartContext } from "contexts/cart/cartContext";
import { PageWrapper } from "pages/PageWrapper";

export function Checkout(): JSX.Element {
  const { cartDetails } = useContext(CartContext);

  return (
    <>
      <PageWrapper title="Store App checkout" description="Checkout Store App">
        <CheckoutTemplate cartDetails={cartDetails} />
      </PageWrapper>
    </>
  );
}
