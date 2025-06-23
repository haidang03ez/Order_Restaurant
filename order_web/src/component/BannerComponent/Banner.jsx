import React from "react";
import banner from "../../assets/images/banner.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Banner.css";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_text">
        <h2>Your favorite food, delivered your home</h2>
        <p>
          Food, drinks, groceries, and more available for delivery and pickup.
        </p>
        <form action="#" className="delivery_search">
          <i className="bi bi-map-fill"></i>
          <input
            type="text"
            placeholder="Enter your delivery address..."
            className="search_input"
          />
          <button type="submit" className="search_button">
            <i className="bi bi-search"></i>
          </button>
        </form>

        <p>Apps Available to download on</p>
        <div className="banner_app d-flex">
          <a>
            <i className="bi bi-apple"></i>
            <div className="banner_app--items">
              <span>Download on</span>
              <p>App Store</p>
            </div>
          </a>
          <a>
            <i className="bi bi-google-play"></i>
            <div className="banner_app--items">
              <span>Download on</span>
              <p>Google Play</p>
            </div>
          </a>
        </div>
      </div>
      <div className="banner_thumbnail">
        <img src={banner} alt="banner-img" />
      </div>
    </div>
  );
};
