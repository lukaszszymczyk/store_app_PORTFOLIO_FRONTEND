import { useReducer } from "react";
import { CartContextType, CartItem } from "contexts/cart/cartContext";

interface AddItemActionType {
  type: "addItem";
  payload: CartItem;
}

interface RemoveItemActionType {
  type: "removeItem";
  payload: {
    id: number;
  };
}

interface ChangeItemQuantityActionType {
  type: "changeItemQuantity";
  payload: {
    id: number;
    quantity: number;
  };
}

const addItemAction = (prevState: CartItem[], payload: CartItem) => {
  const foundItem = prevState.find((cartItem) => cartItem.id === payload.id);
  if (!foundItem) {
    return [...prevState, payload];
  }

  return prevState.map((cartItem) => {
    if (cartItem.id === payload.id) {
      return {
        ...cartItem,
        quantity: cartItem.quantity + payload.quantity,
      };
    }
    return cartItem;
  });
};

const removeItemAction = (prevState: CartItem[], payload: { id: number }) => {
  const itemIndex = prevState.findIndex(
    (cartItem) => cartItem.id === payload.id
  );

  if (itemIndex < 0) {
    console.error("Item does not exist");
    return prevState;
  }

  return prevState.filter((_, index) => index !== itemIndex);
};

const changeItemQuantityAction = (
  prevState: CartItem[],
  payload: { id: number; quantity: number }
) => {
  const { id, quantity } = payload;

  if (quantity < 1) {
    console.error("Quantity cannot be less than 1");
    return prevState;
  }

  const itemIndex = prevState.findIndex((cartItem) => cartItem.id === id);

  if (itemIndex < 0) {
    console.error("Item does not exist");
    return prevState;
  }

  return prevState.map((cartItem) => {
    if (cartItem.id === id) {
      return {
        ...cartItem,
        quantity,
      };
    }
    return cartItem;
  });
};

const cartReducer = (
  prevState: CartItem[],
  action:
    | AddItemActionType
    | RemoveItemActionType
    | ChangeItemQuantityActionType
): CartItem[] => {
  switch (action.type) {
    case "addItem":
      return addItemAction(prevState, action.payload);
    case "removeItem":
      return removeItemAction(prevState, action.payload);
    case "changeItemQuantity":
      return changeItemQuantityAction(prevState, action.payload);
  }
  return prevState;
};

export const useCart = (): CartContextType => {
  const [cartItems = [], dispatch] = useReducer(cartReducer, []);

  const allItemsQuantity = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const addItemToCart = (item: CartItem) =>
    dispatch({ type: "addItem", payload: item });

  const removeItemFromCart = (id: number) =>
    dispatch({ type: "removeItem", payload: { id } });

  const changeItemQuantity = (id: number, quantity: number) =>
    dispatch({
      type: "changeItemQuantity",
      payload: { id, quantity },
    });

  return {
    cartDetails: {
      cartItems,
      allItemsQuantity,
      totalPrice,
    },
    addItemToCart,
    removeItemFromCart,
    changeItemQuantity,
  };
};
