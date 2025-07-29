import React, { useEffect, useState } from "react";
import { getUserDetails } from "../services/userService";
import { EnvironmentOutlined, ShoppingCartOutlined, TagsOutlined, UserOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { ProfileUser } from "../components/Profile/ProfileUser";
import { AddressUser } from "../components/Profile/AddressUser";

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
      <div className="container !my-10 p-4 border rounded shadow">
        <Tabs
          defaultActiveKey="1"
          tabPosition="left"
          className="[&_.ant-tabs-nav]:!mb-4 md:[&_.ant-tabs-nav]:!mb-6 [&_.ant-tabs-tab]:!px-3 md:[&_.ant-tabs-tab]:!px-6 [&_.ant-tabs-tab]:!py-1 md:[&_.ant-tabs-tab]:!py-2 [&_.ant-tabs-tab-active]:!bg-amber-200 [&_.ant-tabs-tab-active]:!text-white [&_.ant-tabs-tab]:!rounded-lg [&_.ant-tabs-tab]:!text-sm md:[&_.ant-tabs-tab]:!text-base"
          items={[
            {
              key: "1",
              label: "Thông tin cá nhân",
              icon: <UserOutlined />,
              children: <ProfileUser item={user} />,
            },
            {
              key: "2",
              label: "Cài đặt địa chỉ",
              icon: <EnvironmentOutlined />,
              children: <AddressUser item={user} />,
            },
            {
              key: "3",
              label: "Quản lý đơn hàng",
              icon: <ShoppingCartOutlined />,
              children: <AddressUser item={user} />,
            },
            {
              key: "4",
              label: "Voucher đã lưu",
              icon: <TagsOutlined />,
              children: <AddressUser item={user} />,
            },
          ]}
        >
          <h1>DDawng </h1>
        </Tabs>
      </div>
    </>
  );
};
