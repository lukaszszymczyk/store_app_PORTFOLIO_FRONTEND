import React from "react";
import styles from "./style.module.scss";
import { Filters, FilterSettings, FilterType } from "types/product";

export interface FilterCategoryProps {
  filterSettings: FilterSettings;
  selectedFilters: Filters;
  onSearchProducts: (params: { phrase?: string; filters?: Filters }) => void;
}

export function FilterCategory({
  filterSettings,
  selectedFilters,
  onSearchProducts,
}: FilterCategoryProps): JSX.Element {
  const handleSelectCategory = (filterType: FilterType, value: string) => {
    const newFilters = { ...selectedFilters };
    newFilters[filterType] = value;

    onSearchProducts({ filters: newFilters });
  };

  return (
    <div className={styles.filterCategory}>
      <div className={styles.filterCategoryHeader}>
        <span>Category</span>
      </div>
      <div className={styles.filterCategoryList}>
        {filterSettings.categoryOptions.map((category, index) => (
          <span
            className={styles.filterCategoryListItem}
            key={index}
            onClick={() => handleSelectCategory("category", category)}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}
