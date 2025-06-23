import React from "react";
import image from "../../assets/images/image.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar">
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
                <a href="#" className="menu_item--link">
                  Restaurant
                </a>
              </li>
              <li className="menu_item">
                <a href="#" className="menu_item--link">
                  Features
                </a>
              </li>
              <li className="menu_item">
                <a href="#" className="menu_item--link">
                  Testimonials
                </a>
              </li>
              <li className="menu_item">
                <a href="#" className="menu_item--link">
                  Download
                </a>
              </li>
            </ul>
            <a>
              <button className="btn-login">Login Now</button>
            </a>
            <a>
              <button className="btn-join">Join Free</button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
