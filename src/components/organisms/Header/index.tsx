import React from "react";
import { CART_PAGE, HOME_PAGE } from "config/constants";
import styles from "./style.module.scss";

export function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.links}>
        <a className={styles.headerLinks} href={HOME_PAGE}>
          Home
        </a>
        <a className={styles.element} href={CART_PAGE}>
          Cart
        </a>
      </nav>
    </div>
  );
}
