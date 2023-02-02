import React from "react";
import { Link } from "react-router-dom";
import { CART_PAGE_PATH, HOME_PAGE_PATH } from "config/constants";
import styles from "./style.module.scss";

export function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.headerLinks}>
        <Link className={styles.headerLinksElement} to={HOME_PAGE_PATH}>
          Home
        </Link>
        <Link className={styles.headerLinksElement} to={CART_PAGE_PATH}>
          Cart
        </Link>
      </nav>
    </div>
  );
}
