import React from "react";
import {
  SearchWithFilter,
  SearchWithFilterProps,
} from "components/molecules/SearchWithFilter/SearchWithFilter";
import styles from "components/organisms/ProductListHeader/style.module.scss";
import { Filters } from "types/product";

export interface ProductListHeaderProps {
  selectedFilters: Filters;
  onSearchProducts: (params: { phrase?: string; filters?: Filters }) => void;
}

export function ProductListHeader({
  selectedFilters,
  onSearchProducts,
}: ProductListHeaderProps): JSX.Element {
  return (
    <div className={styles.productListHeader}>
      <SearchWithFilter onSearchProducts={onSearchProducts} />
    </div>
  );
}
