import React from "react";
import { HomeTemplate } from "components/templates/HomeTemplate";
import { useProducts } from "./useProducts";

// TODO: obsluga error'ow i spinner
export function Home(): JSX.Element {
  const { products } = useProducts();

  if (!products) return <>Error</>;
  return <HomeTemplate products={products} />;
}
