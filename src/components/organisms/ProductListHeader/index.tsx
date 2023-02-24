import React from "react";
import {
  SearchWithFilter,
  SearchWithFilterProps,
} from "components/molecules/SearchWithFilter";
import styles from "./style.module.scss";

export interface ProductListHeaderProps {
  searchWithFilterProps: SearchWithFilterProps;
}

export function ProductListHeader({
  searchWithFilterProps,
}: ProductListHeaderProps) {
  return (
    <div className={styles.productListHeader}>
      <SearchWithFilter {...searchWithFilterProps} />
    </div>
  );
}
