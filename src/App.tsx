import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";
import { Product } from "pages/Product";
import { CartContext } from "contexts/cart/cartContext";
import { useCart } from "contexts/cart/useCart";
import { Cart } from "pages/Cart";
import { Checkout } from "pages/Checkout";
import { PaymentResult } from "pages/PaymentResult";

export function App(): JSX.Element {
  const cartProviderValue = useCart();

  return (
    <CartContext.Provider value={cartProviderValue}>
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
