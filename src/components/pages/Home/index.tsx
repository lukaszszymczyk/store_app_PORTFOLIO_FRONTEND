import React from "react";
import { HomeTemplate } from "components/templates/HomeTemplate";
import { useProducts } from "./useProducts";

export function Home(): JSX.Element {
  const products = useProducts() || [];

  return <HomeTemplate products={products} />; // <Footer />
}
