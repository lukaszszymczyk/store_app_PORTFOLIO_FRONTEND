import { Filters, FilterSettings, Product } from "types/product";
import { useState } from "react";
import {
  getUniqueCategories,
  filterProducts,
  sliceProductsToCurrentPage,
} from "services/features/products/utils/filter";
import { PageSelectProps } from "components/molecules/PageSelect/PageSelect";

export type SearchProductsParams = { phrase?: string; filters?: Filters };

export interface UseProductsOutput {
  currentPageProducts: Product[];
  filterSettings: FilterSettings;
  selectedFilters: Filters;
  searchProducts: (params: SearchProductsParams) => void;
  pageSelectProps: PageSelectProps;
}

export const PAGE_SIZE = 5;
export const INIT_PAGE_INDEX = 0;
const INIT_PHRASE = "";

export const useProducts = (allProducts: Product[]): UseProductsOutput => {
  const [currentPageIndex, setCurrentPageIndex] = useState(INIT_PAGE_INDEX);
  const [searchPhrase, setSearchPhrase] = useState(INIT_PHRASE);
  const [selectedFilters, setSelectedFilters] = useState({} as Filters);

  const filteredProducts = filterProducts(
    allProducts,
    searchPhrase,
    selectedFilters
  );
  const filterSettings: FilterSettings = {
    categoryOptions: getUniqueCategories(allProducts),
  };

  const currentPageProducts = sliceProductsToCurrentPage(
    filteredProducts,
    currentPageIndex,
    PAGE_SIZE
  );

  const searchProducts = (params: SearchProductsParams) => {
    setCurrentPageIndex(INIT_PAGE_INDEX);
    if (params.phrase) {
      setSearchPhrase(params.phrase);
    }
    if (params.filters) {
      setSelectedFilters(params.filters);
    }
  };

  const changeProductsPage = (pageIndex: number) => {
    setCurrentPageIndex(pageIndex);
  };

  return {
    currentPageProducts,
    filterSettings,
    selectedFilters,
    searchProducts,
    pageSelectProps: {
      currentPageIndex,
      minPageIndex: INIT_PAGE_INDEX,
      maxPageIndex: Math.ceil(filteredProducts.length / PAGE_SIZE) - 1,
      changeProductsPage,
    },
  };
};
