import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { ThemeWrapper } from "./ThemeWrapper";
import { AiOutlineHeart } from "react-icons/ai";

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
  return (
    

    <ThemeWrapper>
      <div className="relative w-full max-w-xs rounded-2xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-105">
        <img
          src={image}
          alt={title || "Sản phẩm"}
          className="w-full h-[500px] object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent px-4 py-3 text-white">
          <div className="flex items-center gap-2 mb-1">
            <Link className="text-white" to={`/product-details/${id}`}>
              <h4 className="text-base md:text-lg !font-bold whitespace-normal break-words">
                {title || "Sản phẩm chưa có tên"}
              </h4>
            </Link>
          </div>

          <p className="text-sm text-gray-200 line-clamp-2">
            {description || "Mô tả đang cập nhật..."}
          </p>

          <div className="flex justify-around text-sm text-gray-300 mt-3 font-bold">
            <div className="flex flex-col items-center border-r !border-gray !pr-2">
              <div className="flex items-center gap-1 ">
                <span className="text-yellow-400">★</span>
                <span>{rating || 4.8}</span>
              </div>
              <p>Đánh giá</p>
            </div>
            <div className="flex flex-col items-center border-r !pr-2">
              <div>{price}</div>
              <p>Giá món</p>
            </div>
            <div className="flex flex-col items-center">
              <div>{category}</div>
              <p>Loại món</p>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 bg-yellow-600 text-white text-sm font-medium py-2 hover:opacity-90 transition !rounded-[50px]">
              <Link className="text-white" to={`/product-details/${id}`}>
                Xem chi tiết
              </Link>
            </button>
            <button className="p-2 bg-gray-700 hover:bg-gray-200  transition w-15 h-10 flex items-center justify-center !rounded-[50px]">
              <AiOutlineHeart className="text-white hover:!text-black" />
            </button>
          </div>
        </div>
      </div>
    </ThemeWrapper>
  );
};
