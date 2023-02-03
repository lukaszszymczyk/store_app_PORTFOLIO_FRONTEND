import React from "react";
import { HomeTemplate } from "components/templates/HomeTemplate";
import { Spinner } from "components/atoms/Spinner";
import { Message } from "components/molecules/Message";
import { useProducts } from "./useProducts";

export function Home(): JSX.Element {
  const { products, isLoading, errorMessage } = useProducts();

  if (!products) {
    if (errorMessage) return <Message type="error" text={errorMessage} />;
    return <Spinner isLoading={isLoading} />;
  }
  return <HomeTemplate products={products} />;
}
