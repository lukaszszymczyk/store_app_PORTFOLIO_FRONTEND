import React from "react";
import styles from "./style.module.scss";

export interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: ButtonType;
  variant?: ButtonVariant;
}

export type ButtonType = "submit" | "button";
export type ButtonVariant = "primary" | "secondary";

export function Button({
  text,
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps): JSX.Element {
  const buttonClass =
    variant === "primary"
      ? styles.buttonElementPrimary
      : styles.buttonElementSecondary;
  return (
    <button
      className={`${styles.buttonElement} ${buttonClass}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
