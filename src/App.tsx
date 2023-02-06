import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "components/pages/Home";
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";
import { Product } from "components/pages/Product";
import { CartContext } from "context/cart/cartContext";
import { useCart } from "context/cart/useCart";
import { Cart } from "components/pages/Cart";
import { Checkout } from "components/pages/Checkout";
import { PaymentResult } from "components/pages/PaymentResult";

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
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/info" element={<PaymentResult />} />
        </Routes>
        <Footer />
      </Router>
    </CartContext.Provider>
  );
}
