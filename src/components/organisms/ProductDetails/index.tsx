import React, { useContext } from "react";
import { Product } from "services/api/interfaces/Product";
import { Button } from "components/atoms/Button";
import { CartContext } from "context/cart/cartContext";
import styles from "./style.module.scss";

export interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const { title, price, description, category, image } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart({ ...product, quantity: 1 });
  };

  return (
    <div className={styles.productDetails}>
      <img className={styles.productDetailsImage} src={image} alt="product" />
      <div className={styles.productDetailsInfo}>
        <div className={styles.productDetailsInfoHeader}>
          <p className={styles.productDetailsInfoHeaderTitle}>{title}</p>
          <p>{category}</p>
          <p>{price}</p>
          <Button text="Add to cart" onClick={handleAddToCart} />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
