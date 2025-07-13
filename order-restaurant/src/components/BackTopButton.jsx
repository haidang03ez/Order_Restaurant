import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export const BackTopButton = ({ idTop }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setShowButton(scroll > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-40 p-1 bottom-5 right-5 flex justify-end ${
        showButton ? "!opacity-900" : "!opacity-0 pointer-events-none"
      }`}
    >
      <a href={`#${idTop}`}>
        <button>
          <BsArrowUp className="bg-gray-300 rounded-[50%] p-2 w-[50px] h-[50px] text-gray-500 hover:scale-115 transition" />
        </button>
      </a>
    </div>
  );
};
