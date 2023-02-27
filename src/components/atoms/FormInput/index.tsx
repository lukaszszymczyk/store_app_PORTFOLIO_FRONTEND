import React from "react";
import { useFormContext } from "react-hook-form";
import { FormFieldProps } from "types/checkoutForm";
import { registerOptions } from "components/atoms/FormInput/registerOptions";
import styles from "./style.module.scss";

export type FormInputType = "text" | "email" | "phone" | "postcode";

export interface FormInputProps extends FormFieldProps {}

interface ErrorMessage {
  message: string;
  type: string;
}

export function FormInput(props: FormInputProps): JSX.Element {
  const { id, name, type = "text" } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.formElement}>
      <label htmlFor={id}>{name}</label>
      <input
        key={id}
        type={type}
        {...register(id, registerOptions(props))}
        className={styles.formElementInput}
      />
      {errors[id] && (
        <p className={styles.formElementError}>
          {(errors[id] as ErrorMessage).message}
        </p>
      )}
    </div>
  );
}
