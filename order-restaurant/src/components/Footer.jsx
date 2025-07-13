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
    <footer className="bg-gray-100 text-gray-700 !py-8 md:!py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 !gap-6 md:!gap-8 border-b border-gray-300 !pb-6 md:!pb-10">
          <div className="space-y-4 pr-0 md:pr-5 border-r-0 md:border-r border-gray-300">
            <img src={logo} alt="Logo" className="items-center w-24 md:w-32" />
            <p className="text-sm md:text-base">
              Công Ty Cổ Phần Kinh Doanh
              <br />
              298, Đường Cầu Diễn, <br />
              Quận Bắc Từ Liêm, Hà Nội
            </p>
          </div>

          <div>
            <h6 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              DỊCH VỤ
            </h6>
            <ul className="flex flex-col gap-2 space-y-2 text-sm md:text-base">
              <li>Điều khoản sử dụng</li>
              <li>Chính sách bảo mật thông tin cá nhân</li>
              <li>Chính sách bảo mật thanh toán</li>
            </ul>
          </div>

          <div>
            <h6 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              HỖ TRỢ
            </h6>
            <ul className="flex flex-col gap-2 space-y-2 text-sm md:text-base">
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
            <h6 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              TÀI KHOẢN CỦA TÔI
            </h6>
            <ul className="flex flex-col gap-2 space-y-2 text-sm md:text-base">
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

        <div className="flex flex-col lg:flex-row justify-between mt-6 md:mt-3 gap-6 lg:gap-0">
          <div className="mt-6 lg:mt-10 space-y-2 text-sm md:text-base">
            <p className="font-semibold uppercase">Liên hệ</p>
            <p className="flex items-start gap-2">
              <MdLocationOn className="text-lg mt-0.5 flex-shrink-0" />
              <span>298, Đường Cầu Diễn, Quận Bắc Từ Liêm, Hà Nội</span>
            </p>
            <p className="flex items-center gap-2">
              <MdEmail className="text-lg flex-shrink-0" />
              <span>haidanghaui2021@gmail.com</span>
            </p>
            <p className="flex items-center gap-2">
              <MdPhone className="text-lg flex-shrink-0" />
              <span>0982723221</span>
            </p>
          </div>

          <div className="flex !gap-6 md:!gap-10 space-x-4 text-xl text-gray-600 justify-center lg:justify-end items-center">
            <FaFacebookF className="hover:text-blue-600 w-6 h-6 md:w-7 md:h-7 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 w-6 h-6 md:w-7 md:h-7 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 w-6 h-6 md:w-7 md:h-7 cursor-pointer" />
            <FaTiktok className="hover:text-black w-6 h-6 md:w-7 md:h-7 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 w-6 h-6 md:w-7 md:h-7 cursor-pointer" />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 md:gap-4 justify-center lg:justify-end">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
              alt="MasterCard"
              className="w-10 h-auto md:w-14 md:h-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="w-10 h-auto md:w-14 md:h-auto"
            />
            <img
              src="https://rgb.vn/wp-content/uploads/2014/05/rgb_vn_new_branding_paypal_2014_logo_detail.png"
              alt="Paypal"
              className="w-10 h-auto md:w-14 md:h-auto"
            />
            <img
              src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/American-Express-icon.png"
              alt="Credit"
              className="w-10 h-auto md:w-14 md:h-auto"
            />
          </div>
        </div>

        <div className="text-xs text-center text-gray-500 mt-6 md:mt-4 border-t border-gray-300 pt-4">
          Giấy chứng nhận Đăng ký Kinh doanh số 1234567890 do Sở KHĐT TP.Hà Nội
          cấp ngày 20/12/XXXX, đăng ký thay đổi lần thứ X, ngày 20/05/XXXX.
        </div>
      </div>
    </footer>
  );
};
