import React from "react";
import styles from "./style.module.scss";

export interface ButtonProps {
  text?: string;
  type?: ButtonType;
  variant?: ButtonVariant;
  icon?: JSX.Element;
  onClick?: () => void;
  visibility?: boolean;
  className?: string;
  countIndex?: number;
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
  className,
  countIndex,
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
      } ${buttonTypeClass()} ${buttonVisibilityClass} ${className}`}
      type={type}
      onClick={onClick}
    >
      {icon && <i className={styles.buttonElementIcon}>{icon}</i>}
      {countIndex !== undefined && (
        <span className={styles.buttonElementCountIndex}>{countIndex}</span>
      )}
      {text && <p className={styles.buttonElementText}>{text}</p>}
    </button>
  );
}
