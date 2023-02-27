import { Product } from "types/product";
import { useRequestCreator } from "services/api/requestCreator/useRequestCreator";
import { HttpMethodType } from "services/api/requestCreator/interfaces";
import { ALL_PRODUCTS_API_PATH } from "services/api/apiPaths";
import { useEffect } from "react";

export interface UseFetchProductsOutput {
  products: Product[] | null;
  isLoading: boolean;
  errorMessage: string;
}

export const useFetchProducts = (): UseFetchProductsOutput => {
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
    errorMessage,
    isLoading,
  };
};
