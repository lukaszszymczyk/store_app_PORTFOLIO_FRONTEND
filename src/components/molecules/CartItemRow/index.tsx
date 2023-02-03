import React, { useContext } from "react";
import { CartContext, CartItem } from "context/cart/cartContext";
import { ProductCard } from "components/atoms/ProductCard";
import { Button } from "components/atoms/Button";
import { NumberInput } from "components/atoms/NumberInput";
import styles from "./style.module.scss";

export interface CartItemRowProps {
  cartItem: CartItem;
}

export function CartItemRow({ cartItem }: CartItemRowProps): JSX.Element {
  const { quantity, ...productProperties } = cartItem;
  const product = { ...productProperties };

  const { removeItemFromCart, changeItemQuantity } = useContext(CartContext);

  const handleChangeQuantity = (value: number) => {
    changeItemQuantity(product.id, value);
  };

  const handleRemoveFromCart = () => {
    removeItemFromCart(product.id);
  };

  return (
    <div id="cart-item-row" className={styles.cartItemRow}>
      <ProductCard product={product} />
      <NumberInput value={quantity} onChange={handleChangeQuantity} />
      <div className={styles.cartItemRowActions}>
        <Button text="Remove from cart" onClick={handleRemoveFromCart} />
      </div>
    </div>
  );
}
