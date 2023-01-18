import React from "react";
import { Product } from "services/api/interfaces/Product";
import { ProductList } from "components/organisms/ProductList";

export interface HomeTemplateProps {
  products: Product[];
}

export function HomeTemplate({ products }: HomeTemplateProps): JSX.Element {
  return <ProductList products={products} />;
}

// TODO: dodac do templatki inne elementy jak: stopke i naglowek
