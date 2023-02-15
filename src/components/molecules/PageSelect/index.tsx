import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "components/molecules/Message/style.module.scss";
import { Button } from "components/atoms/Button";

export interface PageSelectProps {
  initPageIndex: number;
  maxPages: number;
  changeProductsPage: (pageIndex: number) => void;
}

export function PageSelect({
  initPageIndex,
  maxPages,
  changeProductsPage,
}: PageSelectProps): JSX.Element {
  const [pageIndex, setPageIndex] = useState<number>(initPageIndex);

  useEffect(() => {
    changeProductsPage(pageIndex);
  }, [pageIndex]);

  const handleChangeInputPage = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (!inputValue) return;
    setPageIndex(Number(inputValue) - 1);
  };

  const handlePrevPage = () => {
    if (pageIndex === initPageIndex) return;
    setPageIndex((prev) => prev - 1);
  };
  const handleNextPage = () => {
    if (pageIndex === maxPages - 1) return;
    setPageIndex((prev) => prev + 1);
  };

  return (
    <div>
      <Button variant="secondary" text="Prev" onClick={handlePrevPage} />
      <input
        className={styles.inputElement}
        onChange={handleChangeInputPage}
        name="inputPage"
        min={initPageIndex + 1}
        max={maxPages}
      />
      <Button variant="secondary" text="Next" onClick={handleNextPage} />
    </div>
  );
}
