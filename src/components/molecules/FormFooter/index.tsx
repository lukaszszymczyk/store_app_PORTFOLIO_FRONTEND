import React from "react";
import { Button } from "components/atoms/Button";
import {
  MAX_STEP_INDEX,
  UseFormStepsOutput,
} from "components/pages/Checkout/useCheckoutFormSteps";
import styles from "./style.module.scss";

export interface FormFooterProps extends UseFormStepsOutput {}

export function FormFooter({
  formStep,
  previousStep,
  nextStep,
}: FormFooterProps) {
  const isConfirmButtonEnabled = formStep === MAX_STEP_INDEX;

  return (
    <div className={styles.formFooter}>
      <Button text="Previous" variant="secondary" onClick={previousStep} />
      <Button text="Next" variant="secondary" onClick={nextStep} />
      {isConfirmButtonEnabled ? <Button text="Buy" type="submit" /> : ""}
    </div>
  );
}
