import { Product } from "types/product";
import { useRequestCreator } from "services/api/requestCreator/useRequestCreator";
import { HttpMethodType } from "services/api/requestCreator/interfaces";
import { GET_PRODUCT_API_PATH } from "services/api/apiPaths";
import { useEffect } from "react";

export interface UseProductOutput {
  product: Product | null;
  isLoading: boolean;
  errorMessage: string;
}

export const useFetchProduct = (id: string): UseProductOutput => {
  const [
    { result: product, isLoading, errorMessage },
    { request: getProduct },
  ] = useRequestCreator<Product>({
    path: GET_PRODUCT_API_PATH(id),
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
