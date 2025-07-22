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
import { PolicyPage } from "./pages/PolicyPage";
import { CartPage } from "./pages/CartPage";
import ThemeProvider from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";
import { ProfileUserPage } from "./pages/ProfileUserPage";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="about" element={<AboutUsPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="menu" element={<MenuPage />} />
              <Route path="place-order" element={<PlaceOrderPage />} />
              <Route
                path="product-details/:id"
                element={<ProductDetailsPage />}
              />
              <Route path="policy" element={<PolicyPage />} />
              <Route
                path="shopping-cart/:id"
                element={
                  <PrivateRoute>
                    <CartPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="profile"
                element={
                  <PrivateRoute>
                    <ProfileUserPage />
                  </PrivateRoute>
                }
              />
            </Route>

            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
