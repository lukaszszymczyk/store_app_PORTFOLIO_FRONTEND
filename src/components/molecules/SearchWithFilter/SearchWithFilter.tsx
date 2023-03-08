import React, { useEffect, useState } from "react";
import { Button } from "components/atoms/Button/Button";
import { SearchInput } from "components/atoms/SearchInput/SearchInput";
import { BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
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
      <div className={styles.searchInput}>
        <SearchInput
          placeholder="Search"
          value={searchedPhrase}
          onChange={handleChangeText}
        />
        <Button
          variant="tertiary"
          icon={<RxCross1 className={styles.searchInputClearButtonIcon} />}
          onClick={handleClearFilter}
        />
        <Button
          variant="tertiary"
          icon={<BsSearch className={styles.searchInputConfirmButtonIcon} />}
          onClick={handleSearch}
        />
      </div>
    </div>
  );
}
