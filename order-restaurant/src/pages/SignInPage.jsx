import React, { useState } from "react";
import image_banner_1 from "../assets/image_banner_1.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex w-[900px] max-w-full">
        <div
          className="w-1/2 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: `url(${image_banner_1})` }}
        ></div>

        <div className="w-full md:w-1/2 p-10 px-5 py-5">
          <h2 className="text-3xl font-bold text-center mb-8">Đăng nhập</h2>
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
                  minLength: { value: 8, message: "Nhập tối thiểu 8 ký tự" },
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

            <div className="my-3 flex gap-2">
              <input type="checkbox"></input>
              <label>Ghi nhớ đăng nhập</label>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 !rounded-sm text-white py-2 mt-6 rounded-lg text-lg hover:bg-yellow-700 transition-colors"
            >
              Đăng nhập
            </button>

            <p className="text-center mt-3">
              Bạn chưa có tài khoản đăng nhập?
              <Link to="/sign-up" className="!text-yellow-600 !hover:underline">
                | Đăng ký ngay
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
