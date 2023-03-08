import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { Footer } from "components/organisms/Footer/Footer";
import { Header } from "components/organisms/Header/Header";
import { Product } from "pages/Product/Product";
import { Cart } from "pages/Cart/Cart";
import { Checkout } from "pages/Checkout/Checkout";
import { PaymentResult } from "pages/PaymentResult/PaymentResult";
import { Toaster } from "react-hot-toast";
import { CartContextProvider } from "contexts/cart/CartContextProvider";

export function App(): JSX.Element {
  return (
    <CartContextProvider>
      <Toaster />
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
    </CartContextProvider>
  );
}
