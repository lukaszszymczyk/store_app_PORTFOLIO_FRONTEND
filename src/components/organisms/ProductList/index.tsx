import React from "react";
import { ProductListRow } from "components/molecules/ProductListRow";
import { Product } from "services/api/interfaces/Product";
import styles from "./style.module.scss";

export interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductListRow key={product.id} product={product} />
      ))}
    </div>
  );
}
