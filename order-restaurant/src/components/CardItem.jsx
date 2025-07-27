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
    // <ThemeWrapper>
    //   <Card
    //     className="rounded-lg shadow-md transition duration-300 hover:shadow-xl border border-gray-100 h-full"
    //     style={{ width: "100%" }}
    //     cover={
    //       <img
    //         alt={title}
    //         src={image}
    //         className="h-[150px] sm:h-[180px] object-cover rounded-t-lg pt-2 px-2"
    //       />
    //     }
    //   >
    //     <ThemeWrapper className=" flex flex-col h-full justify-between">
    //       <Link to={`/product-details/${id}`}>
    //         <Meta
    //           title={
    //             <ThemeWrapper>
    //               <h2 className="text-base md:text-lg font-semibold text-amber-900 truncate">
    //                 {title}
    //               </h2>
    //             </ThemeWrapper>
    //           }
    //           description={
    //             <ThemeWrapper>
    //               <p className="text-xs md:text-sm text-gray-600 line-clamp-3 mt-1">
    //                 {description}
    //               </p>
    //             </ThemeWrapper>
    //           }
    //         />

    //         <ThemeWrapper className="mt-3 md:mt-4 space-y-1 text-xs md:text-sm text-gray-700">
    //           <p>
    //             <strong>Giá:</strong> {price.toLocaleString()} VND
    //           </p>
    //           <p>
    //             <strong>Đánh giá:</strong> {rating} ⭐
    //           </p>
    //           <p>
    //             <strong>Loại:</strong> {category}
    //           </p>
    //         </ThemeWrapper>

    //         <button className="w-full !px-4 md:!px-6 py-2 !bg-yellow-600 !text-white rounded hover:!bg-yellow-700 transition-colors text-sm md:text-base mt-3">
    //           Xem chi tiết
    //         </button>
    //       </Link>
    //     </ThemeWrapper>
    //   </Card>
    // </ThemeWrapper>

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
