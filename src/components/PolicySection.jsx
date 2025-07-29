import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const PolicySection = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="!space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="!border !border-amber-200 !rounded-lg !overflow-hidden !shadow-sm !hover:shadow-md !transition-shadow !duration-300"
        >
          <button
            onClick={() => toggle(index)}
            className="!w-full !px-6 !py-4 !text-left !font-semibold !text-amber-900 !bg-gradient-to-r from-amber-50 to-orange-50 hover:!from-amber-300 hover:!to-orange-100 focus:!outline-none focus:!ring-2 focus:!ring-amber-300 !transition-all !duration-200"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg flex items-center">
                <span className="!w-8 !h-8 !bg-amber-600 text-white !rounded-full flex items-center justify-center text-sm !font-bold !mr-3">
                  {index + 1}
                </span>
                {item.title}
              </span>
              <span className="!text-2xl !text-amber-600 !font-bold !transform !transition-transform !duration-200">
                {openIndex === index ? (<AiOutlineArrowLeft/>) : (<AiOutlineArrowRight />)}
              </span>
            </div>
          </button>
          {openIndex === index && (
            <div className="!px-6 !py-5 !bg-white !border-t !border-amber-100">
              <div className="!text-gray-700 !leading-relaxed !whitespace-pre-line">
                {item.content}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
