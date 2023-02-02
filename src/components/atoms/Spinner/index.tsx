import React from "react";
import { ClipLoader } from "react-spinners";
import styles from "./style.module.scss";

export function Spinner(props: { isLoading: boolean }): JSX.Element {
  const { isLoading } = props;

  return (
    <div className={styles.spinner}>
      <ClipLoader color="#000" size={150} loading={isLoading} />
    </div>
  );
}
