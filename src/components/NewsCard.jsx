import React from "react";
import { AiOutlineDislike, AiOutlineEye, AiOutlineLike } from "react-icons/ai";

export const NewsCard = ({ item }) => {
  return (
    <div className="relative border rounded-lg p-4 shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      {item.tags && (
        <div className="flex gap-2 py-2">
          {item.tags.map((tag, index) => (
            <div key={index}>
              <div className="px-2 border rounded font-semibold">{tag}</div>
            </div>
          ))}
        </div>
      )}

      <p className="pb-3">{item.body}</p>

      <div className="absolute bottom-4 right-4 flex justify-between">
        <div className="flex gap-4">
          <button className="flex items-center rounded gap-1 hover:!bg-blue-400 hover:text-white transition p-1">
            <AiOutlineLike />
            {item.reactions.likes}
          </button>
          <button className="flex items-center rounded gap-1 hover:!bg-red-400 hover:text-white transition p-1">
            <AiOutlineDislike />
            {item.reactions.dislikes}
          </button>
          <p className="flex items-center gap-1 m-0">
            <AiOutlineEye />
            {item.views}
          </p>
          <p className="flex items-center gap-1 m-0">Đăng bởi: {item.userId}</p>
        </div>
      </div>
    </div>
  );
};
