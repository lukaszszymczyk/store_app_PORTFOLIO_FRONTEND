export const enum HttpStatus {
  OK = 200,
}

export enum RequestMethodType {
  GET,
  POST,
  PUT,
  DELETE,
}

// TODO: dodac dla POST'a dane do przekazania
export interface RequestParams {
  path: string;
  methodType: RequestMethodType;
}

export interface Response<T> {
  data: T | null;
  errorMessage: string;
}
