import React from "react";
import { FormInput } from "components/atoms/FormInput/FormInput";
import { FormFieldProps } from "types/checkoutForm";
import styles from "./style.module.scss";

export interface FormStepProps {
  header: string;
  fields: FormFieldProps[];
}

export function FormStep({ header, fields }: FormStepProps): JSX.Element {
  return (
    <div className={styles.formStep}>
      <h2 className={styles.formStepHeader}>{header}</h2>
      {fields.map(({ id, name, type, isRequired, minLength, maxLength }) => (
        <FormInput
          key={id}
          id={id}
          name={name}
          type={type}
          isRequired={isRequired}
          minLength={minLength}
          maxLength={maxLength}
        />
      ))}
    </div>
  );
}
