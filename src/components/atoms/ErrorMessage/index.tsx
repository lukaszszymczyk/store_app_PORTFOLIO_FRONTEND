import React from "react";
import { BiError } from "react-icons/bi";
import styles from "./style.module.scss";

export function ErrorMessage(props: { message: string }): JSX.Element {
  const { message } = props;

  return (
    <div className={styles.spinner}>
      <BiError />
      <p>{message}</p>
    </div>
  );
}
