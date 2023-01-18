import { Product } from "services/api/interfaces/Product";
import { useRequestCreator } from "services/api/request/useRequestCreator";
import { HttpMethodType } from "services/api/request/interfaces";
import { GET_PRODUCT } from "services/api/apiPaths";
import { useEffect } from "react";

export interface UseProductOutput {
  product: Product | null;
  isLoading: boolean;
  errorMessage: string;
}

export const useProduct = (id: string): UseProductOutput => {
  const [
    { result: product, isLoading, errorMessage },
    { request: getProduct },
  ] = useRequestCreator<Product>({
    path: GET_PRODUCT(id),
    methodType: HttpMethodType.GET,
  });

  useEffect(() => {
    getProduct();
  }, []);

  return {
    product,
    isLoading,
    errorMessage,
  };
};
