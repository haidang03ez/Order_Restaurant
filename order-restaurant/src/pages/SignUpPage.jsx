import React, { useState } from "react";
import image_banner_1 from "../assets/image_banner_1.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "antd";

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const onSubmit = (data) => {
    console.log("Dữ liệu gửi đi:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex w-[900px] max-w-full">
        <div className="w-full md:w-1/2 p-10 px-5 py-5">
          <h2 className="text-3xl font-bold text-center mb-8">Đăng ký</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-1 font-semibold">Tên đăng nhập</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-base"
                {...register("username", {
                  required: "Không bỏ trống tên đăng nhập",
                  minLength: { value: 5, message: "Tối thiểu 5 ký tự" },
                })}
              />

              {errors.username && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            <label className="block mt-4 mb-1 font-semibold">Mật khẩu</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-base"
                {...register("password", {
                  required: "Vui lòng nhập mật khẩu",
                  minLength: { value: 8, message: "Tối thiểu 8 ký tự" },
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-sm text-gray-600"
                onClick={() => {
                  setShowPass(!showPass);
                }}
              >
                {showPass ? "Ẩn" : "Hiện"}
              </button>

              {errors.password && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <label className="block mt-4 mb-1 font-semibold">
              Xác nhận mật khẩu
            </label>
            <div className="relative mb-3">
              <input
                type={showConfirmPass ? "text" : "password"}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-base pr-10"
                {...register("confirmPassword", {
                  required: "Vui lòng nhập xác nhận mật khẩu",
                  validate: (value) =>
                    value === watch("password") || "Mật khẩu không khớp",
                })}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute right-3 top-2 text-sm text-gray-600"
              >
                {showConfirmPass ? "Ẩn" : "Hiện"}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 !rounded-sm text-white py-2 mt-6 rounded-lg text-lg hover:bg-yellow-700 transition-colors"
            >
              Đăng ký
            </button>

            <p className="text-center mt-4">
              Bạn đã có tài khoản? |
              <Link to="/sign-in" className="!text-yellow-600 hover:underline">
                Đăng nhập
              </Link>
            </p>
          </form>
        </div>

        <div
          className="relative w-1/2 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: `url(${image_banner_1})` }}
        >
        </div>
      </div>
    </div>
  );
};
