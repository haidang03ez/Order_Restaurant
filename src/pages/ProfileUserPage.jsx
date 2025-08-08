import React, { useEffect } from "react";
import { getUserDetails } from "../redux/actions/userActions";
import {
  EnvironmentOutlined,
  ShoppingCartOutlined,
  TagsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import { ProfileUser } from "../components/Profile/ProfileUser";
import { AddressUser } from "../components/Profile/AddressUser";
import { useDispatch, useSelector } from "react-redux";

export const ProfileUserPage = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.userDetails);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch, token]);

  if (loading) return <div>Đang tải thông tin người dùng...</div>;

  if (!user) return <div>Không thể hiển thị thông tin người dùng.</div>;

  return (
    <>
      <div className="container !my-10 p-4 border rounded shadow">
        <Tabs
          defaultActiveKey="1"
          tabPosition="left"
          items={[
            {
              key: "1",
              label: (
                <>
                  <UserOutlined /> Thông tin cá nhân
                </>
              ),
              children: <ProfileUser item={user} />,
            },
            {
              key: "2",
              label: (
                <>
                  <EnvironmentOutlined /> Cài đặt địa chỉ
                </>
              ),
              children: <AddressUser item={user} />,
            },
            {
              key: "3",
              label: (
                <>
                  <ShoppingCartOutlined /> Quản lý đơn hàng
                </>
              ),
              children: <AddressUser item={user} />,
            },
            {
              key: "4",
              label: (
                <>
                  <TagsOutlined /> Voucher đã lưu
                </>
              ),
              children: <AddressUser item={user} />,
            },
          ]}
        />
      </div>
    </>
  );
};
