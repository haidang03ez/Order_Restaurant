import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { ThemeWrapper } from "./ThemeWrapper";
// import { toast, ToastContainer } from "react-toastify";

const { Meta } = Card;

export const CardItem = ({
  id,
  title,
  image,
  description,
  price,
  category,
  rating,
}) => {
  // const handleAddToCart = (dish) => {
  //   const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  //   const indexItems = cartItems.findIndex((item) => item.id === dish.id);

  //   if (indexItems !== -1) {
  //     cartItems[indexItems].quantity += 1;
  //   } else {
  //     cartItems.push({ ...dish, quantity: 1 });
  //   }

  //   localStorage.setItem("cart", JSON.stringify(cartItems));

  //   toast.success("Đã thêm vào thực đơn!", {
  //     position: "top-right",
  //     autoClose: 1000,
  //   });
  // };

  return (
    <ThemeWrapper>
      <Card
        className="rounded-lg shadow-md transition duration-300 hover:shadow-xl border border-gray-100 h-full"
        style={{ width: "100%" }}
        cover={
          <img
            alt={title}
            src={image[0]}
            className="h-[150px] sm:h-[180px] object-cover rounded-t-lg"
          />
        }
      >
        <div className="flex flex-col h-full justify-between">
          <Link to={`/product-details/${id}`}>
            <Meta
              title={
                <h2 className="text-base md:text-lg font-semibold text-amber-900 truncate">
                  {title}
                </h2>
              }
              description={
                <p className="text-xs md:text-sm text-gray-600 line-clamp-3 mt-1">
                  {description}
                </p>
              }
            />

            <div className="mt-3 md:mt-4 space-y-1 text-xs md:text-sm text-gray-700">
              <p>
                <strong>Giá:</strong> {price.toLocaleString()} VND
              </p>
              <p>
                <strong>Đánh giá:</strong> {rating} ⭐
              </p>
              <p>
                <strong>Loại:</strong> {category}
              </p>
            </div>

            <button className="w-full !px-4 md:!px-6 py-2 !bg-yellow-600 !text-white rounded hover:!bg-yellow-700 transition-colors text-sm md:text-base mt-3">
              Xem chi tiết
            </button>
          </Link>

          {/* <button
          className="mt-2 !px-6 py-2 !bg-yellow-600 !text-white rounded hover:!bg-yellow-700"
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart({
              id,
              title,
              image: image[0],
              description,
              price,
              category,
              rating,
            });
          }}
        >
          Thêm món
        </button> */}
        </div>
        {/* <ToastContainer/> */}
      </Card>
    </ThemeWrapper>
  );
};
