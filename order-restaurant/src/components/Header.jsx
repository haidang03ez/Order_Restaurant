import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export const Header = ({
  navItem1,
  navItem2,
  navItem3,
  navItem4,
  navItem5,
}) => {
  return (
    <header className="header d-flex justify-content-between align-items-center gap-20">
      <nav>
        <ul className="nav-list d-flex justify-content-between align-items-center gap-10">
          <li>
            <Link to="/">{navItem1}</Link>
          </li>
          <li>
            <Link to="/menu">{navItem2}</Link>
          </li>
          <li>
            <Link to="/news">{navItem3}</Link>
          </li>
          <li>
            <Link to="/about">{navItem4}</Link>
          </li>
          <li>
            <Link to="/place-order">{navItem5}</Link>
          </li>
        </ul>
      </nav>
      <div className="header-right d-flex align-items-center gap-15">
        <div
          className="search-box d-flex align-items-center gap-10"
          style={{ borderBottom: "1px solid black" }}
        >
          <input
            type="text"
            placeholder="Search here..."
            className="form-control"
            style={{ border: "none" }}
          />
          <span className="bi bi-search search-icon"></span>
        </div>
        <div className="bi bi-person user-icon">
          <span>Tài khoản</span>
        </div>
        <div className="bi bi-cart cart-icon"></div>
      </div>
    </header>
  );
};
