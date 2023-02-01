import React from "react";
import { ProductListRow } from "components/molecules/ProductListRow";
import { Product } from "services/api/interfaces/Product";

export interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <>
      {products.map((product) => (
        <ProductListRow key={product.id} product={product} />
      ))}
    </>
  );
}
