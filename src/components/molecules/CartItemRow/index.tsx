import React, { useContext } from "react";
import { CartContext, CartItem } from "contexts/cart/cartContext";
import { Button } from "components/atoms/Button";
import { Link } from "react-router-dom";
import { GET_PRODUCT_PAGE_PATH } from "config/constants";
import { RiDeleteBin6Line } from "react-icons/ri";
import { QuantitySelect } from "components/molecules/QuantitySelect";
import { showRemoveItemFromCartToast } from "utils/notifications/toast";
import styles from "./style.module.scss";

export interface CartItemRowProps {
  cartItem: CartItem;
}

export function CartItemRow({ cartItem }: CartItemRowProps): JSX.Element {
  const { id, title, price, description, category, image, quantity } = cartItem;

  const { removeItemFromCart, changeItemQuantity } = useContext(CartContext);

  const handleChangeQuantity = (value: number) => {
    changeItemQuantity(id, value);
  };

  const handleRemoveFromCart = () => {
    showRemoveItemFromCartToast();
    removeItemFromCart(id);
  };

  return (
    <div id="cart-item-row" className={styles.productListRow}>
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
          <QuantitySelect
            min={1}
            max={10}
            quantity={quantity}
            onChange={handleChangeQuantity}
          />
          <Button
            variant="tertiary"
            icon={
              <RiDeleteBin6Line
                className={styles.productListRowActionsButton}
              />
            }
            onClick={handleRemoveFromCart}
          />
        </div>
      </div>
    </div>
  );
}
