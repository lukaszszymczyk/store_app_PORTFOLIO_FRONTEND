import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { payForAllItemsInCart } from "services/payment/stripePayment";
import { UseFormStepsOutput } from "pages/Checkout/useCheckoutFormSteps";
import { FormStep } from "components/molecules/FormStep";
import { FormFooter } from "components/molecules/FormFooter";
import { CartDetails } from "context/cart/cartContext";
import { formFields, formStepHeaders } from "services/form/checkoutForm";
import styles from "./style.module.scss";

export interface PurchaseFormProps {
  cartDetails: CartDetails;
  formStepsOutput: UseFormStepsOutput;
}

export function CheckoutForm({
  cartDetails,
  formStepsOutput,
}: PurchaseFormProps) {
  const formMethods = useForm();
  const { formStep, changeToPreviousStep, changeToNextStep } = formStepsOutput;

  const handlePreviousStep = () => changeToPreviousStep();

  const validateFormStep = async (): Promise<boolean> => {
    if (formStep < 0 || formStep > 1) return false;
    let isValid = false;
    switch (formStep) {
      case 0:
        isValid = await formMethods.trigger(formFields[0].map(({ id }) => id));
        break;
      case 1:
        isValid = await formMethods.trigger(formFields[1].map(({ id }) => id));
        break;
    }
    return isValid;
  };

  const handleNextStep = async () => {
    const isValid = await validateFormStep();
    if (isValid) changeToNextStep();
  };

  const handleSubmit = async () => {
    const isValid = await validateFormStep();
    if (isValid) payForAllItemsInCart(cartDetails.cartItems);
  };

  return (
    <FormProvider {...formMethods}>
      <form className={styles.checkoutForm}>
        <FormStep
          header={formStepHeaders[formStep]}
          fields={formFields[formStep]}
        />
        <FormFooter
          formStep={formStep}
          changeToPreviousStep={handlePreviousStep}
          changeToNextStep={handleNextStep}
          onSubmitForm={handleSubmit}
        />
      </form>
    </FormProvider>
  );
}
