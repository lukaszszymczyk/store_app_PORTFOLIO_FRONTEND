import React from "react";
import styles from "./style.module.scss";

export interface ButtonProps {
  text?: string;
  type?: ButtonType;
  variant?: ButtonVariant;
  icon?: JSX.Element;
  onClick?: () => void;
  visibility?: boolean;
}

export type ButtonType = "submit" | "button";
export type ButtonVariant = "primary" | "secondary" | "tertiary";

export function Button({
  text = "",
  type = "button",
  variant = "primary",
  onClick,
  icon,
  visibility = true,
}: ButtonProps): JSX.Element {
  const buttonTypeClass = (): string => {
    switch (variant) {
      case "primary":
        return styles.buttonElementPrimary;
      case "secondary":
        return styles.buttonElementSecondary;
      case "tertiary":
        return styles.buttonElementTertiary;
    }
  };

  const buttonVisibilityClass = visibility
    ? ""
    : styles.buttonElementVisibilityHidden;

  return (
    <button
      className={`${
        styles.buttonElement
      } ${buttonTypeClass()} ${buttonVisibilityClass}`}
      type={type}
      onClick={onClick}
    >
      {icon && <i className={styles.buttonElementIcon}>{icon}</i>}
      {text && <p>{text}</p>}
    </button>
  );
}
