import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { payForAllItemsInCart } from "services/payment/stripePayment";
import { CartItem } from "context/cart/cartContext";
import { UseFormStepsOutput } from "pages/Checkout/useCheckoutFormSteps";
import { FormStep } from "components/molecules/FormStep";
import { FormFooter } from "components/molecules/FormFooter";

export interface PurchaseFormProps {
  cart: CartItem[];
  formStepsOutput: UseFormStepsOutput;
}

const fields = [
  [
    { id: "firstName", placeholder: "First Name" },
    { id: "firstName", placeholder: "First Name" },
  ],
];

export function PurchaseForm({ cart, formStepsOutput }: PurchaseFormProps) {
  const formMethods = useForm();
  const { formStep, changeToPreviousStep, changeToNextStep } = formStepsOutput;

  const handlePreviousStep = () => changeToPreviousStep();

  const validateFormStep = async (): Promise<boolean> => {
    let isValid = false;
    // formStep >= 0 && formStep <= 1
    switch (formStep) {
      case 0:
        isValid = await formMethods.trigger(["firstName", "lastName"]);
        break;
      case 1:
        isValid = await formMethods.trigger(["street", "city"]);
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
    if (isValid) payForAllItemsInCart(cart);
  };

  return (
    <FormProvider {...formMethods}>
      <form>
        <FormStep step={formStep} />
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
