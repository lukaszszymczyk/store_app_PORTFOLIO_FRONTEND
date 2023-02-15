import React from "react";
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

export function PurchaseForm({ cart, formStepsOutput }: PurchaseFormProps) {
  const formMethods = useForm();
  const { formStep, previousStep, nextStep } = formStepsOutput;

  const onPreviousStep = () => previousStep();

  const onNextStep = async () => {
    let isValid = false;
    switch (formStep) {
      case 0:
        isValid = await formMethods.trigger(["firstName", "lastName"]);
        break;
      case 1:
        isValid = await formMethods.trigger(["street", "city"]);
        break;
    }
    if (isValid) nextStep();
  };

  const handlePayment = async () => {
    await payForAllItemsInCart(cart);
  };

  return (
    <FormProvider {...formMethods}>
      <form
        id="purchase-form"
        onSubmit={formMethods.handleSubmit(handlePayment)}
      >
        <FormStep step={formStep} />
        <FormFooter
          formStep={formStep}
          previousStep={onPreviousStep}
          nextStep={onNextStep}
        />
      </form>
    </FormProvider>
  );
}
