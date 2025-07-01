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
    <div className="container">
      <div className="background_thumbnail ">
        <img
          src="https://media.gettyimages.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=2048x2048&w=gi&k=20&c=Qkrzd6gmhPehu7vqwaqcztKX_cSLIo0EhePAjQjmdaE="
          alt="background"
          className="background_thumbnail--img"
        />
      </div>
      <div
        className="form_order"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
        }}
      >
        <div className="form_order--title">Liên hệ đặt tiệc</div>
        <div className="form_order--content">
          <div className="form_order--content-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry type and scrambled it to make a type specimen book.Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </div>
          <form className="form_order--content-form" onSubmit={handleSubmit}>
            <div className="form_infor d-flex gap-3">
              <div className="form_infor-group">
                <div className="form_infor--items">
                  <label htmlFor="name" className="form_infor-items--label">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form_infor-items--input"
                    placeholder="Nhập họ và tên"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form_infor--items">
                  <label htmlFor="phone" className="form_infor-items--label">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form_infor-items--input"
                    placeholder="Nhập số điện thoại"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form_infor--items">
                  <label htmlFor="address" className="form_infor-items--label">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="form_infor-items--input"
                    placeholder="Nhập địa chỉ"
                    required
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form_infor-group">
                <div className="form_infor--items">
                  <label htmlFor="quantity" className="form_infor-items--label">
                    Số lượng khách
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    className="form_infor-items--input"
                    placeholder="Nhập số lượng khách"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>

                <div className="form_infor--items">
                  <label htmlFor="date" className="form_infor-items--label">
                    Ngày tổ chức
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="form_infor-items--input"
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="form_infor--items">
                  <label
                    htmlFor="type_even"
                    className="form_infor-items--label"
                  >
                    Loại sự kiện
                  </label>
                  <input
                    type="text"
                    id="typeEvent"
                    className="form_infor-items--input"
                    placeholder="Nhập loại sự kiện"
                    required
                    value={formData.typeEvent}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <label htmlFor="checkbox" className="form_checkbox">
              <input
                type="checkbox"
                id="checkbox"
                className="form_checkbox--input"
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span className="form_checkbox--text">
                Nhận tư vấn trọn gói sự kiện (MC, ánh sáng, sân khẩu,...)
              </span>
            </label>
            <button
              className="btn btn-primary button_submit"
              type="submit"
              disabled={!isChecked}
            >
              Gửi thông tin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
