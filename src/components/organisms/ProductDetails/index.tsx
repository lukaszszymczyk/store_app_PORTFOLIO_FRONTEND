import React, { useContext, useState } from "react";
import { Product } from "types/product";
import { Button } from "components/atoms/Button";
import { CartContext } from "contexts/cart/cartContext";
import styles from "components/organisms/ProductDetails/style.module.scss";
import { QuantitySelect } from "components/molecules/QuantitySelect";
import { showAddToCartToast } from "utils/notifications/toast";

export interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps): JSX.Element {
  const [quantity, setQuantity] = useState<number>(1);
  const { title, price, description, category, image } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart({ ...product, quantity });
    showAddToCartToast();
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
        <p className={styles.productDetailsPrice}>{price.toFixed(2)} zł</p>
        <p className={styles.productDetailsDescription}>{description}</p>
        <div className={styles.productDetailsActions}>
          <div className={styles.productDetailsActionsAddToCart}>
            <QuantitySelect
              min={1}
              max={10}
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
        </div>
      </div>
    </div>
  );
}
