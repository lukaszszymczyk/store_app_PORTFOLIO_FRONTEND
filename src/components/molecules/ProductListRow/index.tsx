import React, { useContext } from "react";
import { Product } from "services/api/interfaces/Product";
import { GET_PRODUCT_PAGE_PATH } from "config/constants";
import { CartContext } from "context/cart/cartContext";
import { ProductCard } from "components/atoms/ProductCard";
import { Button } from "components/atoms/Button";
import { Link } from "react-router-dom";

export interface ProductRowProps {
  product: Product;
}

// TODO: poprawic obsluge quantity, defaultValue itp.
export function ProductListRow({ product }: ProductRowProps): JSX.Element {
  const { id } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart({ ...product, quantity: 1 });
  };

  return (
    <Link to={GET_PRODUCT_PAGE_PATH(id.toString())}>
      <ProductCard product={product} />
      <Button text="Add to cart" onClick={handleAddToCart} />
    </Link>
  );
}
