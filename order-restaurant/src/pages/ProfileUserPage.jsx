import React, { useEffect, useState } from "react";
import { getUserDetails } from "../services/userService";

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
  );
};
