import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Dropdown, Flex, Segmented, Drawer } from "antd";
import "../index.css";
import {
  MoonOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  SunOutlined,
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useTheme } from "../hooks/useTheme";
import { useAuth } from "../hooks/useAuth";

export const Header = ({
  navItem1,
  navItem2,
  navItem3,
  navItem4,
  navItem5,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();

  const items = [
    {
      key: "1",
      label: <Link to="/profile">Thông tin cá nhân</Link>,
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
        <a rel="noopener noreferrer" href="" onClick={logout}>
          Đăng xuất
        </a>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsScrolled(scroll > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: navItem1, end: true },
    { to: "/menu", label: navItem2 },
    { to: "/about", label: navItem4 },
    { to: "/news", label: navItem3 },
  ];

  const MobileMenu = () => (
    <div className="lg:hidden">
      <Button
        type="text"
        icon={<MenuOutlined className="text-xl" />}
        onClick={() => setMobileMenuOpen(true)}
        className="flex items-center text-gray-900 hover:!text-orange-600"
      />

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={280}
        closeIcon={<CloseOutlined />}
      >
        <div className="flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `block py-2 px-4 rounded-lg transition-colors ${
                  isActive
                    ? "!text-orange-600 bg-orange-50  border-orange-600"
                    : "text-gray-700 hover:!text-orange-600 hover:bg-gray-50"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="border-t pt-4 mt-4">
            <Link to="/place-order" onClick={() => setMobileMenuOpen(false)}>
              <Button
                type="primary"
                className="w-full !bg-yellow-600 !text-white !font-semibold !py-2 hover:!bg-orange-700 !rounded-lg"
              >
                {navItem5 || "Đặt tiệc ngay"}
              </Button>
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );

  return (
    <header
      className={`w-full flex border-b border-none transition-all duration-300 ${
        isScrolled
          ? "!h-[70px] md:!h-[80px] backdrop-blur-md bg-white/30 p-4 md:p-6 shadow-lg"
          : "!h-[80px] md:!h-[90px] bg-white text-black"
      }`}
    >
      <div className="w-full mx-auto flex items-center !justify-between py-3 !px-4 md:!px-10">
        <div className="flex">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold text-orange-600"
            >
              Vista
            </Link>
          </div>

          <nav className="hidden lg:block">
            <ul className="nav-list flex items-center gap-6 font-semibold text-base !m-0">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `pb-1 ${
                        isActive
                          ? "!text-orange-600 border-b-2 border-orange-600"
                          : "text-black hover:!text-orange-600"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}

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
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden md:flex items-center border-b border-gray-400 pr-2">
            <input
              type="text"
              placeholder="Tìm kiếm món ăn"
              className="outline-none border-none bg-transparent py-1 px-2 text-base w-60 placeholder-gray-500"
            />
            <SearchOutlined className="text-lg text-gray-600" />
          </div>

          {user ? (
            <>
              <Dropdown menu={{ items }} placement="bottomRight" arrow>
                <Button
                  type="text"
                  icon={<UserOutlined className="text-lg md:text-xl" />}
                  className="flex items-center gap-1 text-gray-900 hover:!text-orange-600"
                >
                  <span className="hidden md:inline font-medium">
                    Xin chào, {user.username} !
                  </span>
                </Button>
              </Dropdown>
            </>
          ) : (
            <Link to="/sign-in">
              <Button
                type="text"
                icon={<UserOutlined className="text-lg md:text-xl" />}
                className="flex items-center gap-1 text-gray-900 hover:!text-orange-600"
              >
                <span className="hidden md:inline font-medium">Đăng nhập</span>
              </Button>
            </Link>
          )}

          <Link to="/shopping-cart">
            <div className="relative">
              <ShoppingCartOutlined className="text-xl md:text-2xl text-gray-900" />
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1 font-bold shadow-md">
                1
              </span>
            </div>
          </Link>

          <Flex gap="small" align="flex-start" vertical>
            <Segmented
              shape="round"
              value={theme}
              onChange={(value) => setTheme(value)}
              options={[
                {
                  value: "light",
                  icon: <SunOutlined />,
                },
                {
                  value: "dark",
                  icon: <MoonOutlined />,
                },
              ]}
              size="small"
            />
          </Flex>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
