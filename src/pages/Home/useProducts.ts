import { Product } from "services/api/interfaces/Product";

import { useEffect, useState } from "react";
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
  const [currentPageProducts, setCurrentPageProducts] = useState<Product[]>(
    sliceProductsToCurrentPage(allProducts, INIT_PAGE_INDEX, PAGE_SIZE)
  );
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(allProducts);

  useEffect(() => {
    setCurrentPageProducts(
      sliceProductsToCurrentPage(filteredProducts, INIT_PAGE_INDEX, PAGE_SIZE)
    );
  }, [filteredProducts]);

  const filterProducts = (phrase: string) => {
    setFilteredProducts(filterProductsByPhrase(allProducts, phrase));
  };

  const clearFilters = () => {
    setFilteredProducts(allProducts);
  };

  const changeProductsPage = (pageIndex: number) => {
    setCurrentPageProducts(
      sliceProductsToCurrentPage(filteredProducts, pageIndex, PAGE_SIZE)
    );
  };

  return {
    currentPageProducts,
    searchWithFilterProps: {
      filterProducts,
      clearFilters,
    },
    pageSelectProps: {
      initPageIndex: INIT_PAGE_INDEX,
      maxPages: Math.ceil(filteredProducts.length / PAGE_SIZE),
      changeProductsPage,
    },
  };
};
