import { useState } from "react";
import { request as apiRequest } from "services/api/request/request";
import {
  RequestParams,
  UseRequestCreatorActions,
  UseRequestCreatorState,
} from "services/api/request/interfaces";

export const useRequestCreator = <ResponseDataType>(
  requestParams: RequestParams
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
    setIsLoading(false);
  };

  return [{ result, isLoading, errorMessage }, { request }];
};
