export const { REACT_APP_URL } = process.env;
export const APP_URL = "http://localhost:3000";
export const API_URL = "https://fakestoreapi.com";

export const HOME_PAGE_PATH = "/";
export const GET_PRODUCT_PAGE_PATH = (id: string) => `/products/${id}`;
export const CART_PAGE_PATH = "/cart";
export const CHECKOUT_PAGE_PATH = "/checkout";
export const CHECKOUT_SUCCESS_PAGE_PATH = `${REACT_APP_URL}/checkout/info?success=true`;
export const CHECKOUT_FAILURE_PAGE_PATH = `${REACT_APP_URL}/checkout/info?success=false`;
