import React from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <header className="header">
        <Header
          navItem1={"Trang chủ"}
          navItem2={"Thực đơn"}
          navItem3={"Tin tức"}
          navItem4={"Về chúng tôi"}
          navItem5={"Đặt tiệc ngay"}
        />
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};
