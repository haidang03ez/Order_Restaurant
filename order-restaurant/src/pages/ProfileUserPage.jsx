import React, { useEffect, useState } from "react";
import { getUserDetails } from "../services/userService";
import { BookingForm } from "../components/Form/BookingForm";
import { TakeAwayForm } from "../components/Form/TakeAwayForm";
import { CalendarOutlined, TagsOutlined } from "@ant-design/icons";
import { Tabs } from "antd";

export const ProfileUserPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getUserDetails();
        setUser(res.data);
      } catch (err) {
        console.error("Không thể lấy thông tin user:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  if (loading) return <div>Đang tải thông tin người dùng...</div>;

  if (!user) return <div>Không thể hiển thị thông tin người dùng.</div>;

  return (
    <>
      <div className="!max-w-xl !mx-auto !my-10 p-4 border rounded shadow">
        <h2 className="text-xl font-bold !mb-4">Thông tin người dùng</h2>
        <div className="flex items-center justify-center">
          <img className="h-[300px]" src={user.image} alt={user.firstName} />
        </div>

        <p>
          <strong>Họ tên:</strong> {user.firstName} {user.lastName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Tài khoản:</strong> {user.username}
        </p>
      </div>
      <div className="container !my-10 p-4 border rounded shadow">
        <Tabs
        defaultActiveKey="1"
        centered
        className="[&_.ant-tabs-nav]:!mb-4 md:[&_.ant-tabs-nav]:!mb-6 [&_.ant-tabs-tab]:!px-3 md:[&_.ant-tabs-tab]:!px-6 [&_.ant-tabs-tab]:!py-1 md:[&_.ant-tabs-tab]:!py-2 [&_.ant-tabs-tab-active]:!bg-amber-200 [&_.ant-tabs-tab-active]:!text-white [&_.ant-tabs-tab]:!rounded-lg [&_.ant-tabs-tab]:!text-sm md:[&_.ant-tabs-tab]:!text-base"
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
          {
            key: "3",
            label: "Giao tận phố",
            icon: <TagsOutlined />,
            children: <TakeAwayForm />,
          },
          {
            key: "4",
            label: "Giao tận nhaf",
            icon: <TagsOutlined />,
            children: <TakeAwayForm />,
          },
        ]}
      />
      </div>
      
    </>
  );
};
