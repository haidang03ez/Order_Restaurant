import React from "react";
import { CalendarOutlined, TagsOutlined } from "@ant-design/icons";
import { BookingForm } from "../components/Form/BookingForm";
import { TakeAwayForm } from "../components/Form/TakeAwayForm";
import { Tabs } from "antd";
import imageBg from "../assets/image_banner_3.png";

export const PlaceOrderPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src={imageBg}
          alt="background"
          className="w-full h-full object-cover brightness-50 blur-sm"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 !p-20 rounded-xl shadow-2xl w-[90%] max-w-5xl">
        <h2 className="uppercase font-bold text-3xl text-center text-gray-800 mb-4">
          Liên hệ đặt tiệc
        </h2>

        <p className="text-center text-gray-600 mb-6 leading-relaxed">
          Quý khách có nhu cầu tổ chức tiệc tại nhà, công ty hay bất kỳ địa điểm
          nào đều có thể liên hệ với chúng tôi để được tư vấn và đặt món theo
          yêu cầu. Nhà hàng cam kết phục vụ thực đơn chất lượng, trang trí đẹp
          mắt và hỗ trợ giao hàng tận nơi nhanh chóng, đúng giờ.
        </p>

        <Tabs
          defaultActiveKey="2"
          centered
          className="[&_.ant-tabs-nav]:!mb-6 [&_.ant-tabs-tab]:!px-6 [&_.ant-tabs-tab]:!py-2 [&_.ant-tabs-tab-active]:!bg-amber-200 [&_.ant-tabs-tab-active]:!text-white [&_.ant-tabs-tab]:!rounded-lg"
          items={[
            {
              key: "1",
              label: "Đặt bàn trước",
              icon: <CalendarOutlined />,
              children: <BookingForm />,
            },
            {
              key: "2",
              label: "Giao tận cửa",
              icon: <TagsOutlined />,
              children: <TakeAwayForm />,
            },
          ]}
        />
      </div>
    </div>
  );
};
