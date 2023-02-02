import React from "react";
import { useProduct } from "components/pages/Product/useProduct";
import { useParams } from "react-router";
import { ProductTemplate } from "components/templates/ProductTemplate";
import { ErrorMessage } from "components/atoms/ErrorMessage";
import { Spinner } from "components/atoms/Spinner";

export function Product(): JSX.Element {
  const { id = "" } = useParams();
  const { product, isLoading, errorMessage } = useProduct(id);

  if (!product) {
    if (errorMessage) return <ErrorMessage message={errorMessage} />;
    return <Spinner isLoading={isLoading} />;
  }
  return <ProductTemplate product={product} />;
}
