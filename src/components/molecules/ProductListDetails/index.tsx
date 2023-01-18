import React from "react";
import { Product } from "services/api/interfaces/Product";
import { PRODUCT_PAGE } from "config/constants";
import styles from "./style.module.scss";

export interface ProductListDetailsProps {
  product: Product;
}

export function ProductListDetails({
  product,
}: ProductListDetailsProps): JSX.Element {
  const { id, title, price, description, category, image } = product;
  return (
    <div className={styles.product}>
      <a className={styles.Container} href={PRODUCT_PAGE(id.toString())}>
        <img src={image} alt="product" />
        <p>{title}</p>
        <p>{price}</p>
        <p>{description}</p>
        <p>{category}</p>
      </a>
    </div>
  );
}
