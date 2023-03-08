import React from "react";
import { Product } from "types/product";
import { ProductDetails } from "components/organisms/ProductDetails/ProductDetails";
import styles from "./style.module.scss";

export interface ProductTemplateProps {
  product: Product;
}

export function ProductTemplate({
  product,
}: ProductTemplateProps): JSX.Element {
  return (
    <div className={styles.productTemplate}>
      <ProductDetails product={product} />
    </div>
  );
}
