import React, { useEffect, useState } from "react";
import image from "../../assets/images/image.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect scroll header
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsScrolled(scroll > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={isScrolled ? "navbar_scrolled" : "navbar"}>
        <div className="navbar_component">
          <a className="navbar_component--logo" href="#">
            <img
              src={image}
              alt="logo"
              className="navbar_component--logo-img"
            />
          </a>
          <div className="navbar_component--menu d-flex">
            <ul className="navbar_component--menu-list d-flex gap-3">
              <li className="menu_item">
                <a href="#" className="menu_item--link">
                  Home
                </a>
              </li>
              <li className="menu_item">
                <a href="#restaurant" className="menu_item--link">
                  Restaurant
                </a>
              </li>
              <li className="menu_item">
                <a href="#features" className="menu_item--link">
                  Features
                </a>
              </li>
              <li className="menu_item">
                <a href="#testimonials" className="menu_item--link">
                  Testimonials
                </a>
              </li>
              <li className="menu_item">
                <a href="#download" className="menu_item--link">
                  Download
                </a>
              </li>
            </ul>
            <a>
              <button className="btn-login">Login Now</button>
            </a>

            <Link to="/placeorder" className="btn-register">
              <button className="btn-join">Join Free</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
