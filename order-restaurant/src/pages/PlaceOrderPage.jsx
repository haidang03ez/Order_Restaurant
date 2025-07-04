import React, { useState } from "react";
import "../index.css";

export const PlaceOrderPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    quantity: "",
    date: "",
    typeEvent: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      console.log(formData);
      alert(
        "Cảm ơn bạn đã gửi thông tin đặt tiệc thành công! Bao gồm:\n" +
          `Họ và tên: ${formData.name}\n` +
          `Số điện thoại: ${formData.phone}\n` +
          `Địa chỉ: ${formData.address}\n` +
          `Số lượng khách: ${formData.quantity}\n` +
          `Ngày tổ chức: ${formData.date}\n` +
          `Loại sự kiện: ${formData.typeEvent}\n` +
          "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất."
      );

      setFormData({
        name: "",
        phone: "",
        address: "",
        quantity: "",
        date: "",
        typeEvent: "",
      });
      setIsChecked(false);
    } else {
      alert("Vui lòng chọn nhận tư vấn trọn gói sự kiện để gửi thông tin.");
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://media.gettyimages.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=2048x2048&w=gi&k=20&c=Qkrzd6gmhPehu7vqwaqcztKX_cSLIo0EhePAjQjmdaE="
          alt="background"
          className="w-full h-full object-cover brightness-50 blur-sm"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 !p-20 rounded-xl shadow-2xl w-[90%] max-w-5xl">
        <h2 className="uppercase font-bold text-3xl text-center text-gray-800 mb-4">
          Liên hệ đặt tiệc
        </h2>

        <p className="text-center text-gray-600 mb-6 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry type and scrambled it to make a type specimen book. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập họ và tên"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-medium mb-1">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập số điện thoại"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="address" className="block font-medium mb-1">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập địa chỉ"
                  required
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div>
                <label htmlFor="quantity" className="block font-medium mb-1">
                  Số lượng khách
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập số lượng khách"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="date" className="block font-medium mb-1">
                  Ngày tổ chức
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="typeEvent" className="block font-medium mb-1">
                  Loại sự kiện
                </label>
                <input
                  type="text"
                  id="typeEvent"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập loại sự kiện"
                  required
                  value={formData.typeEvent}
                  onChange={handleChange}
                />
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
              <span>
                Nhận tư vấn trọn gói sự kiện (MC, ánh sáng, sân khấu,...)
              </span>
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
      </div>
    </div>
  );
};
