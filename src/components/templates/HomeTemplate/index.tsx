import React from "react";
import { Product } from "services/api/interfaces/Product";
import { ProductList } from "components/organisms/ProductList";
import styles from "./style.module.scss";

export interface HomeTemplateProps {
  products: Product[];
}

export function HomeTemplate({ products }: HomeTemplateProps): JSX.Element {
  return (
    <div className={styles.homeTemplate}>
      <ProductList products={products} />
    </div>
  );
}
