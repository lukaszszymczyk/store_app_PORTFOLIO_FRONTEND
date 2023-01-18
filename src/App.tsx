import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "components/pages/Home";
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";

export function App(): JSX.Element {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

// <PageWrapper auth><Home /></PageWrapper>

// TODO: dodac footer
