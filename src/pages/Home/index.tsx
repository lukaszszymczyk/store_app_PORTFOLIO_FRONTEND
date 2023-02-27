import React from "react";
import { HomeTemplate } from "components/templates/HomeTemplate";
import { Spinner } from "components/atoms/Spinner";
import { Message } from "components/atoms/Message";
import { useFetchProducts } from "services/features/products/useFetchProducts";

export function Home(): JSX.Element {
  const { products, isLoading, errorMessage } = useFetchProducts();

  if (!products) {
    if (errorMessage) return <Message type="error" text={errorMessage} />;
    return <Spinner isLoading={isLoading} />;
  }
  return <HomeTemplate allProducts={products} />;
}
