import React from "react";
import { useFetchProduct } from "services/features/products/useFetchProduct";
import { useParams } from "react-router";
import { Spinner } from "components/atoms/Spinner/Spinner";
import { ProductTemplate } from "components/templates/ProductTemplate/ProductTemplate";
import { Message } from "components/atoms/Message/Message";
import { PageWrapper } from "pages/PageWrapper/PageWrapper";

export function Product(): JSX.Element {
  const { id = "" } = useParams();
  const { product, isLoading, errorMessage } = useFetchProduct(id);

  return (
    <>
      <PageWrapper
        title={product?.title || "Store App product details"}
        description={`Store App: ${product?.title} details`}
      >
        {!product && errorMessage && (
          <Message type="error" text={errorMessage} />
        )}
        {!product && !errorMessage && <Spinner isLoading={isLoading} />}
        {product && <ProductTemplate product={product} />}
      </PageWrapper>
    </>
  );
}
