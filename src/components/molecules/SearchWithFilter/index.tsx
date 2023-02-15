import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "components/molecules/Message/style.module.scss";
import { Button } from "components/atoms/Button";

export interface SearchWithFilterProps {
  filterProducts: (phrase: string) => void;
  clearFilters: () => void;
}

const INIT_SEARCHED_PHRASE = "";

export function SearchWithFilter({
  filterProducts,
  clearFilters,
}: SearchWithFilterProps): JSX.Element {
  const [searchedPhrase, setSearchedPhrase] =
    useState<string>(INIT_SEARCHED_PHRASE);

  useEffect(() => {
    if (searchedPhrase === INIT_SEARCHED_PHRASE) {
      clearFilters();
    }
  }, [searchedPhrase]);

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchedPhrase(text);
  };

  const handleSearch = () => {
    filterProducts(searchedPhrase);
  };

  const handleClearFilter = () => {
    setSearchedPhrase(INIT_SEARCHED_PHRASE);
    clearFilters();
  };

  return (
    <div>
      <input
        className={styles.inputElement}
        onChange={handleChangeText}
        name="inputPhrase"
      />
      <Button text="Search" onClick={handleSearch} />
      <Button text="Clear Filter" onClick={handleClearFilter} />
    </div>
  );
}
