import React, { useState } from "react";
import image_banner_1 from "../assets/image_banner_1.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";

export const SignInPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState(false);

  const onSubmit = async () => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "emilys",
          password: "emilyspass",
          expiresInMins: 600, 
        }),
        // credentials: "include",
      });
      if (!res.ok) {
        throw new Error("Đăng nhập thất bại");
      }
      const result = await res.json();
      console.log("Đăng nhập thành công:", result);

      toast.success("Đăng nhập thành công!", {
        position: "top-center",
        autoClose: 2000,
      });

      login(result);
      navigate("/");
    } catch (err) {
      console.error("Lỗi đăng nhập:", err.message);
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col lg:flex-row w-full max-w-[900px]">
        <div
          className="w-full lg:w-1/2 h-48 lg:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${image_banner_1})` }}
        ></div>

        <div className="w-full lg:w-1/2 !p-6 !md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center !mb-6 md:mb-8">
            Đăng nhập
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-1 font-semibold text-sm md:text-base">
                Tên đăng nhập
              </label>
              <input
                type="text"
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Nhập tên đăng nhập"
                {...register("username", {
                  required: "Không bỏ trống tên đăng nhập",
                  minLength: { value: 5, message: "Tối thiểu 5 ký tự" },
                })}
              />
              {errors.username && (
                <p className="text-red-600 text-xs md:text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label className="block mb-1 font-semibold text-sm md:text-base">
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  placeholder="Nhập mật khẩu"
                  {...register("password", {
                    required: "Vui lòng nhập mật khẩu",
                    minLength: { value: 8, message: "Nhập tối thiểu 8 ký tự" },
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                >
                  {showPass ? "Ẩn" : "Hiện"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600 text-xs md:text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="my-3 flex gap-2 items-center">
              <input type="checkbox" className="w-4 h-4"></input>
              <label className="text-sm md:text-base">Ghi nhớ đăng nhập</label>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 !rounded-sm text-white py-2 md:py-3 mt-4 md:mt-6 rounded-lg text-base md:text-lg hover:bg-yellow-700 transition-colors"
            >
              Đăng nhập
            </button>

            <p className="text-center mt-3 text-sm md:text-base">
              Bạn chưa có tài khoản đăng nhập?
              <Link
                to="/sign-up"
                className="!text-yellow-600 !hover:underline ml-1"
              >
                | Đăng ký ngay
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
