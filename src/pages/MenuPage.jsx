import React, { useEffect, useState } from "react";
import { CardItem } from "./../components/CardItem";
import { SearchOutlined } from "@ant-design/icons";
import { ThemeWrapper } from "./../components/ThemeWrapper";
import { Pagination } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProduct,
  searchProduct,
  setPage,
  setSearchKeyword,
} from "../redux/actions/productActions";
import { debounce } from "lodash";

export const MenuPage = () => {
  const dispatch = useDispatch();
  const { products, currentPage, pageSize, total, searchKeyword } = useSelector(
    (state) => state.productList
  );

  const [inputValue, setInputValue] = useState("");
  const skip = (currentPage - 1) * pageSize;

  useEffect(() => {
    const debouncedSearch = debounce(() => {
      dispatch(setPage(1));
      dispatch(setSearchKeyword(inputValue));
      dispatch(
        searchProduct({
          skip: 0,
          limit: pageSize,
          q: inputValue,
        })
      );
    }, 500);

    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [inputValue]);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  useEffect(() => {
    if (searchKeyword === "") {
      dispatch(
        getAllProduct({
          skip,
          limit: pageSize,
        })
      );
    }
  }, [dispatch, currentPage, pageSize, searchKeyword]);

  useEffect(() => {
    return () => {
      dispatch(setPage(1));
      dispatch(setSearchKeyword(""));
    };
  }, []);

  return (
    <ThemeWrapper className="!container mx-auto py-4 md:py-8 px-4">
      <h1 className="text-3xl font-bold text-center !my-8 uppercase">
        Bạn chưa biết ăn gì? Chọn ngay nhé
      </h1>

      <div className="flex justify-center py-5">
        <div className="hidden md:flex items-center justify-between w-[20rem] border-b border-gray-400 pr-2">
          <input
            type="text"
            placeholder="Nhập tên món ăn"
            className="outline-none w-full border-none bg-transparent py-1 px-2 text-base  placeholder-gray-500"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div>
            {inputValue && (
              <button
                onClick={() => {
                  dispatch(setSearchKeyword(""));
                  dispatch(setPage(1));
                  setInputValue("");
                }}
                className="ml-2"
              >
                <AiOutlineClose className="text-lg text-gray-600" />
              </button>
            )}
          </div>
          <div className="bg-transparent text-black px-4 py-2 !rounded-md">
            <SearchOutlined className="text-lg text-gray-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 mt-4 p-5">
        {products.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.thumbnail}
            description={item.description}
            price={item.price}
            category={item.category}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={total}
          onChange={handlePageChange}
          className="mt-4 text-center "
        />
      </div>
    </ThemeWrapper>
  );
};
