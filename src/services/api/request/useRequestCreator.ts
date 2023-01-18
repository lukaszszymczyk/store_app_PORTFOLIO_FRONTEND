import { useState } from "react";
import { request as apiRequest } from "services/api/request/request";
import { RequestParams } from "services/api/request/interfaces";

export interface UseRequestCreatorParams extends RequestParams {}

export interface UseRequestCreatorState<ResponseDataType> {
  result: ResponseDataType | null;
  isLoading: boolean;
  errorMessage: string;
}

export interface UseRequestCreatorActions {
  request: () => void;
}

export const useRequestCreator = <ResponseDataType>(
  requestParams: UseRequestCreatorParams
): [UseRequestCreatorState<ResponseDataType>, UseRequestCreatorActions] => {
  const [result, setResult] = useState<ResponseDataType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const request = async () => {
    setIsLoading(true);
    const response = await apiRequest<ResponseDataType>(requestParams);
    if (response.errorMessage !== "") {
      setErrorMessage(response.errorMessage);
      return;
    }
    setResult(response.data);
  };

  return [{ result, isLoading, errorMessage }, { request }];
};
