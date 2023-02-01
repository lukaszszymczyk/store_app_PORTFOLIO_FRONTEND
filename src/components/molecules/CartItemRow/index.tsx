import React from "react";
import { CartItem } from "context/cart/cartContext";
import { ProductCard } from "components/atoms/ProductCard";

export interface CartItemRowProps {
  cartItem: CartItem;
}

// TODO: quantity and remove item from cart
export function CartItemRow({ cartItem }: CartItemRowProps): JSX.Element {
  const { quantity, ...productProperties } = cartItem;
  const product = { ...productProperties };

  return (
    <>
      <ProductCard product={product} />
      <p>{quantity}</p>
    </>
  );
}
