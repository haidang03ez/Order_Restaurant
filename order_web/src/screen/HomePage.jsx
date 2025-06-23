import React from "react";
import Header from "../component/headerComponent/header";
import Footer from "../component/footerComponent/footer";
import { Banner } from "../component/BannerComponent/Banner";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Banner />
      <Footer />
    </>
  );
};
