import React from "react";
import {
  FilterCategory,
} from "components/molecules/FilterCategory/FilterCategory";
import { Filters, FilterSettings } from "types/product";
import { SearchProductsParams } from "services/features/products/useProducts";

export interface ProductFiltersProps {
  filterSettings: FilterSettings;
  selectedFilters: Filters;
  onSearchProducts: (params: SearchProductsParams) => void;
}

export function ProductFilters({
  filterSettings,
  selectedFilters,
  onSearchProducts,
}: ProductFiltersProps): JSX.Element {
  return (
    <div>
      <FilterCategory
        filterSettings={filterSettings}
        selectedFilters={selectedFilters}
        onSearchProducts={onSearchProducts}
      />
    </div>
  );
}
