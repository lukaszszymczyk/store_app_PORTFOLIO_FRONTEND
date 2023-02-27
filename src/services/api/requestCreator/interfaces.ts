export const enum HttpStatus {
  OK = 200,
}

export enum HttpMethodType {
  GET,
  POST,
  PUT,
  DELETE,
}

export interface RequestParams {
  path: string;
  methodType: HttpMethodType;
  pathParams?: Record<string, string>;
}

export interface Response<T> {
  data: T | null;
  errorMessage: string;
}

export interface UseRequestCreatorState<ResponseDataType> {
  result: ResponseDataType | null;
  isLoading: boolean;
  errorMessage: string;
}

export interface UseRequestCreatorActions {
  request: () => void;
}
