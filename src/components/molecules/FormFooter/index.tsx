import React from "react";
import { Button } from "components/atoms/Button";
import {
  MAX_STEP_INDEX,
  UseFormStepsOutput,
} from "pages/Checkout/useCheckoutFormSteps";
import styles from "./style.module.scss";

export interface FormFooterProps extends UseFormStepsOutput {}

export function FormFooter({
  formStep,
  previousStep,
  nextStep,
}: FormFooterProps) {
  const isPreviousButtonEnabled = formStep !== 0;
  const isNextButtonEnabled = formStep !== MAX_STEP_INDEX;

  return (
    <div className={styles.formFooter}>
      {isPreviousButtonEnabled ? (
        <Button text="Previous" variant="secondary" onClick={previousStep} />
      ) : (
        ""
      )}
      {isNextButtonEnabled ? (
        <Button text="Next" variant="secondary" onClick={nextStep} />
      ) : (
        <Button text="Buy" type="submit" />
      )}
    </div>
  );
}
