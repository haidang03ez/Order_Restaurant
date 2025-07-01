import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlideBanner } from "./../components/SlideBanner";
import {
  PlayCircleOutlined,
  BookOutlined,
  FileTextOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";

export const HomePage = () => {
  const [open, setOpen] = useState(false);

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

  return (
    <div className="home-page">
      <section>
        <SlideBanner />
      </section>

      <section className="py-5">
        <div className="bg-gray-100 py-5 px-4 md:px-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tiệc tại gia chất nhà hàng
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

      <section className="my-4">
        <div className="py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            5 BƯỚC ĐỂ ĐẶT TIỆC
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-gray-100 w-28 h-28 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold mb-2">
                  {index + 1}
                </div>
                <h3 className="text-sm font-semibold text-gray-800 uppercase mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <p className="text-center text-gray-500 py-6">
        Enjoy delicious food delivered to your door.
      </p>
    </div>
  );
};
