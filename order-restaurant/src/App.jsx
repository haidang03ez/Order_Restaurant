import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PlaceOrderPage } from "./pages/PlaceOrderPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MainLayout } from "./layout/MainLayout";
import { AboutUsPage } from "./pages/AboutUsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="place-order" element={<PlaceOrderPage />} />
            <Route path="about" element={<AboutUsPage/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
