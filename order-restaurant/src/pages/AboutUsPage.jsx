import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import image_banner_2 from "../assets/image_banner_2.png";
import { ThemeWrapper } from "../components/ThemeWrapper";

const serItem = [
  {
    title: "TIỆC TẠI GIA",
    desc: "Tiết kiệm thời gian cho bữa tiệc ấm cúng, dành trọn khoảnh khắc sum vầy bên người thân yêu - Bạn chỉ cần lựa chọn thực đơn yêu thích, Tiệc tại gia sẽ mang trải nghiệm trọn vẹn đến với gia đình",
  },
  {
    title: "TIỆC CƯỚI HỎI",
    desc: "Sự kiện đặc biệt, không thể thiếu đội ngũ tận tâm. Với thực đơn phong phú từ truyền thống tới hiện đại, cùng đội ngũ phục vụ chuyên nghiệp, Tiệc tại gia sẽ đồng hành cùng bạn và gia đình trong ngày vui một cách trọn vẹn nhất",
  },
  {
    title: "TIỆC BUFFET",
    desc: "Tiệc buffet với nhiều lựa chọn thực đơn đa dạng dành cho các sự kiện lớn nhò, từ các hoạt động mở và có nhiều thời gian như gala dinner đến liên hoan nội bộ hay tiệc gia đình.",
  },
  {
    title: "TIỆC SỰ KIỆN",
    desc: "Tiệc tại gia sẽ giúp bạn lo chu toàn các sự kiện lớn cho công ty, hội thảo cần sự chìn chu từ khâu chuẩn bị tới quy trình phục vụ chuyên nghiệp, đảm bảo hài lòng mọi khách hàng tham dự",
  },
  {
    title: "TIỆC TEA BREAK",
    desc: "Tea break được tổ chức dưới hình thức tiệc đứng với trà, bánh ngọt, và hoa quả, diễn ra vào giữa giờ giải lao của các buổi hội nghị, khai trương,... giúp khách mời có khoảng thời gian thư giãn trước khi tiếp tục tham dự sự kiện.",
  },
  {
    title: "TIỆC TEA BREAK",
    desc: "Tea break được tổ chức dưới hình thức tiệc đứng với trà, bánh ngọt, và hoa quả, diễn ra vào giữa giờ giải lao của các buổi hội nghị, khai trương,... giúp khách mời có khoảng thời gian thư giãn trước khi tiếp tục tham dự sự kiện.",
  },
];

export const AboutUsPage = () => {
  return (
    <ThemeWrapper className="about-me-page my-5">
      <div className="video-intro flex px-5">
        <div className="aboutus-title flex flex-col w-1/2 p-2 gap-3">
          <h1 className="uppercase">sự lựa chọn ẩm thực số 1</h1>
          <Link to="/gallery">
            <Button className="!bg-orange-600 !text-white !font-semibold !px-4 !py-5 hover:!bg-orange-700 hover:!scale-110 !rounded-none">
              Xem hình ảnh tiệc
            </Button>
          </Link>
        </div>
        <div className="aboutus-video">
          <div className="w-full flex justify-center mt-10 px-4 flex-col gap-4">
            <div className="w-full md:w-[800px] aspect-video rounded-xl overflow-hidden shadow-lg ">
              <iframe
                className="w-full h-full items-center"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Giới thiệu dịch vụ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div>
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
          </div>
        </div>
      </div>

      <div className="relative mt-4">
        <img
          src={image_banner_2}
          alt="Image"
          className="w-full h-[350px] object-cover brightness-30"
        />
        <div className="absolute flex flex-col gap-20 inset-0 p-5 text-white uppercase">
          <h1>Tiệc chất tại gia</h1>
          <div className="flex gap-2">
            <div className="w-1/4">
              <h2>90 +</h2>
              <p>Mán ăn đa dạng</p>
            </div>
            <div className="w-1/4">
              <h2>15 +</h2>
              <p>Set menu tiêu chuẩn</p>
            </div>
            <div className="w-1/4">
              <h2>20 +</h2>
              <p>Năm kinh nghiệm</p>
            </div>
            <div className="w-1/4">
              <h2>200 +</h2>
              <p>Nhân viên chuyên nghiệp</p>
            </div>
          </div>
        </div>
      </div>

      <div className="service-provide my-4 !p-10 !px-15 md:px-40">
        <h1 className="uppercase text-center mb-5 text-2xl font-bold">
          Dịch vụ cung cấp
        </h1>

        <div className="flex flex-wrap">
          {serItem.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 px-5 py-4">
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ThemeWrapper>
  );
};
