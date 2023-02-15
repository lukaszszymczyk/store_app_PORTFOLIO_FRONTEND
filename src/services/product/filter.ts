import { Product } from "services/api/interfaces/Product";

const isPhraseIncluded = (product: Product, searchPhrase: string): boolean => {
  return product.title.toLowerCase().includes(searchPhrase.toLowerCase());
};

export const filterProductsByPhrase = (
  products: Product[],
  searchPhrase: string
): Product[] => {
  return products.filter((product) => isPhraseIncluded(product, searchPhrase));
};

export const sliceProductsToCurrentPage = (
  products: Product[],
  pageNumber: number,
  pageSize: number
): Product[] => {
  const el = products.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  return el;
};
