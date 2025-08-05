import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
  DesktopOutlined,
} from "@ant-design/icons";
import { useTheme } from "../hooks/useTheme";
import { ThemeWrapper } from "./ThemeWrapper";
import { useProduct } from "../hooks/useProduct";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/userActions";

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

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  const [inputValue, setInputValue] = useState("");
  const { setSearchKeyword, products } = useProduct();
  const [searchDropdown, setSearchDropdown] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const logout = () => {
    dispatch(logoutUser());
  };

  const items = [
    {
      key: "1",
      label: <NavLink to="/profile">Thông tin cá nhân</NavLink>,
    },
    {
      key: "2",
      label: <NavLink to="/profile">Cài đặt địa chỉ</NavLink>,
    },
    {
      key: "3",
      label: <NavLink to="/profile">Quản lý đơn hàng</NavLink>,
    },
    {
      key: "4",
      label: <NavLink to="/profile">Mã đã lưu</NavLink>,
    },
    {
      key: "5",
      label: (
        <a
          onClick={logout}
          className="!text-red-600 hover:!text-red-700 hover:!font-bold"
        >
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

  const handleSearch = () => {
    setSearchKeyword(inputValue);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSearchDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSearchDropdown(false);
  }, [location]);

  return (
    <ThemeWrapper
      className={`w-full flex border-b border-none transition-all duration-300 ${
        isScrolled
          ? "!h-[70px] md:!h-[80px] backdrop-blur-md bg-gray-100/30 p-4 md:p-6 shadow-lg"
          : "!h-[80px] md:!h-[90px] bg-white text-black"
      }`}
    >
      <ThemeWrapper className="w-full mx-auto flex items-center !justify-between py-3 !px-4 md:!px-10">
        <ThemeWrapper className="flex">
          <ThemeWrapper className="flex items-center">
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold text-orange-600"
            >
              <ThemeWrapper className="hover:scale-115 !transition">
                Vista
              </ThemeWrapper>
            </Link>
          </ThemeWrapper>

          <ThemeWrapper className="hidden lg:block">
            <ul className="nav-list flex items-center !gap-6 font-semibold text-base !m-0">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `pb-1 ${
                        isActive
                          ? "!text-orange-600 !border-b-2 !border-orange-600"
                          : "text-black hover:!text-orange-600"
                      }`
                    }
                  >
                    <ThemeWrapper className="inline text-inherit">
                      {item.label}
                    </ThemeWrapper>
                  </NavLink>
                </li>
              ))}

              <li>
                <NavLink to="/place-order">
                  <Button
                    type="primary"
                    className="!bg-orange-500 !text-white !font-semibold !px-4 !py-2 hover:!bg-orange-700 hover:!scale-110 !rounded-none"
                  >
                    {navItem5 || "Đặt tiệc ngay"}
                  </Button>
                </NavLink>
              </li>
            </ul>
          </ThemeWrapper>
        </ThemeWrapper>

        <ThemeWrapper className="flex items-center gap-3 md:gap-6">
          <ThemeWrapper
            ref={dropdownRef}
            className="hidden md:flex items-center border-b border-gray-400 pr-2"
          >
            <input
              type="text"
              placeholder="Tìm kiếm món ăn"
              value={inputValue}
              className="outline-none border-none bg-transparent py-1 px-2 text-base w-60 placeholder-gray-500"
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setSearchDropdown(true)}
            />
            <div>
              {inputValue && (
                <button
                  onClick={() => {
                    setSearchKeyword("");
                    setInputValue("");
                  }}
                  className="ml-2"
                >
                  <AiOutlineClose className="text-lg text-gray-600" />
                </button>
              )}
            </div>
            <button
              className="bg-transparent text-black px-4 py-2 !rounded-md hover:!bg-gray-200 hover:!scale-110 !transition"
              onClick={handleSearch}
            >
              <SearchOutlined className="text-lg text-gray-600" />
            </button>
            <ThemeWrapper>
              {searchDropdown && (
                <ThemeWrapper className="absolute z-10 top-full right-30 w-50 bg-white shadow-md mt-2 rounded-xl p-4 space-y-4">
                  <ThemeWrapper>
                    <div className="mb-2 text-gray-600 font-medium">
                      Xu hướng tìm kiếm 🔥
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {products.map((item, idx) => (
                        <Link
                          to={`/product-details/${item.id}`}
                          key={idx}
                          className="flex items-center gap-2 text-sm hover:bg-gray-100 p-1 rounded-md"
                        >
                          <img
                            src={item.thumbnail}
                            className="w-8 h-8 bg-gray-200 rounded-md"
                          />
                          <div className="flex flex-col">
                            <span>{item.title}</span>
                            <span>{item.price} VND</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </ThemeWrapper>
                </ThemeWrapper>
              )}
            </ThemeWrapper>
          </ThemeWrapper>

          {user ? (
            <ThemeWrapper>
              <Dropdown menu={{ items }} placement="bottomRight" arrow>
                <Button
                  type="text"
                  icon={
                    <ThemeWrapper>
                      <UserOutlined className="text-lg md:text-xl" />
                    </ThemeWrapper>
                  }
                  className="flex items-center gap-1 text-gray-900 hover:!text-orange-600"
                >
                  <span className="hidden md:inline font-medium">
                    <ThemeWrapper>Xin chào, {user.username} !</ThemeWrapper>
                  </span>
                </Button>
              </Dropdown>
            </ThemeWrapper>
          ) : (
            <ThemeWrapper className="flex items-center gap-1 ">
              <Link to="/sign-in">
                <Button
                  type="text"
                  icon={
                    <ThemeWrapper>
                      <UserOutlined className="text-lg md:text-xl" />
                    </ThemeWrapper>
                  }
                  className="flex items-center gap-1 text-gray-900 hover:!text-orange-600"
                >
                  <ThemeWrapper className="hidden md:inline font-medium">
                    Đăng nhập
                  </ThemeWrapper>
                </Button>
              </Link>
            </ThemeWrapper>
          )}

          <Link to={`/shopping-cart`} className="!mr-2">
            <ThemeWrapper className="relative">
              <ShoppingCartOutlined className="text-xl md:text-2xl text-gray-900" />
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1 font-bold shadow-md">
                1
              </span>
            </ThemeWrapper>
          </Link>

          <Flex gap="small" align="flex-start" vertical>
            <Segmented
              shape="round"
              value={theme}
              onChange={(value) => setTheme(value)}
              options={[
                {
                  value: "light",
                  label: (
                    <SunOutlined
                      className={
                        theme === "light" ? "!text-yellow-600" : "text-gray-400"
                      }
                    />
                  ),
                },
                {
                  value: "dark",
                  label: (
                    <MoonOutlined
                      className={
                        theme === "dark" ? "!text-gray-800" : "text-gray-400"
                      }
                    />
                  ),
                },
                {
                  value: "system",
                  label: (
                    <DesktopOutlined
                      className={
                        theme === "system" ? "!text-blue-500" : "text-gray-400"
                      }
                    />
                  ),
                },
              ]}
              size="small"
            />
          </Flex>
          <MobileMenu />
        </ThemeWrapper>
      </ThemeWrapper>
    </ThemeWrapper>
  );
};
