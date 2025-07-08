import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

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
    <Link to={`/product-details/${id}`}>
      <Card
        className="rounded-lg shadow-md transition duration-300 hover:shadow-xl border border-gray-100"
        style={{ width: 280, height: "100%" }}
        cover={
          <img
            alt={title}
            src={image[0]}
            className="h-[180px] object-cover rounded-t-lg"
          />
        }
      >
        <div className="flex flex-col h-full justify-between">
          <Meta
            title={
              <h2 className="text-lg font-semibold text-amber-900 truncate">
                {title}
              </h2>
            }
            description={
              <p className="text-sm text-gray-600 line-clamp-3 mt-1">
                {description}
              </p>
            }
          />

          <div className="mt-4 space-y-1 text-sm text-gray-700">
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

          <button className="!px-6 py-2 !bg-yellow-600 !text-white rounded hover:!bg-yellow-700">
            Xem chi tiết
          </button>
        </div>
      </Card>
    </Link>
  );
};
