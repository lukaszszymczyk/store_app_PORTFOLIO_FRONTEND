import toast from "react-hot-toast";

const ADD_TO_CART_MESSAGE = "Product added to cart";
const REMOVE_ITEM_FROM_CART_MESSAGE = "Product removed from cart";

export const showAddToCartToast = () => {
  toast(ADD_TO_CART_MESSAGE);
};

export const showRemoveItemFromCartToast = () => {
  toast(REMOVE_ITEM_FROM_CART_MESSAGE);
};
