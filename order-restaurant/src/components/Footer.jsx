import React from "react";
import image_banner_3 from "../assets/image_banner_3.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="relative">
        <img
          src={image_banner_3}
          alt="Banner"
          className="w-screen h-[200px] object-cover brightness-30"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-5 text-white !px-30">
          <div className="footer-items w-1/4">
            <h3>Về chúng tôi</h3>
            <p>
              Số điện thoại: 095.366.4722 <br /> Địa chỉ: số 33 Nhân Chính,
              Trung Hòa, Cầu Giấy, Hà Nội
            </p>
          </div>
          <div className="footer-items w-1/4">
            <h3>Các phương thức thanh toán được hỗ trợ</h3>
          </div>
          <div className="footer-items w-1/4">
            <h3>Mạng xã hội</h3>
            <ul>
              <li className="flex items-center gap-2">
                <Link
                  to="/facebook-page"
                  className="flex items-center !hover:underline"
                >
                  <i className="bi bi-facebook text-white"> - Facebook</i>
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link
                  to="/facebook-page"
                >
                  <i className="bi bi-instagram text-white"> - Instagram</i>
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link
                  to="/facebook-page"
                  className="flex items-center !hover:underline"
                >
                  <i className="bi bi-twitter text-white"> - Twitter</i> 
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link
                  to="/facebook-page"
                  className="flex items-center !hover:underline"
                >
                  <i className="bi bi-youtube text-white"> - Youtube</i> 
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-items w-1/4">1</div>
        </div>
      </div>
    </>
  );
};
