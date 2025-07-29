import React from "react";

export const ProfileUser = ({ item }) => {
  return (
    <>
      <div className="!max-w-xl !mx-auto !my-10 p-4 border rounded shadow">
        <h2 className="text-xl font-bold !mb-4">Thông tin người dùng</h2>
        <div className="flex items-center justify-center">
          <img className="h-[300px]" src={item.image} alt={item.firstName} />
        </div>

        <p>
          <strong>Họ tên:</strong> {item.firstName} {item.lastName}
        </p>
        <p>
          <strong>Email:</strong> {item.email}
        </p>
        <p>
          <strong>Tài khoản:</strong> {item.username}
        </p>
      </div>
    </>
  );
};
