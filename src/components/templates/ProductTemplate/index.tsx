import React from "react";
import { Product } from "services/api/interfaces/Product";
import { ProductDetails } from "components/organisms/ProductDetails";

export interface ProductTemplateProps {
  product: Product;
}

export function ProductTemplate({
  product,
}: ProductTemplateProps): JSX.Element {
  return <ProductDetails product={product} />;
}
