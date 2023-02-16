import React, { useEffect, useState } from "react";
import { Button } from "components/atoms/Button";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import styles from "./style.module.scss";

export interface PageSelectProps {
  currentPageIndex: number;
  minPageIndex: number;
  maxPageIndex: number;
  changeProductsPage: (pageIndex: number) => void;
}

export function PageSelect({
  currentPageIndex,
  minPageIndex,
  maxPageIndex,
  changeProductsPage,
}: PageSelectProps): JSX.Element {
  const handlePrevPage = () => {
    changeProductsPage(currentPageIndex - 1);
  };
  const handleNextPage = () => {
    changeProductsPage(currentPageIndex + 1);
  };

  return (
    <div className={styles.pageSelect}>
      <Button
        icon={<GrLinkPrevious />}
        variant="secondary"
        onClick={handlePrevPage}
        visibility={currentPageIndex !== minPageIndex}
      />
      <p className={styles.pageSelectNumber}>{currentPageIndex + 1}</p>
      <Button
        icon={<GrLinkNext />}
        variant="secondary"
        onClick={handleNextPage}
        visibility={currentPageIndex !== maxPageIndex}
      />
    </div>
  );
}
