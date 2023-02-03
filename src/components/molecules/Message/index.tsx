import React from "react";
import styles from "components/molecules/Message/style.module.scss";
import { Icon } from "components/atoms/Icon";

export type MessageType = "error" | "success" | "info";

export interface MessageProps {
  type: MessageType;
  text: string;
}

export function Message(props: MessageProps): JSX.Element {
  const { type, text } = props;

  return (
    <div className={styles.errorMessage}>
      <Icon type={type} />
      <p>{text}</p>
    </div>
  );
}
