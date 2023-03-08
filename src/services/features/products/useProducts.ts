import { Product } from "types/product";
import { useState } from "react";
import {
  filterProductsByPhrase,
  sliceProductsToCurrentPage,
} from "services/features/products/utils/filter";
import { SearchWithFilterProps } from "components/molecules/SearchWithFilter/SearchWithFilter";
import { PageSelectProps } from "components/molecules/PageSelect/PageSelect";

export interface UseProductsOutput {
  currentPageProducts: Product[];
  searchWithFilterProps: SearchWithFilterProps;
  pageSelectProps: PageSelectProps;
}

export const PAGE_SIZE = 5;
export const INIT_PAGE_INDEX = 0;
const INIT_PHRASE = "";

export const useProducts = (allProducts: Product[]): UseProductsOutput => {
  const [currentPageIndex, setCurrentPageIndex] = useState(INIT_PAGE_INDEX);
  const [searchPhrase, setSearchPhrase] = useState(INIT_PHRASE);

  const filteredProducts = filterProductsByPhrase(allProducts, searchPhrase);

  const currentPageProducts = sliceProductsToCurrentPage(
    filteredProducts,
    currentPageIndex,
    PAGE_SIZE
  );

  const filterProducts = (phrase: string) => {
    setCurrentPageIndex(INIT_PAGE_INDEX);
    setSearchPhrase(phrase);
  };

  const clearFilters = () => {
    setCurrentPageIndex(INIT_PAGE_INDEX);
    setSearchPhrase(INIT_PHRASE);
  };

  const changeProductsPage = (pageIndex: number) => {
    setCurrentPageIndex(pageIndex);
  };

  return {
    currentPageProducts,
    searchWithFilterProps: {
      filterProducts,
      clearFilters,
    },
    pageSelectProps: {
      currentPageIndex,
      minPageIndex: INIT_PAGE_INDEX,
      maxPageIndex: Math.ceil(filteredProducts.length / PAGE_SIZE) - 1,
      changeProductsPage,
    },
  };
};
