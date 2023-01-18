import React from "react";
import { Product } from "services/api/interfaces/Product";

export interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const { title, price, description, category, image } = product;
  return (
    <>
      <img src={image} alt="product" />
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
      <p>{category}</p>
    </>
  );
}
