import React from "react";
import { FilterCategory } from "components/molecules/FilterCategory/FilterCategory";
import { FilterPrice } from "components/molecules/FilterPrice/FilterPrice";
import { Filters, FilterSettings } from "types/product";

export interface ProductFiltersProps {
  filterSettings: FilterSettings;
  selectedFilters: Filters;
  onSearchProducts: (params: { phrase?: string; filters?: Filters }) => void;
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
      <FilterPrice></FilterPrice>
    </div>
  );
}
