import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PlaceOrderPage } from "./pages/PlaceOrderPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MainLayout } from "./layout/MainLayout";
import { AboutUsPage } from "./pages/AboutUsPage";
import { NewsPage } from "./pages/NewsPage";
import { MenuPage } from "./pages/MenuPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutUsPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="place-order" element={<PlaceOrderPage />} />
            <Route path="product-details/:id" element={<ProductDetailsPage/>} />
          </Route>

          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
