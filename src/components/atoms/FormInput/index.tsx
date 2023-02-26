import React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { FormFieldProps } from "services/form/checkoutForm";
import styles from "./style.module.scss";

export type FormInputType = "text" | "email" | "phone" | "postcode";

export interface FormInputProps extends FormFieldProps {}

interface ErrorMessage {
  message: string;
  type: string;
}

const getPatternValue = (type: FormInputType): RegExp => {
  switch (type) {
    case "text":
      return /^[a-zA-Z]+$/;
    case "email":
      return /\S+@\S+\.\S+/;
    case "phone":
      return /\d{9}/;
    case "postcode":
      return /\d{5}/;
  }
};

const registerOptions = ({
  id,
  name,
  type = "text",
  isRequired = true,
  maxLength,
  minLength,
}: FormInputProps): RegisterOptions => {
  return {
    required: {
      value: isRequired,
      message: `${name} is required`,
    },
    pattern: {
      value: getPatternValue(type),
      message: `Entered value does not match ${id} format`,
    },
    maxLength: maxLength && {
      value: maxLength,
      message: `Max length: ${maxLength}`,
    },
    minLength: minLength && {
      value: minLength,
      message: `Min length: ${minLength}`,
    },
  };
};

export function FormInput(props: FormInputProps) {
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
