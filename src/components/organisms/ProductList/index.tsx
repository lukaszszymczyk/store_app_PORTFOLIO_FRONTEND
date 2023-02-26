import React from "react";
import { ProductListRow } from "components/molecules/ProductListRow";
import { Product } from "services/api/interfaces/Product";
import styles from "components/organisms/ProductList/style.module.scss";
import { PageSelect, PageSelectProps } from "components/molecules/PageSelect";

export interface ProductListProps {
  products: Product[];
  pageSelectProps: PageSelectProps;
}

export function ProductList({ products, pageSelectProps }: ProductListProps) {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductListRow key={product.id} product={product} />
      ))}
      <PageSelect {...pageSelectProps} />
    </div>
  );
}
