import React from "react";
import { Product } from "services/api/interfaces/Product";
import styles from "./style.module.scss";

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps): JSX.Element {
  const { title, price, description, category, image } = product;

  return (
    <div className={styles.productCard}>
      <img className={styles.productCardImage} src={image} alt="product" />
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
      <p>{category}</p>
    </div>
  );
}
