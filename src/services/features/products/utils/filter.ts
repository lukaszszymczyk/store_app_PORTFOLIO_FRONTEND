import { Filters, FilterType, Product } from "types/product";

const isPhraseIncluded = (product: Product, searchPhrase: string): boolean => {
  return product.title.toLowerCase().includes(searchPhrase.toLowerCase());
};

const isIncludedInFilters = (product: Product, selectedFilters: Filters) => {
  switch (true) {
    case selectedFilters.category &&
      product.category !== selectedFilters.category:
      return false;
    case selectedFilters.minPrice && product.price < selectedFilters.minPrice:
      return false;
    case selectedFilters.maxPrice && product.price > selectedFilters.maxPrice:
      return false;
    default:
      return true;
  }
};

export const filterProducts = (
  products: Product[],
  searchPhrase: string,
  selectedFilters: Filters
): Product[] => {
  return products.filter(
    (product) =>
      isPhraseIncluded(product, searchPhrase) &&
      isIncludedInFilters(product, selectedFilters)
  );
};

export const sliceProductsToCurrentPage = (
  products: Product[],
  pageNumber: number,
  pageSize: number
): Product[] => {
  return products.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
};

export const getUniqueCategories = (allProducts: Product[]): string[] =>
  Array.from(new Set(allProducts.map((product) => product.category)).values());
