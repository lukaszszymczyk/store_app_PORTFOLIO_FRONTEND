import { useEffect, useState } from "react";
import { request } from "services/api/request";
import { RequestParams } from "services/api/interfaces/request";

export interface UseRequestOutput<T> {
  result: T | null;
  isLoading: boolean;
  errorMessage: string;
}

export const useRequestOnInit = <ResponseDataType>(
  params: RequestParams
): UseRequestOutput<ResponseDataType> => {
  const [result, setResult] = useState<ResponseDataType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    request<ResponseDataType>(params)
      .then((response) => {
        if (response.data) setResult(response.data);
      })
      .catch((response) => {
        setErrorMessage(response.errorMessage);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    result,
    isLoading,
    errorMessage,
  };
};
