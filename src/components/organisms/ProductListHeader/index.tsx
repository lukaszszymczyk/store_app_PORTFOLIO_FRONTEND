import React, { ChangeEvent, useState } from "react";
import { PageSelect, PageSelectProps } from "components/molecules/PageSelect";
import {
  SearchWithFilter,
  SearchWithFilterProps,
} from "components/molecules/SearchWithFilter";
import styles from "./style.module.scss";

export interface ProductListHeaderProps {
  searchWithFilterProps: SearchWithFilterProps;
  pageSelectProps: PageSelectProps;
}

export function ProductListHeader({
  searchWithFilterProps,
  pageSelectProps,
}: ProductListHeaderProps) {
  return (
    <div className={styles.productListHeader}>
      <SearchWithFilter {...searchWithFilterProps} />
      <PageSelect {...pageSelectProps} />
    </div>
  );
}
