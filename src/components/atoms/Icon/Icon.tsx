import { BiError } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { GoInfo } from "react-icons/go";
import React from "react";
import styles from "./style.module.scss";

export type IconType = "info" | "success" | "error";

export function Icon(props: { type: IconType }): JSX.Element {
  const { type } = props;

  switch (type) {
    case "error":
      return <BiError className={styles.icon} />;
    case "success":
      return <TiTick className={styles.icon} />;
    case "info":
      return <GoInfo className={styles.icon} />;
  }
}
