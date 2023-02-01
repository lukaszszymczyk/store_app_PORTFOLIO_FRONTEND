import React from "react";
import { useProduct } from "components/pages/Product/useProduct";
import { useParams } from "react-router";
import { ProductTemplate } from "components/templates/ProductTemplate";

// TODO: obsluga error'ow i spinner
export function Product(): JSX.Element {
  const { id = "" } = useParams();
  const { product } = useProduct(id);

  if (!product) return <>Error</>;
  return <ProductTemplate product={product} />;
}
