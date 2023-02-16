import { Product } from "services/api/interfaces/Product";
import { useState } from "react";
import {
  filterProductsByPhrase,
  sliceProductsToCurrentPage,
} from "services/product/filter";
import { SearchWithFilterProps } from "components/molecules/SearchWithFilter";
import { PageSelectProps } from "components/molecules/PageSelect";

export interface UseProductsOutput {
  currentPageProducts: Product[];
  searchWithFilterProps: SearchWithFilterProps;
  pageSelectProps: PageSelectProps;
}

export const PAGE_SIZE = 5;
export const INIT_PAGE_INDEX = 0;

export const useProducts = (allProducts: Product[]): UseProductsOutput => {
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(allProducts);
  const [currentPageIndex, setCurrentPageIndex] = useState(INIT_PAGE_INDEX);

  const currentPageProducts = sliceProductsToCurrentPage(
    filteredProducts,
    currentPageIndex,
    PAGE_SIZE
  );

  const filterProducts = (phrase: string) => {
    setCurrentPageIndex(INIT_PAGE_INDEX);
    setFilteredProducts(filterProductsByPhrase(allProducts, phrase));
  };

  const clearFilters = () => {
    setCurrentPageIndex(INIT_PAGE_INDEX);
    setFilteredProducts(allProducts);
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
