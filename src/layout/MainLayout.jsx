import React from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import "../index.css";
import { Footer } from "../components/Footer";
import { ThemeWrapper } from "../components/ThemeWrapper";
import { BackTopButton } from "./../components/BackTopButton";

export const MainLayout = () => {
  return (
    <ThemeWrapper className="main-layout">
      <header className="header fixed z-40 w-full">
        <Header
          navItem1={"Trang chủ"}
          navItem2={"Thực đơn"}
          navItem3={"Tin tức"}
          navItem4={"Về chúng tôi"}
          navItem5={"Đặt tiệc ngay"}
        />
      </header>
      <div id="top"></div>
      <main className="content !pt-[70px] md:!pt-[80px] lg:!pt-[90px]">
        <Outlet />
      </main>
      <BackTopButton idTop="top"/>
      <div>
        <Footer />
      </div>
    </ThemeWrapper>
  );
};
