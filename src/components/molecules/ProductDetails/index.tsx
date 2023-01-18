import React from "react";
import { Product } from "services/api/interfaces/Product";
import styles from "./style.module.scss";

export interface ProductComponentsProps {
  product: Product;
}

export function ProductDetails({
  product,
}: ProductComponentsProps): JSX.Element {
  const { title, price, description, category, image } = product;
  return (
    <div className={styles.product}>
      <img src={image} alt="product" />
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
      <p>{category}</p>
    </div>
  );
}

// TODO: poprawic stylowanie, nazewnictwo komponentów
