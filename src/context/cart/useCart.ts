import { useReducer } from "react";
import { CartContextType, CartItem } from "context/cart/cartContext";

interface CartActionType {
  type: string;
}

interface AddItemActionType extends CartActionType {
  payload: CartItem;
}

interface RemoveItemActionType extends CartActionType {
  payload: {
    id: number;
  };
}

interface ChangeItemQuantityActionType extends CartActionType {
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
    return;
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
        quantity: quantity,
      };
    }
    return cartItem;
  });
};

const cartReducer = (
  prevState: CartItem[] = [],
  action:
    | AddItemActionType
    | RemoveItemActionType
    | ChangeItemQuantityActionType
) => {
  switch (action.type) {
    case "addItem":
      return addItemAction(prevState, action.payload as CartItem);
    case "removeItem":
      return removeItemAction(prevState, action.payload as { id: number });
    case "changeItemQuantity":
      return changeItemQuantityAction(
        prevState,
        action.payload as { id: number; quantity: number }
      );
  }
};

export const useCart = (): CartContextType => {
  const [cart = [], dispatch] = useReducer(cartReducer, []);

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
    cart,
    addItemToCart,
    removeItemFromCart,
    changeItemQuantity,
  };
};
