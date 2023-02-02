import React, { useContext } from "react";
import { CartContext, CartItem } from "context/cart/cartContext";
import { ProductCard } from "components/atoms/ProductCard";
import { Button } from "components/atoms/Button";
import styles from "./style.module.scss";

export interface CartItemRowProps {
  cartItem: CartItem;
}

// TODO: quantity and remove item from cart
export function CartItemRow({ cartItem }: CartItemRowProps): JSX.Element {
  const { quantity, ...productProperties } = cartItem;
  const product = { ...productProperties };

  const { removeItemFromCart } = useContext(CartContext);

  const handleAddToCart = () => {
    removeItemFromCart(product.id);
  };

  return (
    <div className={styles.cartItemRow}>
      <ProductCard product={product} />
      <input value={quantity} className={styles.cartItemRowQuantity} />
      <div className={styles.cartItemRowActions}>
        <Button text="Remove from cart" onClick={handleAddToCart} />
      </div>
    </div>
  );
}
