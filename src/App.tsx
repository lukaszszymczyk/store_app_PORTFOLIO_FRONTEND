import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "components/pages/Home";
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";
import { Product } from "components/pages/Product";

export function App(): JSX.Element {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:id" element={<Product />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
