export const enum HttpStatus {
  OK = 200,
}

export enum HttpMethodType {
  GET,
  POST,
  PUT,
  DELETE,
}

export interface UrlParameter {
  key: string;
  value: string;
}

// TODO: dodac dla POST'a dane do przekazania
export interface RequestParams {
  path: string;
  methodType: HttpMethodType;
  pathParams?: Record<string, string>;
}

export interface Response<T> {
  data: T | null;
  errorMessage: string;
}
