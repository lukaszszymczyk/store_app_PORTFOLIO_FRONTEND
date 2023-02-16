import { loadStripe } from "@stripe/stripe-js";
import {
  CHECKOUT_SUCCESS_PAGE_PATH,
  CHECKOUT_FAILURE_PAGE_PATH,
} from "config/constants";
import { CartItem } from "context/cart/cartContext";

interface StripeItem {
  price: string;
  quantity: number;
}

export const payForAllItemsInCart = async (cartItems: CartItem[]) => {
  try {
    const {
      REACT_APP_STRIPE_PUBLISHABLE_KEY = "",
      REACT_APP_STRIPE_PRICE_IDS = "",
    } = process.env;

    const stripePriceIds = REACT_APP_STRIPE_PRICE_IDS.split(", ");
    const stripe = await loadStripe(REACT_APP_STRIPE_PUBLISHABLE_KEY);
    if (!stripe) throw new Error("Cannot load stripe payment");

    const lineItems = cartItems.reduce((acc, cartItem, index) => {
      if (!stripePriceIds[index]) {
        return acc;
      }
      return [
        ...acc,
        {
          price: stripePriceIds[index],
          quantity: cartItem.quantity,
        },
      ];
    }, [] as StripeItem[]);

    await stripe.redirectToCheckout({
      lineItems,
      mode: "payment",
      successUrl: `${CHECKOUT_SUCCESS_PAGE_PATH}`,
      cancelUrl: `${CHECKOUT_FAILURE_PAGE_PATH}`,
    });
  } catch (err) {
    console.error(err);
  }
};
