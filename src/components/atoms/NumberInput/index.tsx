import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./style.module.scss";

export interface NumberInputProps {
  initValue: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  onBlur?: (value: number) => void;
}

export type InputType = "number" | "text";

export function NumberInput({
  min,
  max,
  initValue,
  onChange,
  onBlur,
}: NumberInputProps): JSX.Element {
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValueNumber = Number(event.target.value);
    if (onChange) {
      onChange(inputValueNumber);
    }
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    if (onBlur) {
      const inputValueNumber = Number(event.target.value);
      onBlur(inputValueNumber);
    }
  };

  return (
    <input
      className={styles.numberInput}
      value={initValue}
      type="number"
      onChange={handleChangeValue}
      onBlur={handleBlur}
    />
  );
}
