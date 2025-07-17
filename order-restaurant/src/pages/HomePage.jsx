import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SlideBanner } from "./../components/SlideBanner";
import image_banner_1 from "../assets/image_banner_1.png";
import image_banner_2 from "../assets/image_banner_2.png";
import {
  PlayCircleOutlined,
  BookOutlined,
  FileTextOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import "../index.css";
import { ThemeWrapper } from "../components/ThemeWrapper";
// import { ThemeWrapper } from "../components/ThemeWrapper";

export const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [dateNow, setDateNow] = useState("");
  const [qtyBooking, setQtyBooking] = useState(0);

  useEffect(() => {
    const now = new Date().toISOString().split("T")[0];
    setDateNow(now);
  }, []);

  const steps = [
    {
      icon: <BookOutlined style={{ fontSize: 32 }} />,
      title: "TÌM HIỂU THÔNG TIN",
      desc: "Khách hàng tìm hiểu thông tin và đăng kí tư vấn",
    },
    {
      icon: <FileTextOutlined style={{ fontSize: 32 }} />,
      title: "LIÊN HỆ TƯ VẤN",
      desc: "Nhân viên liên hệ trong 2 tiếng để nhận thông tin",
    },
    {
      icon: <UserOutlined style={{ fontSize: 32 }} />,
      title: "KÝ KẾT HỢP ĐỒNG",
      desc: "Khách hàng tìm hiểu thông tin và đăng kí tư vấn",
    },
    {
      icon: <WalletOutlined style={{ fontSize: 32 }} />,
      title: "PHỤC VỤ TIỆC",
      desc: "Khách hàng tìm hiểu thông tin và đăng kí tư vấn",
    },
    {
      icon: <BookOutlined style={{ fontSize: 32 }} />,
      title: "THANH TOÁN",
      desc: "Khách hàng tìm hiểu thông tin và đăng kí tư vấn",
    },
  ];

  const reasons = [
    {
      imgUrl:
        "https://intern-project-chi.vercel.app/static/media/bg1.da6d3327978f205184d6.jpg",
      title: "sự lựa chọn ẩm thực số 1",
      desc: "Thuộc Golden Gate Group - 15 năm kinh nghiệp, hơn 400 nhà hàng toàn quốc",
    },
    {
      imgUrl:
        "https://intern-project-chi.vercel.app/static/media/bg4.63e3fbb06b475740c09e.jpg",
      title: "thực phẩm an toàn",
      desc: "Đảo bảm an toàn vệ sinh thực phẩm từ nguồn cung cấp đén khâu chế biến",
    },
    {
      imgUrl:
        "https://intern-project-chi.vercel.app/static/media/bg3.cd94ec83ef439a755c40.jpg",
      title: "thực đơn đa dạng",
      desc: "Menu phong phú, kết hợp tinh hoa ẩm thực Á - Âu, đa dạng lựa chọn",
    },
    {
      imgUrl:
        "https://intern-project-chi.vercel.app/static/media/bg4.63e3fbb06b475740c09e.jpg",
      title: "phục vụ chuyên nghiệp",
      desc: "Tư vấn tận tâm, phục vụ chu đáo, dịch vụ linh hoạt, thanh toán tiện lợi",
    },
  ];

  return (
    <ThemeWrapper className="home-page">
      <ThemeWrapper className="slider">
        <SlideBanner />
      </ThemeWrapper>

      <ThemeWrapper className="production py-5">
        <ThemeWrapper className="bg-gray-100 py-5 px-4 md:px-16">
          <ThemeWrapper className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <ThemeWrapper>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Nhà hàng Vista - Con gì đang bơi chúng tôi đều có
              </h2>
              <ThemeWrapper className="text-gray-700 leading-relaxed mb-4">
                <p>
                  Nhà hàng Vista mang đến cho du khách những trải nghiệm ẩm thực
                  đặc sắc với những món ăn phong phú từ quốc tế, Việt Nam đến
                  những món đặc trưng xứ biển.
                </p>
              </ThemeWrapper>

              <ThemeWrapper className="text-gray-700 leading-relaxed mb-4">
                <p>
                  Nằm trong khuôn viên The Cliff Resort tọa lạc trên dốc đá
                  thoai thoải nhẹ nhàng. Nhà hàng sở hữu tầm nhìn toàn cảnh
                  tuyệt đẹp ra biển xanh, vị trí đắc địa và sang trọng bậc nhất
                  Bình Thuận.
                </p>
              </ThemeWrapper>
              <ThemeWrapper className="text-gray-700 leading-relaxed">
                <p>
                  Tại đây có khu vực ngồi trong nhà và ngoài trời với sức chứa
                  lên đến 200 - 300 khách, bạn có thể lựa chọn tuỳ sở thích
                </p>
              </ThemeWrapper>
            </ThemeWrapper>

            <ThemeWrapper className="relative group">
              <img
                src="https://mediawinwin.vn/upload/images/sanpham/bao-gia-chup-mon-an-dich-vu-chup-anh-do-an-chuyen-nghiep-5.JPG"
                alt="Giới thiệu"
                className="w-full h-auto rounded shadow-md"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setOpen(true)}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-500 text-white text-xl md:text-2xl flex items-center justify-center shadow-lg hover:bg-red-600 transition duration-200"
                >
                  <PlayCircleOutlined />
                </button>
              </div>
            </ThemeWrapper>
          </ThemeWrapper>

          <Modal
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            centered
            width="90%"
            style={{ maxWidth: 800 }}
          >
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded"
                src="https://www.youtube.com/embed/zc3A_CxSyc4"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Modal>
        </ThemeWrapper>
      </ThemeWrapper>

      <ThemeWrapper className="step-booking !py-8">
        <ThemeWrapper className="py-8 md:py-16 bg-white ">
          <ThemeWrapper className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 pb-5">
            <h2>
              5 BƯỚC ĐỂ ĐẶT TIỆC
            </h2>
          </ThemeWrapper>

          <ThemeWrapper className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 text-center !px-40 !px-0">
            {steps.map((step, index) => (
              <ThemeWrapper key={index} className="flex flex-col items-center">
                <ThemeWrapper className="bg-gray-100 w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </ThemeWrapper>
                <ThemeWrapper className="w-8 h-8 md:w-10 md:h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold mb-2 text-sm md:text-base">
                  {index + 1}
                </ThemeWrapper>
                <ThemeWrapper className="text-xs md:text-sm font-semibold text-gray-800 uppercase mb-1">
                  {step.title}
                </ThemeWrapper>
                <ThemeWrapper className="text-xs md:text-sm text-gray-600">
                  {step.desc}
                </ThemeWrapper>
              </ThemeWrapper>
            ))}
          </ThemeWrapper>
        </ThemeWrapper>
      </ThemeWrapper>

      <ThemeWrapper className="booking !my-10">
        <ThemeWrapper className="relative">
          <img
            className="w-full h-[200px] md:h-[33vh] brightness-50 object-cover"
            src={image_banner_1}
          />
          <div className="booking-overlay absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-white px-4 md:px-5 py-8 md:py-0">
            <div className="booking-items w-full md:w-1/4 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold mb-2">
                ĐẶT TIỆC NGAY TẠI ĐÂY
              </h3>
              <p className="text-sm md:text-base">
                Đặt tiệc ngay hôm nay để những sự kiện quan trọng của bạn trở
                nên đơn giản và dễ dàng hơn bao giờ hết
              </p>
            </div>
            <div className="booking-items w-full md:w-1/4">
              <div className="booking-date flex flex-col gap-2">
                <div className="booking-date-title text-center">
                  <h3 className="text-sm md:text-base font-semibold">
                    CHỌN NGÀY ĐẶT
                  </h3>
                </div>
                <div className="booking-date-input text-lg md:text-2xl text-center">
                  <input
                    className="w-full md:w-45 text-center p-2 rounded"
                    type="date"
                    value={dateNow}
                    onChange={(e) => {
                      setDateNow(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div className="booking-items w-full md:w-1/4">
              <div className="booking-qty flex flex-col gap-2">
                <div className="booking-qty-title text-center">
                  <h3 className="text-sm md:text-base font-semibold">
                    SỐ BÀN TIỆC
                  </h3>
                </div>
                <div className="booking-qty-input text-3xl md:text-5xl text-center">
                  <input
                    className="w-full md:w-15 text-center p-2 rounded"
                    type="number"
                    value={qtyBooking}
                    onChange={(e) => {
                      setQtyBooking(Number(e.target.value));
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div className="booking-items w-full md:w-1/4 flex flex-col items-center gap-3">
              <Link to="/place-order" className="w-full md:w-auto">
                <Button className="btn-booking w-full md:w-auto !border-none !rounded-none p-3 md:p-4 !bg-yellow-600 !font-bold text-white hover:scale-105 text-sm md:text-base">
                  ĐẶT TIỆC NGAY
                </Button>
              </Link>
              <Link to="/menu" className="w-full md:w-auto">
                <Button className="btn-menu w-full md:w-auto !rounded-none p-3 md:p-4 bg-transparent !font-bold text-white hover:scale-105 hover:border-yellow-700 text-sm md:text-base">
                  XEM THỰC ĐƠN
                </Button>
              </Link>
            </div>
          </div>
        </ThemeWrapper>
      </ThemeWrapper>

      <ThemeWrapper className="menu-options mb-4 px-4 md:!px-30 !py-10 md:!py-20 flex flex-col lg:flex-row !gap-6 md:!gap-10 bg-gray-100">
        <div className="option-items text-center w-full lg:w-1/3 gap-4">
          <div className="sevice-option bg-yellow-900 p-4 md:p-2 text-white">
            <h3 className="text-lg md:text-xl font-bold mb-4">
              Dịch vụ cung cấp
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 p-0">
              <li className="bg-yellow-100 hover:bg-yellow-300 text-yellow-800 font-semibold py-3 px-3 md:px-5 rounded-xl shadow transition duration-300 cursor-pointer text-sm md:text-base">
                Tiệc tại gia
              </li>
              <li className="bg-yellow-100 hover:bg-yellow-300 text-yellow-800 font-semibold py-3 px-3 md:px-5 rounded-xl shadow transition duration-300 cursor-pointer text-sm md:text-base">
                Tiệc cưới hỏi
              </li>
              <li className="bg-yellow-100 hover:bg-yellow-300 text-yellow-800 font-semibold py-3 px-3 md:px-5 rounded-xl shadow transition duration-300 cursor-pointer text-sm md:text-base">
                Tiệc buffet
              </li>
              <li className="bg-yellow-100 hover:bg-yellow-300 text-yellow-800 font-semibold py-3 px-3 md:px-5 rounded-xl shadow transition duration-300 cursor-pointer text-sm md:text-base">
                Tiệc sự kiện
              </li>
              <li className="bg-yellow-100 hover:bg-yellow-300 text-yellow-800 font-semibold py-3 px-3 md:px-5 rounded-xl shadow transition duration-300 cursor-pointer text-sm md:text-base">
                Tiệc tea break
              </li>
              <li className="bg-yellow-100 hover:bg-yellow-300 text-yellow-800 font-semibold py-3 px-3 md:px-5 rounded-xl shadow transition duration-300 cursor-pointer text-sm md:text-base">
                Tiệc sinh nhật
              </li>
            </ul>
          </div>
          <div className="contact-option bg-orange-400 p-4 md:p-2 mt-4 md:mt-2.5">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Liên hệ chúng tôi
            </h3>
            <p className="text-sm md:text-base">
              Địa chỉ: 298 Đường Cầu Diễn, Quận Bắc Từ Liêm <br /> Hotline:
              0982723221
            </p>
          </div>
        </div>

        <div className="relative text-center w-full lg:w-1/3 overflow-hidden group h-64 md:h-auto">
          <img
            src={image_banner_1}
            className="w-full h-full object-cover brightness-50 transform group-hover:scale-110 transition duration-500 ease-in-out"
            alt="Banner"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-lg md:text-xl font-semibold">SET MENU</h3>
            <Link
              to="/menu"
              className="text-white underline hover:text-yellow-400 mt-2 text-sm md:text-base"
            >
              Xem chi tiết
            </Link>
          </div>
        </div>

        <div className="relative option-items text-center w-full lg:w-1/3 overflow-hidden group h-64 md:h-auto">
          <img
            src={image_banner_2}
            className="w-full h-full object-cover brightness-50 transform group-hover:scale-110 transition duration-500 ease-in-out"
            alt="Banner"
          />
          <div className="absolute w-full flex flex-col text-white inset-0 items-center justify-center">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">MENU TỰ CHỌN</h3>
            </div>
            <Link to="/menu" className="text-white text-sm md:text-base">
              Xem chi tiết
            </Link>
          </div>
        </div>
      </ThemeWrapper>

      <ThemeWrapper className="reasons my-5 px-4 md:px-30">
        <h3 className="text-center p-4 text-xl md:text-2xl font-bold mb-6">
          TẠI SAO NÊN CHỌN CHÚNG TÔI?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {reasons.map((item, index) => (
            <ThemeWrapper key={index} className="flex flex-col text-center gap-3">
              <img
                src={item.imgUrl}
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
              <ThemeWrapper>
                <h5 className="uppercase font-semibold text-sm md:text-base mb-2">
                  {item.title}
                </h5>
                <ThemeWrapper className="text-sm md:text-base text-gray-600">
                  <p >
                    {item.desc}
                  </p>
                </ThemeWrapper>
              </ThemeWrapper>
            </ThemeWrapper>
          ))}
        </div>
      </ThemeWrapper>
    </ThemeWrapper>
  );
};
