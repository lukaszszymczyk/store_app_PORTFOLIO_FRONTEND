import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "components/pages/Home";
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";
import { Product } from "components/pages/Product";
import { CartContext } from "context/cart/cartContext";
import { useCart } from "context/cart/useCart";
import { Cart } from "components/pages/Cart";

export function App(): JSX.Element {
  const cartContext = useCart();

  return (
    <CartContext.Provider value={cartContext}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartContext.Provider>
  );
}
