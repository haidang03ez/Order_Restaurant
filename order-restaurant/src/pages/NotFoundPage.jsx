import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="container not-found-page mt-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        Trang không tồn tại
      </h2>
      <p className="text-gray-500 mb-6">
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa. 
        <br/> Anh em mình cứ thế thôi hẹ hẹ hẹ
      </p>
      <Link to="/">
        <button className="bg-yellow-600 text-white !px-6 py-3 rounded-xl hover:bg-yellow-900 transition transform hover:scale-105 shadow-lg">
          Quay về Trang chủ
        </button>
      </Link>
    </div>
  );
};
