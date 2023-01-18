import { Product } from "services/api/interfaces/Product";
import { useRequestOnInit } from "services/api/useRequestOnInit";
import { RequestMethodType } from "services/api/interfaces/request";
import { GET_ALL_PRODUCTS } from "services/api/paths";

export const useProducts = (): Product[] | null => {
  const { result } = useRequestOnInit<Product[]>({
    path: GET_ALL_PRODUCTS,
    methodType: RequestMethodType.GET,
  });

  return result;
};
