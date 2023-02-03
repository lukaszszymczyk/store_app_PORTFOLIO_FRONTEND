import React from "react";

export type PaymentResultType = "success" | "failure";

export function PaymentResult(props: { type: PaymentResultType }): JSX.Element {
  const { type } = props;
  if (type === "success") return <div>success</div>;
  return <div>failure</div>;
}
