import React from "react";
import { Product } from "types/product";
import { ProductList } from "components/organisms/ProductList/ProductList";
import { ProductListHeader } from "components/organisms/ProductListHeader/ProductListHeader";
import { useProducts } from "services/features/products/useProducts";
import styles from "./style.module.scss";
import { ProductFilters } from "components/organisms/ProductFilters/ProductFilters";

export interface HomeTemplateProps {
  allProducts: Product[];
}

export function HomeTemplate({ allProducts }: HomeTemplateProps): JSX.Element {
  const {
    currentPageProducts,
    filterSettings,
    selectedFilters,
    searchProducts,
    pageSelectProps,
  } = useProducts(allProducts);

  return (
    <div className={styles.homeTemplate}>
      <ProductListHeader
        selectedFilters={selectedFilters}
        onSearchProducts={searchProducts}
      />
      <div className={styles.homeTemplateContent}>
        <ProductFilters
          filterSettings={filterSettings}
          selectedFilters={selectedFilters}
          onSearchProducts={searchProducts}
        />
        <ProductList
          pageSelectProps={pageSelectProps}
          products={currentPageProducts}
        />
      </div>
    </div>
  );
}
