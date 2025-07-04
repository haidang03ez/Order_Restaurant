import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Dropdown } from "antd";
import "../index.css";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

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
        <a rel="noopener noreferrer" href="https://www.aliyun.com">
          Cài đặt địa chỉ
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Quản lý đơn hàng
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Mã đã lưu
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
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
      className={`w-full border-b border-none transition-all duration-300 ${
        isScrolled ? "!h-[80px] bg-yellow-600 text-white" : "!h-[90px] bg-white text-black"
      }`}
    >
      <div className=" mx-auto flex items-center justify-between py-3 !px-10">
        <nav>
          <ul className="nav-list flex items-center gap-6 font-semibold text-base">
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
                  className="!bg-orange-600 !text-white !font-semibold !px-4 !py-2 hover:!bg-orange-700 hover:!scale-110 !rounded-none"
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
              className="outline-none border-none bg-transparent py-1 px-2 text-base w-40 placeholder-gray-500"
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
          <div className="relative">
            <ShoppingCartOutlined className="text-2xl text-gray-900" />
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full px-1.5 py-0.5 font-semibold">
              1
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
