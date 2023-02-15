import React from "react";
import { Product } from "services/api/interfaces/Product";
import { ProductList } from "components/organisms/ProductList";
import { ProductListHeader } from "components/organisms/ProductListHeader";
import { useProducts } from "pages/Home/useProducts";
import styles from "./style.module.scss";

export interface HomeTemplateProps {
  allProducts: Product[];
}

export function HomeTemplate({ allProducts }: HomeTemplateProps): JSX.Element {
  const { currentPageProducts, searchWithFilterProps, pageSelectProps } =
    useProducts(allProducts);

  return (
    <div className={styles.homeTemplate}>
      <ProductListHeader
        searchWithFilterProps={searchWithFilterProps}
        pageSelectProps={pageSelectProps}
      />
      <ProductList products={currentPageProducts} />
    </div>
  );
}
