import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CART_PAGE_PATH, HOME_PAGE_PATH } from "config/constants";
import { Button } from "components/atoms/Button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartContext } from "context/cart/cartContext";
import styles from "./style.module.scss";

export function Header() {
  const { cartDetails } = useContext(CartContext);

  return (
    <div className={styles.header}>
      <nav className={styles.headerLinks}>
        <Link
          className={`${styles.linkElement} ${styles.linkElementStoreApp}`}
          to={HOME_PAGE_PATH}
        >
          Store App
        </Link>
        <Link className={styles.linkElement} to={CART_PAGE_PATH}>
          <Button
            variant="tertiary"
            countIndex={cartDetails.allItemsQuantity}
            icon={
              <MdOutlineShoppingCart className={styles.linkElementCartIcon} />
            }
          />
        </Link>
      </nav>
    </div>
  );
}
