import React, { useContext, useState } from "react";
import { Product } from "services/api/interfaces/Product";
import { Button } from "components/atoms/Button";
import { CartContext } from "context/cart/cartContext";
import styles from "components/organisms/ProductDetails/style.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { QuantitySelect } from "components/molecules/QuantitySelect";

export interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const { title, price, description, category, image } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart({ ...product, quantity });
  };

  const handleChangeQuantity = (value: number) => {
    setQuantity(value);
  };

  return (
    <div className={styles.productDetails}>
      <img className={styles.productDetailsPhoto} src={image} alt="product" />
      <div className={styles.productDetailsDetails}>
        <h2 className={styles.productDetailsTitle}>{title}</h2>
        <h3 className={styles.productDetailsCategory}>{category}</h3>
        <p className={styles.productDetailsPrice}>{price} zł</p>
        <p className={styles.productDetailsDescription}>{description}</p>
        <div className={styles.productDetailsActions}>
          <div className={styles.productDetailsActionsAddToCart}>
            <QuantitySelect
              quantity={quantity}
              onChange={handleChangeQuantity}
            />
            <Button
              variant="primary"
              onClick={handleAddToCart}
              text="Add to Cart"
              className={styles.productDetailsActionsAddToCartButton}
            />
          </div>
          <Button
            variant="tertiary"
            className={styles.productDetailsActionsHeartButton}
            icon={
              <AiOutlineHeart
                className={styles.productDetailsActionsHeartIcon}
              />
            }
            text="Add to Wishlist"
          />
        </div>
      </div>
    </div>
  );
}
