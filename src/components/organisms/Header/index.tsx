import React from "react";
import { Link } from "react-router-dom";
import { CART_PAGE_PATH, HOME_PAGE_PATH } from "config/constants";
import styles from "./style.module.scss";

// https://reactrouter.com/en/main/components/link

export function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.links}>
        <Link className={styles.headerLinks} to="/">
          Home
        </Link>
        <Link className={styles.element} to="/cart">
          Cart
        </Link>
      </nav>
    </div>
  );
}
