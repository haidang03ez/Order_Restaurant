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
    const updateData = {...data, type: "Đặt bàn trước"}
    console.log(updateData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Họ và tên
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập họ và tên"
              {...register("username", {
                required: "Vui lòng nhập tên người đặt",
                minLength: { value: 5, message: "Tối thiểu 5 ký tự" },
              })}
            />
            {errors.username && (
              <p className="text-red-600 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block font-medium mb-1">
              Số điện thoại
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <p className="text-red-600 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="address" className="block font-medium mb-1">
              Địa chỉ
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập địa chỉ"
              {...register("address", {
                required: "Vui lòng nhập địa chỉ",
              })}
            />
            {errors.address && (
              <p className="text-red-600 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div>
            <label htmlFor="quantity" className="block font-medium mb-1">
              Số lượng khách
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập số lượng khách"
              {...register("quantity", {
                required: "Vui lòng nhập số lượng",
                validate: (value) =>
                  parseInt(value) > 0 || "Số lượng phải lớn hơn 0",
              })}
            />
            {errors.quantity && (
              <p className="text-red-600 text-sm mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="date" className="block font-medium mb-1">
              Ngày tổ chức
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("date", {
                required: "Vui lòng chọn ngày đặt bàn",
              })}
            />
            {errors.date && (
              <p className="text-red-600 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1">Loại sự kiện</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập loại sự kiện"
              {...register("typeEvent", {
                required: "Vui lòng chọn thể loại tiệc",
              })}
            />
            {errors.typeEvent && (
              <p className="text-red-600 text-sm mt-1">
                {errors.typeEvent.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <label
          htmlFor="checkbox"
          className="flex items-center !gap-2 mt-4 mb-4 text-gray-700"
        >
          <input
            type="checkbox"
            id="checkbox"
            className="w-4 h-4 "
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <span className="!ml-2">Nhận tư vấn trọn gói sự kiện (MC, ánh sáng, sân khấu,...)</span>
        </label>

        <button
          type="submit"
          disabled={!isChecked}
          className={`!w-[300px]  md:w-auto !px-6 py-2 text-white font-semibold !rounded-md transition duration-300 ${
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
