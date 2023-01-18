import { API_URL } from "config/constants";
import axios from "axios";
import {
  HttpStatus,
  RequestParams,
  Response,
} from "services/api/interfaces/request";

export const request = async <ResponseDataType>({
  path,
  methodType,
}: RequestParams): Promise<Response<ResponseDataType>> => {
  const url = `${API_URL}${path}`;

  try {
    let response;
    switch (methodType) {
      default:
        response = await axios.get<
          any,
          { data: ResponseDataType; status: number }
        >(url);
        break;
    }

    if (response?.status !== HttpStatus.OK)
      throw new Error(`Request: ${url} failed`);
    return {
      data: response.data,
      errorMessage: "",
    };
  } catch (err) {
    console.error(err);
    return {
      data: null,
      errorMessage: (err as { message: string }).message,
    };
  }
};
