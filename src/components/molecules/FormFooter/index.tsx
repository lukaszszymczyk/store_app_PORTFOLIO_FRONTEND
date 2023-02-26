import React from "react";
import { Button } from "components/atoms/Button";
import {
  MAX_STEP_INDEX,
  UseFormStepsOutput,
} from "pages/Checkout/useCheckoutFormSteps";
import { useNavigate } from "react-router";
import { CART_PAGE_PATH } from "config/constants";
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
  const navigate = useNavigate();

  const isPreviousButtonEnabled = formStep !== 0;
  const isNextButtonEnabled = formStep !== MAX_STEP_INDEX;

  const handleNavigateToPath = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.formFooter}>
      <Button
        text="Back to Cart"
        variant="secondary"
        onClick={() => handleNavigateToPath(CART_PAGE_PATH)}
        className={styles.formFooterButton}
      />
      <div className={styles.formFooterNavigation}>
        {isPreviousButtonEnabled && (
          <Button
            text="Back"
            variant="secondary"
            onClick={changeToPreviousStep}
            className={styles.formFooterNavigationButton}
          />
        )}
        {isNextButtonEnabled ? (
          <Button
            text="Next"
            variant="primary"
            onClick={changeToNextStep}
            className={styles.formFooterNavigationButton}
          />
        ) : (
          <Button
            text="Buy"
            variant="primary"
            onClick={onSubmitForm}
            className={styles.formFooterNavigationButton}
          />
        )}
      </div>
    </div>
  );
}
