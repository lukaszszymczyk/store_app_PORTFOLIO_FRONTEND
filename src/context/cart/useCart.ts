import { useState } from "react";
import { CartContextType, CartItem } from "context/cart/cartContext";

export const useCart = (): CartContextType => {
  const [cart, setCart] = useState<CartItem[]>([]); // useReducer

  const addItemToCart = (item: CartItem) => {
    setCart((prev) => {
      const foundItem = prev.find((cartItem) => cartItem.id === item.id);

      if (!foundItem) {
        return [...prev, item];
      }
      return prev.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + item.quantity,
          };
        }
        return cartItem;
      });
    });
  };

  const removeItemFromCart = (id: number) => {
    setCart((prev) => {
      const itemIndex = prev.findIndex((cartItem) => cartItem.id === id);

      if (itemIndex < 0) {
        console.error("Item does not exist");
        return prev;
      }

      return prev.filter((_, index) => index !== itemIndex);
    });
  };

  const changeItemQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      console.error("Quantity cannot be less than 1");
      return;
    }
    setCart((prev) => {
      const itemIndex = prev.findIndex((cartItem) => cartItem.id === id);

      if (itemIndex < 0) {
        console.error("Item does not exist");
        return prev;
      }

      return prev.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            quantity,
          };
        }
        return cartItem;
      });
    });
  };

  return {
    cart,
    addItemToCart,
    removeItemFromCart,
    changeItemQuantity,
  };
};
