import React, { useContext } from "react";
import { Product } from "services/api/interfaces/Product";
import { GET_PRODUCT_PAGE_PATH } from "config/constants";
import { CartContext } from "context/cart/cartContext";
import { Button } from "components/atoms/Button";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import styles from "./style.module.scss";

export interface ProductRowProps {
  product: Product;
}

export function ProductListRow({ product }: ProductRowProps): JSX.Element {
  const { id, title, price, description, category, image } = product;

  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart({ ...product, quantity: 1 });
  };

  return (
    <li id="product-list-row" className={styles.productListRow}>
      <img className={styles.productListRowPhoto} src={image} alt="product" />
      <div className={styles.productListRowDetails}>
        <Link
          className={styles.productListRowTitle}
          to={GET_PRODUCT_PAGE_PATH(id.toString())}
        >
          <h3>{title}</h3>
        </Link>
        <h4 className={styles.productListRowCategory}>{category}</h4>
        <p className={styles.productListRowPrice}>{price} zł</p>
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
          <Button
            variant="tertiary"
            icon={
              <AiOutlineHeart className={styles.productListRowActionsButton} />
            }
          />
          <Link to={GET_PRODUCT_PAGE_PATH(id.toString())}>
            <Button
              variant="tertiary"
              icon={<BiShow className={styles.productListRowActionsButton} />}
            />
          </Link>
        </div>
      </div>
    </li>
  );
}
