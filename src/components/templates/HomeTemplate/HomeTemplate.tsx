import React from "react";
import { Product } from "types/product";
import { ProductList } from "components/organisms/ProductList/ProductList";
import { ProductListHeader } from "components/organisms/ProductListHeader/ProductListHeader";
import { useProducts } from "services/features/products/useProducts";
import styles from "./style.module.scss";

export interface HomeTemplateProps {
  allProducts: Product[];
}

export function HomeTemplate({ allProducts }: HomeTemplateProps): JSX.Element {
  const { currentPageProducts, searchWithFilterProps, pageSelectProps } =
    useProducts(allProducts);

  return (
    <div className={styles.homeTemplate}>
      <ProductListHeader searchWithFilterProps={searchWithFilterProps} />
      <ProductList
        pageSelectProps={pageSelectProps}
        products={currentPageProducts}
      />
    </div>
  );
}
