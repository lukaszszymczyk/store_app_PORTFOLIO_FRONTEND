import { useState } from "react";
import { CartContextType, CartItem } from "context/cart/cartContext";

// TODO: function with change quantity of item

export const useCart = (): CartContextType => {
  const [cart, setCart] = useState<CartItem[]>([]); // useReducer

  console.log(cart);

  const addItemToCart = (item: CartItem) => {
    setCart((prev) => {
      const foundItem = prev.find((cartItem) => cartItem.id === item.id);

      if (!foundItem) {
        const returnObject = [...prev, item];
        return returnObject;
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

  return {
    cart,
    addItemToCart,
    removeItemFromCart,
  };
};