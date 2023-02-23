import React from "react";
import { SiShopify } from "react-icons/si";
import styles from "./style.module.scss";

export function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <div className={styles.footerText}>
        <i>
          <SiShopify />
        </i>
        <p>Store App</p>
      </div>
    </div>
  );
}
