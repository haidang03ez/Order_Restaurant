import React, { useEffect, useState } from "react";

export const ProfileUserPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          //   credentials: "include",
        });

        const data = await res.json();

        if (res.ok) {
          setUser(data);
        } else {
          console.error("Lỗi khi lấy thông tin user:", data.message);
        }
      } catch (err) {
        console.error("Lỗi mạng:", err);
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
