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
    <div className="home-page">
      <section className="slider">
        <SlideBanner />
      </section>

      <section className="production py-5">
        <div className="bg-gray-100 py-5 px-4 md:px-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Con gì đang bơi chúng tôi đều có
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                quae fugit accusantium commodi esse modi pariatur praesentium,
                voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse
                repellat nobis sint.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                quae fugit accusantium commodi esse modi pariatur praesentium,
                voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse
                repellat nobis sint.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                quae fugit accusantium commodi esse modi pariatur praesentium,
                voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse
                repellat nobis sint.
              </p>
            </div>

            <div className="relative group">
              <img
                src="https://mediawinwin.vn/upload/images/sanpham/bao-gia-chup-mon-an-dich-vu-chup-anh-do-an-chuyen-nghiep-5.JPG"
                alt="Giới thiệu"
                className="w-full h-auto rounded shadow-md"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setOpen(true)}
                  className="w-14 h-14 rounded-full bg-red-500 text-white text-2xl flex items-center justify-center shadow-lg hover:bg-red-600 transition duration-200"
                >
                  <PlayCircleOutlined />
                </button>
              </div>
            </div>
          </div>

          <Modal
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            centered
            width={800}
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
        </div>
      </section>

      <section className="step-booking my-4">
        <div className="py-16 bg-white">
          <h2 className="!text-3xl !font-bold !text-center !mb-12 !text-gray-800">
            5 BƯỚC ĐỂ ĐẶT TIỆC
          </h2>
          <div className="!max-w-7xl !mx-auto !grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-gray-100 w-28 h-28 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold mb-2">
                  {index + 1}
                </div>
                <h5 className="text-sm font-semibold text-gray-800 uppercase mb-1">
                  {step.title}
                </h5>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="booking mt-4">
        <div className="relative">
          <img
            className="w-full h-[33vh] brightness-50 object-cover"
            src={image_banner_1}
          />
          <div className="booking-overlay absolute inset-0 flex items-center justify-center gap-10 text-white px-5">
            <div className="booking-items w-1/4">
              <h3>ĐẶT TIỆC NGAY TẠI ĐÂY</h3>
              <p>
                Đặt tiệc ngay hôm nay để những sự kiện quan trọng của bạn trở
                nên đơn giản và dễ dàng hơn bao giờ hết
              </p>
            </div>
            <div className="booking-items w-1/4">
              <div className="booking-date flex flex-col gap-2">
                <div className="booking-date-title text-center">
                  <h3>CHỌN NGÀY ĐẶT</h3>
                </div>
                <div className="booking-date-input text-2xl text-center">
                  <input
                    className="w-45"
                    type="date"
                    value={dateNow}
                    onChange={(e) => {
                      setDateNow(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div className="booking-items w-1/4">
              <div className="booking-qty flex flex-col gap-2">
                <div className="booking-qty-title text-center">
                  <h3>SỐ BÀN TIỆC</h3>
                </div>
                <div className="booking-qty-input text-5xl text-center">
                  <input
                    className="w-15"
                    type="number"
                    value={qtyBooking}
                    onChange={(e) => {
                      setQtyBooking(Number(e.target.value));
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div className="booking-items w-1/4 flex flex-col items-center gap-3">
              <Link to="/place-order">
                <Button className="btn-booking !border-none !rounded-none p-4 !bg-yellow-600 !font-bold text-white hover:scale-105">
                  ĐẶT TIỆC NGAY
                </Button>
              </Link>
              <Link to="/menu">
                <Button className="btn-menu  !rounded-none p-4 bg-transparent !font-bold text-white hover:scale-105 hover:border-yellow-700">
                  XEM THỰC ĐƠN
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-options mb-4 !px-30 !py-20 flex gap-10 bg-gray-100">
        <div className="option-items text-center w-1/3 gap-4">
          <div className="sevice-option bg-yellow-900 p-2 text-white">
            <h3>Dịch vụ</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 !pr-0 !pl-1">
              <li className="bg-yellow-100 hover:bg-yellow-300 text-yellow-800 font-semibold py-3 px-5 rounded-xl shadow transition duration-300 cursor-pointer">
                Tiệc tại gia
              </li>
              <li className="bg-yellow-100 hover:bg-yellow-300 text-yellow-800 font-semibold py-3 px-5 rounded-xl shadow transition duration-300 cursor-pointer">
                Tiệc cưới hỏi
              </li>
              <li className="bg-yellow-100 hover:bg-yellow-300 text-yellow-800 font-semibold py-3 px-5 rounded-xl shadow transition duration-300 cursor-pointer">
                Tiệc buffet
              </li>
              <li className="bg-yellow-100 hover:bg-yellow-300 text-yellow-800 font-semibold py-3 px-5 rounded-xl shadow transition duration-300 cursor-pointer">
                Tiệc sự kiện
              </li>
              <li className="bg-yellow-100 hover:bg-yellow-300 text-yellow-800 font-semibold py-3 px-5 rounded-xl shadow transition duration-300 cursor-pointer">
                Tiệc tea break
              </li>
              <li className="bg-yellow-100 hover:bg-yellow-300 text-yellow-800 font-semibold py-3 px-5 rounded-xl shadow transition duration-300 cursor-pointer">
                Tiệc sinh nhật
              </li>
            </ul>
          </div>
          <div className="contact-option bg-orange-400 p-2 !mt-2.5">
            <h3>Liên hệ</h3>
            <p>
              Address: abc@cmcglobal.vn <br /> Hotline: 0919319071
            </p>
          </div>
        </div>

        <div className="relative text-center w-1/3 overflow-hidden group">
          <img
            src={image_banner_1}
            className="w-full h-full object-cover brightness-50 transform group-hover:scale-110 transition duration-500 ease-in-out"
            alt="Banner"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-xl font-semibold">SET MENU</h3>
            <Link
              to="/menu"
              className="text-white underline hover:text-yellow-400 mt-2"
            >
              Xem chi tiết
            </Link>
          </div>
        </div>

        <div className="relative option-items text-center w-1/3 overflow-hidden group">
          <img
            src={image_banner_2}
            className="w-full h-full object-cover brightness-50 transform group-hover:scale-110 transition duration-500 ease-in-out"
            alt="Banner"
          />
          <div className="absolute w-full flex flex-col text-white inset-0 items-center justify-center">
            <div>
              <h3>MENU TỰ CHỌN</h3>
            </div>
            <Link to="/menu" className="text-white">
              Xem chi tiết
            </Link>
          </div>
        </div>
      </section>

      <section className="reasons my-5">
        <h3 className="text-center p-4 text-bold">
          TẠI SAO NÊN CHỌN CHÚNG TÔI?
        </h3>
        <div className=" flex gap-10 !px-30">
          {reasons.map((item, index) => (
            <div key={index} className="flex flex-col text-center gap-3 w-1/4">
              <img src={item.imgUrl} className="w-full h-full object-cover" />
              <div>
                <h5 className="uppercase">{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
