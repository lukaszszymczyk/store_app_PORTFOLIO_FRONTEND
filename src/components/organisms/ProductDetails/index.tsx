import React, { useContext } from "react";
import { Product } from "services/api/interfaces/Product";
import { Button } from "components/atoms/Button";
import { CartContext } from "context/cart/cartContext";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { GET_PRODUCT_PAGE_PATH } from "config/constants";
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

export interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({product}: ProductDetailsProps) {
  const {title, price, description, category, image} = product;
  const {addItemToCart} = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart({...product, quantity: 1});
  };

  return (
    <div id="product-list-row" className={styles.productDetails}>
      <img className={styles.productDetailsPhoto} src={image} alt="product"/>
      <div className={styles.productDetailsDetails}>
        <h2 className={styles.productDetailsTitle}>{title}</h2>
        <h3 className={styles.productDetailsCategory}>{category}</h3>
        <p className={styles.productDetailsPrice}>{price} zł</p>
        <p className={styles.productDetailsDescription}>{description}</p>
        <div className={styles.productDetailsActions}>
          <Button
            variant="primary"
            onClick={handleAddToCart}
            text="Add to Cart"
            className={styles.productDetailsActionsCartButton}
          />
          <Button
            variant="tertiary"
            className={styles.productDetailsActionsHeartButton}
            icon={
              <AiOutlineHeart className={styles.productDetailsActionsHeartIcon}/>
            }
            text="Add to Wishlist"
          />
        </div>
      </div>
    </div>
  );
}
