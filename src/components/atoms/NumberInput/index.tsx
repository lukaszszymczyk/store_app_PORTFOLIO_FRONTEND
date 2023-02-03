import React, { ChangeEvent } from "react";
import styles from "./style.module.scss";

export interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function NumberInput(props: NumberInputProps): JSX.Element {
  const { value, onChange } = props;

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <input
      className={styles.numberInput}
      type="number"
      min="1"
      value={value}
      onChange={onChangeValue}
    />
  );
}
