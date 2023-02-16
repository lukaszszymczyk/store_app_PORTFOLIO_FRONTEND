import React, { ChangeEvent, useState } from "react";
import styles from "./style.module.scss";

export interface SearchInputProps {
  value: string;
  placeholder: string;
  onChange: (text: string) => void;
}

export function SearchInput(props: SearchInputProps): JSX.Element {
  const { placeholder, value, onChange } = props;

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    onChange(text);
  };

  return (
    <input
      className={styles.searchInput}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChangeValue}
    />
  );
}
