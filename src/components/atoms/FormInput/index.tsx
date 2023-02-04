import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./style.module.scss";

export type FormInputType = "text" | "radio";

export interface FormInputProps {
  id: string;
  name: string;
  type?: FormInputType;
  isRequired?: boolean;
}

interface ErrorMessage {
  message: string;
  type: string;
}

const requiredOptions = (name: string, isRequired: boolean | undefined) => {
  return {
    value: isRequired || true,
    message: `${name} field is required`,
  };
};

export function FormInput({ id, name, type, isRequired }: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.formElement}>
      <label htmlFor={id}>{name}</label>
      <input
        key={id}
        type={type || "text"}
        {...register(id, { required: requiredOptions(name, isRequired) })}
      />
      {errors[id] ? <p className={styles.formElementError}>{(errors[id] as ErrorMessage).message}</p> : ""}
    </div>
  );
}
