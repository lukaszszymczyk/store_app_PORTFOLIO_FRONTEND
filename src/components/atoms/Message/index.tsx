import React from "react";
import { Icon } from "components/atoms/Icon";
import styles from "./style.module.scss";

export type MessageType = "error" | "success" | "info";

export interface MessageProps {
  type: MessageType;
  text: string;
}

export function Message(props: MessageProps): JSX.Element {
  const { type, text } = props;

  return (
    <div className={styles.message}>
      <Icon type={type} />
      <h2>{text}</h2>
    </div>
  );
}
