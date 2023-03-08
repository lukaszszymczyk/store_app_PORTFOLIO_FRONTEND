import React from "react";
import { ClipLoader } from "react-spinners";
import styles from "./style.module.scss";

export interface SpinnerProps {
  isLoading: boolean;
}

export function Spinner({ isLoading }: SpinnerProps): JSX.Element {
  return (
    <div className={styles.spinner}>
      <ClipLoader color="#000" size={150} loading={isLoading} />
    </div>
  );
}
