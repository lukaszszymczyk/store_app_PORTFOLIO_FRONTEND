import React from "react";
import { Button } from "components/atoms/Button";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
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
  const handleFirstPage = () => {
    changeProductsPage(minPageIndex);
  };

  const handlePrevPage = () => {
    changeProductsPage(currentPageIndex - 1);
  };

  const handleNextPage = () => {
    changeProductsPage(currentPageIndex + 1);
  };

  const handleLastPage = () => {
    changeProductsPage(maxPageIndex);
  };

  return (
    <div className={styles.pageSelect}>
      <Button
        icon={<BiFirstPage />}
        variant="secondary"
        onClick={handleFirstPage}
        className={styles.pageSelectButton}
      />
      <Button
        variant="secondary"
        onClick={handlePrevPage}
        text={`${currentPageIndex}`}
        visibility={currentPageIndex !== minPageIndex}
        className={styles.pageSelectButton}
      />
      <Button
        variant="primary"
        text={`${currentPageIndex + 1}`}
        className={styles.pageSelectButton}
      />
      <Button
        variant="secondary"
        onClick={handleNextPage}
        text={`${currentPageIndex + 2}`}
        visibility={currentPageIndex !== maxPageIndex}
        className={styles.pageSelectButton}
      />
      <Button
        icon={<BiLastPage />}
        variant="secondary"
        onClick={handleLastPage}
        className={styles.pageSelectButton}
      />
    </div>
  );
}
