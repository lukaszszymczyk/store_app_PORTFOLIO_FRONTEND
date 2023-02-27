import React, { ChangeEvent } from "react";
import styles from "./style.module.scss";

export interface SearchInputProps {
  value: string;
  placeholder: string;
  onChange: (text: string) => void;
}

export function SearchInput({
  placeholder,
  value,
  onChange,
}: SearchInputProps): JSX.Element {
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    onChange(text);
  };

  return (
    <input
      className={styles.searchInput}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChangeValue}
    />
  );
}
