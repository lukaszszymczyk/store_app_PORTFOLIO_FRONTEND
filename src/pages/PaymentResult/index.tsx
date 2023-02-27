import React from "react";
import { useSearchParams } from "react-router-dom";
import { Message } from "components/atoms/Message";

export function PaymentResult(): JSX.Element {
  const [searchParams] = useSearchParams();
  const isSuccess = searchParams.get("success") === "true";

  if (!isSuccess) return <Message type="error" text="Failed payment" />;
  return <Message type="success" text="Payment successful" />;
}
