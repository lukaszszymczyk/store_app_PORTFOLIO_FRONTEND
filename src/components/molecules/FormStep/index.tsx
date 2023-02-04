import React from "react";
import { FormInput } from "components/atoms/FormInput";
import styles from "./style.module.scss";


export function FormStep(props: { step: number }): JSX.Element {
  const { step } = props;

  switch (step) {
    case 0:
      return (
        <div className={styles.formStep}>
          <h2>Personal data</h2>
          <FormInput id="firstName" name="First Name" />
          <FormInput id="lastName" name="Last Name" />
        </div>
      );
    case 1:
      return (
        <div className={styles.formStep}>
          <h2>Address</h2>
          <FormInput id="street" name="Street" />
          <FormInput id="city" name="City" />
        </div>
      );
  }
  return <></>;
}
