import React from "react";
import { useSearchParams } from "react-router-dom";
import { Message } from "components/atoms/Message";
import { PageWrapper } from "pages/PageWrapper";

export function PaymentResult(): JSX.Element {
  const [searchParams] = useSearchParams();
  const isSuccess = searchParams.get("success") === "true";

  return (
    <>
      <PageWrapper
        title="Store App payment result"
        description="Result of payment"
      >
        {isSuccess ? (
          <Message type="success" text="Payment successful" />
        ) : (
          <Message type="error" text="Failed payment" />
        )}
      </PageWrapper>
    </>
  );
}
