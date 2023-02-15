import React from "react";
import { useProduct } from "pages/Product/useProduct";
import { useParams } from "react-router";
import { ProductTemplate } from "components/templates/ProductTemplate";
import { Message } from "components/molecules/Message";
import { Spinner } from "components/atoms/Spinner";

export function Product(): JSX.Element {
  const { id = "" } = useParams();
  const { product, isLoading, errorMessage } = useProduct(id);

  if (!product) {
    if (errorMessage) return <Message type="error" text={errorMessage} />;
    return <Spinner isLoading={isLoading} />;
  }
  return <ProductTemplate product={product} />;
}
