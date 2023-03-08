import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./style.module.scss";

export interface NumberInputProps {
  value: number;
  onBlur: (value: number) => void;
}

export function NumberInput({ value, onBlur }: NumberInputProps): JSX.Element {
  const [inputValue, setInputValue] = useState<number>(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValueNumber = Number(event.target.value);
    if (!Number.isNaN(inputValueNumber)) setInputValue(inputValueNumber);
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValueNumber = Number(event.target.value);
    if (Number.isNaN(inputValueNumber) || inputValueNumber <= 0) {
      setInputValue(value);
      return;
    }
    setInputValue(inputValueNumber);
    if (onBlur) onBlur(inputValueNumber);
  };

  return (
    <input
      className={styles.numberInput}
      value={inputValue}
      onChange={handleChangeValue}
      onBlur={handleBlur}
    />
  );
}
