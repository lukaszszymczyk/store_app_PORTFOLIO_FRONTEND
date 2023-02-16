import React from "react";
import { Button } from "components/atoms/Button";
import {
  MAX_STEP_INDEX,
  UseFormStepsOutput,
} from "pages/Checkout/useCheckoutFormSteps";
import styles from "./style.module.scss";

export interface FormFooterProps extends UseFormStepsOutput {
  onSubmitForm: () => void;
}

export function FormFooter({
  formStep,
  changeToPreviousStep,
  changeToNextStep,
  onSubmitForm,
}: FormFooterProps) {
  const isPreviousButtonEnabled = formStep !== 0;
  const isNextButtonEnabled = formStep !== MAX_STEP_INDEX;

  return (
    <div className={styles.formFooter}>
      {isPreviousButtonEnabled && (
        <Button
          text="Previous"
          variant="secondary"
          onClick={changeToPreviousStep}
        />
      )}
      {isNextButtonEnabled ? (
        <Button text="Next" variant="secondary" onClick={changeToNextStep} />
      ) : (
        <Button text="Buy" variant="primary" onClick={onSubmitForm} />
      )}
    </div>
  );
}
