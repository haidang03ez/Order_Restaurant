import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Dropdown } from "antd";
import "../index.css";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ThemeButton } from "./ThemeButton";

export const Header = ({
  navItem1,
  navItem2,
  navItem3,
  navItem4,
  navItem5,
}) => {
  const items = [
    {
      key: "1",
      label: <Link to="/sign-in">Thông tin cá nhân</Link>,
    },
    {
      key: "2",
      label: (
        <a rel="noopener noreferrer" href="">
          Cài đặt địa chỉ
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a rel="noopener noreferrer" href="">
          Quản lý đơn hàng
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a rel="noopener noreferrer" href="">
          Mã đã lưu
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a rel="noopener noreferrer" href="">
          Đăng xuất
        </a>
      ),
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsScrolled(scroll > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full flex border-b border-none transition-all duration-300 ${
        isScrolled
          ? "!h-[80px] backdrop-blur-md bg-white/30 p-6 shadow-lg"
          : "!h-[90px] bg-white text-black"
      }`}
    >
      <div className="w-full mx-auto flex items-center !justify-between py-3 !px-10">
        <nav>
          <ul className="nav-list flex items-center gap-6 font-semibold text-base !m-0">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `pb-1 ${
                    isActive
                      ? "!text-orange-600 border-b-2 border-orange-600"
                      : "text-black hover:!text-orange-600"
                  }`
                }
              >
                {navItem1}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `pb-1 ${
                    isActive
                      ? "!text-orange-600 border-b-2 border-orange-600"
                      : "text-black hover:!text-orange-600"
                  }`
                }
              >
                {navItem2}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `pb-1 ${
                    isActive
                      ? "!text-orange-600 border-b-2 border-orange-600"
                      : "text-black hover:!text-orange-600"
                  }`
                }
              >
                {navItem4}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  `pb-1 ${
                    isActive
                      ? "!text-orange-600 border-b-2 border-orange-600"
                      : "text-black hover:!text-orange-600"
                  }`
                }
              >
                {navItem3}
              </NavLink>
            </li>

            <li>
              <NavLink to="/place-order">
                <Button
                  type="primary"
                  className="!bg-yellow-600 !text-white !font-semibold !px-4 !py-2 hover:!bg-orange-700 hover:!scale-110 !rounded-none"
                >
                  {navItem5 || "Đặt tiệc ngay"}
                </Button>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <div className="flex items-center border-b border-gray-400 pr-2">
            <input
              type="text"
              placeholder="Tìm kiếm món ăn"
              className="outline-none border-none bg-transparent py-1 px-2 text-base w-60 placeholder-gray-500"
            />
            <SearchOutlined className="text-lg text-gray-600" />
          </div>

          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <Button
              type="text"
              icon={<UserOutlined className="text-xl" />}
              className="flex items-center gap-1 text-gray-900 hover:!text-orange-600"
            >
              <span className="font-medium">Tài khoản</span>
            </Button>
          </Dropdown>
          <Link to="/shopping-cart">
            <div className="relative">
              <ShoppingCartOutlined className="text-2xl text-gray-900" />
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1 font-bold shadow-md">
                1
              </span>
            </div>
          </Link>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
