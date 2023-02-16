import React from "react";
import styles from "./style.module.scss";

export interface ButtonProps {
  text?: string;
  type?: ButtonType;
  variant?: ButtonVariant;
  icon?: JSX.Element;
  onClick?: () => void;
  isOnlyIconOnMobile?: boolean;
  visibility?: boolean;
}

export type ButtonType = "submit" | "button";
export type ButtonVariant = "primary" | "secondary";

export function Button({
  text = "",
  type = "button",
  variant = "primary",
  onClick,
  icon,
  isOnlyIconOnMobile = false,
  visibility = true,
}: ButtonProps): JSX.Element {
  const buttonTypeClass =
    variant === "primary"
      ? styles.buttonElementPrimary
      : styles.buttonElementSecondary;
  const buttonVisibilityClass = visibility
    ? ""
    : styles.buttonElementVisibilityHidden;
  return (
    <button
      className={`${styles.buttonElement} ${buttonTypeClass} ${buttonVisibilityClass}`}
      type={type}
      onClick={onClick}
    >
      {icon && <i className={styles.buttonElementIcon}>{icon}</i>}
      {text && (
        <p className={isOnlyIconOnMobile ? styles.buttonElementText : ""}>
          {text}
        </p>
      )}
    </button>
  );
}
