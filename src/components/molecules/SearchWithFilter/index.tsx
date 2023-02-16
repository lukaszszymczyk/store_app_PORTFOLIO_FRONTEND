import React, { useEffect, useState } from "react";
import { Button } from "components/atoms/Button";
import { SearchInput } from "components/atoms/SearchInput";
import { BsSearch } from "react-icons/bs";
import { VscListFilter } from "react-icons/vsc";
import styles from "./style.module.scss";

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

  const handleChangeText = (text: string) => {
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
    <div className={styles.searchWithFilters}>
      <SearchInput
        placeholder="Search"
        value={searchedPhrase}
        onChange={handleChangeText}
      />
      <Button icon={<BsSearch />} text="Search" onClick={handleSearch} />
      <Button
        icon={<VscListFilter />}
        variant="secondary"
        text="Clear filters"
        onClick={handleClearFilter}
      />
    </div>
  );
}
