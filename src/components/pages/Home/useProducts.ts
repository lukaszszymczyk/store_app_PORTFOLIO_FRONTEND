import { Product } from "services/api/interfaces/Product";
import { useRequestCreator } from "services/api/request/useRequestCreator";
import { HttpMethodType } from "services/api/request/interfaces";
import { ALL_PRODUCTS_API_PATH } from "services/api/apiPaths";
import { useEffect } from "react";

export interface UseProductsOutput {
  products: Product[] | null;
  isLoading: boolean;
  errorMessage: string;
}

export const useProducts = (): UseProductsOutput => {
  const [
    { result: products, isLoading, errorMessage },
    { request: getAllProducts },
  ] = useRequestCreator<Product[]>({
    path: ALL_PRODUCTS_API_PATH,
    methodType: HttpMethodType.GET,
  });

  useEffect(() => {
    getAllProducts();
  }, []);

  return {
    products,
    isLoading,
    errorMessage,
  };
};
