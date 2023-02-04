import { useState } from "react";

const INIT_STEP_INDEX = 0;
export const MAX_STEP_INDEX = 1;

export interface UseFormStepsOutput {
  formStep: number;
  previousStep: () => void;
  nextStep: () => void;
}

export const useCheckoutFormSteps = (): UseFormStepsOutput => {
  const [formStep, setFormStep] = useState(INIT_STEP_INDEX);

  const previousStep = () => {
    if (formStep === INIT_STEP_INDEX) return;
    setFormStep((prev) => prev - 1);
  };
  const nextStep = () => {
    if (formStep === MAX_STEP_INDEX) return;
    setFormStep((prev) => prev + 1);
  };

  return {
    formStep,
    previousStep,
    nextStep,
  };
};
