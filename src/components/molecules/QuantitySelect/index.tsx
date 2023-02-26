import React from "react";
import { NumberInput } from "components/atoms/NumberInput";
import { Button } from "components/atoms/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./style.module.scss";

export interface QuantitySelectProps {
  quantity: number;
  onChange: (value: number) => void;
}

export function QuantitySelect({
  quantity,
  onChange,
}: QuantitySelectProps): JSX.Element {
  const handleIncreaseQuantity = () => {
    onChange(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    onChange(quantity - 1);
  };

  return (
    <div className={styles.quantitySelect}>
      <NumberInput value={quantity} onBlur={onChange} />
      <div className={styles.quantitySelectActions}>
        <Button
          className={styles.quantitySelectActionsButtonIncrease}
          variant="tertiary"
          icon={<IoIosArrowUp />}
          onClick={handleIncreaseQuantity}
        />
        <Button
          className={styles.quantitySelectActionsButtonDecrease}
          variant="tertiary"
          icon={<IoIosArrowDown />}
          onClick={handleDecreaseQuantity}
        />
      </div>
    </div>
  );
}
