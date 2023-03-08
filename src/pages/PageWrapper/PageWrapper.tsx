import React from "react";
import { Helmet } from "react-helmet";

export interface PageWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function PageWrapper({
  children,
  title,
  description,
}: PageWrapperProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </>
  );
}
