import React from "react";
import { CalendarOutlined, TagsOutlined } from "@ant-design/icons";
import { BookingForm } from "../components/Form/BookingForm";
import { TakeAwayForm } from "../components/Form/TakeAwayForm";
import { Tabs } from "antd";

export const PlaceOrderPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://media.gettyimages.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=2048x2048&w=gi&k=20&c=Qkrzd6gmhPehu7vqwaqcztKX_cSLIo0EhePAjQjmdaE="
          alt="background"
          className="w-full h-full object-cover brightness-50 blur-sm"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 !p-20 rounded-xl shadow-2xl w-[90%] max-w-5xl">
        <h2 className="uppercase font-bold text-3xl text-center text-gray-800 mb-4">
          Liên hệ đặt tiệc
        </h2>

        <p className="text-center text-gray-600 mb-6 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry type and scrambled it to make a type specimen book. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s.
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
              label: "Mang về",
              icon: <TagsOutlined />,
              children: <TakeAwayForm />,
            },
          ]}
        />
      </div>
    </div>
  );
};
