import React, { useEffect, useState } from "react";
import { Button } from "components/atoms/Button/Button";
import { SearchInput } from "components/atoms/SearchInput/SearchInput";
import { BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import styles from "./style.module.scss";
import { Filters } from "types/product";

export interface SearchWithFilterProps {
  onSearchProducts: (params: { phrase?: string; filters?: Filters }) => void;
}

const INIT_SEARCHED_PHRASE = "";

export function SearchWithFilter({
  onSearchProducts,
}: SearchWithFilterProps): JSX.Element {
  const [searchedPhrase, setSearchedPhrase] =
    useState<string>(INIT_SEARCHED_PHRASE);

  useEffect(() => {
    if (searchedPhrase === INIT_SEARCHED_PHRASE) {
      onSearchProducts({ phrase: searchedPhrase });
    }
  }, [searchedPhrase]);

  const handleChangeText = (text: string) => {
    setSearchedPhrase(text);
  };

  const handleSearch = () => {
    onSearchProducts({ phrase: searchedPhrase });
  };

  const handleClearFilter = () => {
    setSearchedPhrase(INIT_SEARCHED_PHRASE);
    onSearchProducts({ phrase: INIT_SEARCHED_PHRASE });
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
