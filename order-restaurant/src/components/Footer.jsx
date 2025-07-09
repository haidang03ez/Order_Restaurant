import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 !py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 !gap-8 border-b border-gray-300 !pb-10">
          <div className="space-y-4 pr-5 border-r border-gray-300">
            <img src={logo} alt="Logo" className="items-center w-32" />
            <p className="text-sm">
              Công Ty Cổ Phần Kinh Doanh
              <br />
              298, Đường Cầu Diễn, <br />
              Quận Bắc Từ Liêm, Hà Nội
            </p>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-4">DỊCH VỤ</h6>
            <ul className="flex flex-col gap-2 space-y-2 text-sm">
              <li>Điều khoản sử dụng</li>
              <li>Chính sách bảo mật thông tin cá nhân</li>
              <li>Chính sách bảo mật thanh toán</li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-4">HỖ TRỢ</h6>
            <ul className="flex flex-col gap-2 space-y-2 text-sm">
              <li>
                <Link to="/policy" className="hover:text-blue-600">
                  Chính sách đổi - trả - hoàn tiền
                </Link>
              </li>
              <li>
                <Link to="/policy" className="hover:text-blue-600">
                  Chính sách bảo hành - bồi hoàn
                </Link>
              </li>
              <li>
                <Link to="/policy" className="hover:text-blue-600">
                  Chính sách vận chuyển
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-4">TÀI KHOẢN CỦA TÔI</h6>
            <ul className="flex flex-col gap-2 space-y-2 text-sm">
              <li>
                <Link to="/sign-in" className="hover:text-blue-600">
                  Đăng nhập/Tạo mới tài khoản
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-blue-600">
                  Chi tiết tài khoản
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-blue-600">
                  Lịch sử mua hàng
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <div className="mt-10 space-y-2 text-sm">
            <p className="font-semibold uppercase">Liên hệ</p>
            <p className="flex items-center gap-2">
              <MdLocationOn className="text-lg" /> 298, Đường Cầu Diễn, Quận Bắc
              Từ Liêm, Hà Nội
            </p>
            <p className="flex items-center gap-2">
              <MdEmail className="text-lg" /> haidanghaui@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <MdPhone className="text-lg" /> 0982723221
            </p>
          </div>
          <div className="flex gap-10 space-x-4 text-xl text-gray-600">
            <FaFacebookF className="hover:text-blue-600 w-7 h-auto" />
            <FaInstagram className="hover:text-pink-500 w-7 h-auto" />
            <FaYoutube className="hover:text-red-600 w-7 h-auto" />
            <FaTiktok className="hover:text-black w-7 h-auto" />
            <FaTwitter className="hover:text-blue-400 w-7 h-auto" />
          </div>
          {/* Payment */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
              alt="MasterCard"
              className="w-14 h-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="w-14 h-auto"
            />
            <img
              src="https://rgb.vn/wp-content/uploads/2014/05/rgb_vn_new_branding_paypal_2014_logo_detail.png"
              alt="Paypal"
              className="w-14 h-auto"
            />
            <img
              src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/American-Express-icon.png"
              alt="Credit"
              className="w-14 h-auto"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center text-gray-500 mt-4 border-t border-gray-300 pt-4">
          Giấy chứng nhận Đăng ký Kinh doanh số 1234567890 do Sở KHĐT TP.Hà Nội
          cấp ngày 20/12/XXXX, đăng ký thay đổi lần thứ X, ngày 20/05/XXXX.
        </div>
      </div>
    </footer>
  );
};
