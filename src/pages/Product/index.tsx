import React from "react";
import { useFetchProduct } from "services/features/products/useFetchProduct";
import { useParams } from "react-router";
import { ProductTemplate } from "components/templates/ProductTemplate";
import { Message } from "components/atoms/Message";
import { Spinner } from "components/atoms/Spinner";

export function Product(): JSX.Element {
  const { id = "" } = useParams();
  const { product, isLoading, errorMessage } = useFetchProduct(id);

  if (!product) {
    if (errorMessage) return <Message type="error" text={errorMessage} />;
    return <Spinner isLoading={isLoading} />;
  }
  return <ProductTemplate product={product} />;
}
