import React, { useContext } from "react";
import { Product } from "types/product";
import { GET_PRODUCT_PAGE_PATH } from "config/constants";
import { CartContext } from "contexts/cart/cartContext";
import { Button } from "components/atoms/Button";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { ImEye } from "react-icons/im";
import { showAddToCartToast } from "utils/notifications/toast";
import styles from "./style.module.scss";

export interface ProductRowProps {
  product: Product;
}

export function ProductListRow({ product }: ProductRowProps): JSX.Element {
  const { id, title, price, description, category, image } = product;

  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    showAddToCartToast();
    addItemToCart({ ...product, quantity: 1 });
  };

  return (
    <div id="product-list-row" className={styles.productListRow}>
      <img className={styles.productListRowPhoto} src={image} alt="product" />
      <div className={styles.productListRowDetails}>
        <Link
          className={styles.productListRowTitle}
          to={GET_PRODUCT_PAGE_PATH(id.toString())}
        >
          <h3>{title}</h3>
        </Link>
        <h4 className={styles.productListRowCategory}>{category}</h4>
        <p className={styles.productListRowPrice}>{price.toFixed(2)} zł</p>
        <p className={styles.productListRowDescription}>{description}</p>
        <div className={styles.productListRowActions}>
          <Button
            variant="tertiary"
            icon={
              <MdAddShoppingCart
                className={styles.productListRowActionsButton}
              />
            }
            onClick={handleAddToCart}
          />
          <Link to={GET_PRODUCT_PAGE_PATH(id.toString())}>
            <Button
              variant="tertiary"
              icon={<ImEye className={styles.productListRowActionsButton} />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
