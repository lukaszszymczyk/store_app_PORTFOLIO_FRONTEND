import React from "react";
import {
  SearchWithFilter,
  SearchWithFilterProps,
} from "components/molecules/SearchWithFilter/SearchWithFilter";
import styles from "components/organisms/ProductListHeader/style.module.scss";

export interface ProductListHeaderProps {
  searchWithFilterProps: SearchWithFilterProps;
}

export function ProductListHeader({
  searchWithFilterProps,
}: ProductListHeaderProps): JSX.Element {
  return (
    <div className={styles.productListHeader}>
      <SearchWithFilter {...searchWithFilterProps} />
    </div>
  );
}
