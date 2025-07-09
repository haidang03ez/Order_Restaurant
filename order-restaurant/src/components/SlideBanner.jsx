import React from "react";
import { Carousel, Button } from "antd";
import image_banner_1 from "../assets/image_banner_1.png"
import image_banner_2 from "../assets/image_banner_2.png"
import image_banner_3 from "../assets/image_banner_3.png"

import { Link } from "react-router-dom";

const slideItem = [
  {
    title: "ƯU ĐÃI LÊN TỚI 30%",
    desc: "KHI ĐẶT SET MENU SUM VẦY",
    subDesc: "Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2021",
    btnLabel: "XEM CHI TIẾT ƯU ĐÃI",
    imgUrl: image_banner_1,
  },
  {
    title: "ƯU ĐÃI LÊN TỚI 30%",
    desc: "Nhân ngày phụ nữ Việt Nam",
    subDesc: "Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2021",
    btnLabel: "XEM CHI TIẾT ƯU ĐÃI",
    imgUrl: image_banner_2,
  },
  {
    title: "ƯU ĐÃI LÊN TỚI 30%",
    desc: "KHI ĐẶT SET MENU SUM VẦY",
    subDesc: "Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2021",
    btnLabel: "XEM CHI TIẾT ƯU ĐÃI",
    imgUrl: image_banner_3,
  },
];

export const SlideBanner = () => {
  return (
    <Carousel autoplay autoplaySpeed={2000} fade>
      {slideItem.map((item, index) => (
        <div key={index} className="relative h-[600px] w-full">
          <img
            src={item.imgUrl}
            alt={`slide-${index}`}
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
                {item.title}
              </h1>
              <h2 className="text-2xl mb-2 uppercase">{item.desc}</h2>
              <p className="text-sm mb-6">{item.subDesc}</p>
              <Link to='place-order'>
                <Button
                  type="primary"
                  size="large"
                  className="!bg-yellow-600 !p-7 !border-none hover:!bg-orange-700 hover:!scale-110 !font-semibold !rounded-none"
                >
                  {item.btnLabel}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
