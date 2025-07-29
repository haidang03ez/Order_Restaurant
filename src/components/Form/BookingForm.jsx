import React, { useState } from "react";
import "../../index.css";
import { useForm } from "react-hook-form";

export const BookingForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const updateData = { ...data, type: "Đặt bàn trước" };
    console.log(updateData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
        <div className="flex flex-col gap-3 md:gap-4 w-full lg:w-1/2">
          <div>
            <label
              htmlFor="name"
              className="block font-medium mb-1 text-sm md:text-base"
            >
              Họ và tên
            </label>
            <input
              type="text"
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              placeholder="Nhập họ và tên"
              {...register("username", {
                required: "Vui lòng nhập tên người đặt",
                minLength: { value: 5, message: "Tối thiểu 5 ký tự" },
              })}
            />
            {errors.username && (
              <p className="text-red-600 text-xs md:text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block font-medium mb-1 text-sm md:text-base"
            >
              Số điện thoại
            </label>
            <input
              type="tel"
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              placeholder="Nhập số điện thoại"
              {...register("phone", {
                required: "Vui lòng nhập số điện thoại",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Nhập đầy đủ 10 chữ số",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-600 text-xs md:text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="address"
              className="block font-medium mb-1 text-sm md:text-base"
            >
              Địa chỉ
            </label>
            <input
              type="text"
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              placeholder="Nhập địa chỉ"
              {...register("address", {
                required: "Vui lòng nhập địa chỉ",
              })}
            />
            {errors.address && (
              <p className="text-red-600 text-xs md:text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 w-full lg:w-1/2">
          <div>
            <label
              htmlFor="quantity"
              className="block font-medium mb-1 text-sm md:text-base"
            >
              Số lượng khách
            </label>
            <input
              type="number"
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              placeholder="Nhập số lượng khách"
              {...register("quantity", {
                required: "Vui lòng nhập số lượng",
                validate: (value) =>
                  parseInt(value) > 0 || "Số lượng phải lớn hơn 0",
              })}
            />
            {errors.quantity && (
              <p className="text-red-600 text-xs md:text-sm mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="date"
              className="block font-medium mb-1 text-sm md:text-base"
            >
              Ngày tổ chức
            </label>
            <input
              type="date"
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              {...register("date", {
                required: "Vui lòng chọn ngày đặt bàn",
              })}
            />
            {errors.date && (
              <p className="text-red-600 text-xs md:text-sm mt-1">
                {errors.date.message}
              </p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Loại sự kiện
            </label>
            <input
              type="text"
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              placeholder="Nhập loại sự kiện"
              {...register("typeEvent", {
                required: "Vui lòng chọn thể loại tiệc",
              })}
            />
            {errors.typeEvent && (
              <p className="text-red-600 text-xs md:text-sm mt-1">
                {errors.typeEvent.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <label
          htmlFor="checkbox"
          className="flex items-start !gap-2 mt-4 mb-4 text-gray-700 text-sm md:text-base"
        >
          <input
            type="checkbox"
            id="checkbox"
            className="w-4 h-4 mt-0.5"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <span className="!ml-2">
            Nhận tư vấn trọn gói sự kiện (MC, ánh sáng, sân khấu,...)
          </span>
        </label>

        <button
          type="submit"
          disabled={!isChecked}
          className={`!w-full md:!w-[300px] !px-4 md:!px-6 py-2 md:py-3 text-white font-semibold !rounded-md transition duration-300 text-sm md:text-base ${
            isChecked
              ? "bg-yellow-600 hover:bg-yellow-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Gửi thông tin
        </button>
      </div>
    </form>
  );
};
