import React, { useEffect, useState } from "react";
import { CardItem } from "./../components/CardItem";
import { SearchOutlined } from "@ant-design/icons";
// import { ThemeWrapper } from "../components/ThemeWrapper";

export const MenuPage = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [product, setProduct] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [filterCategory, setFilterCategory] = useState("");
  const [searchProduct, setSearchProduct] = useState("");

  const LIMIT = 10;

  const getAllProducts = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      );
      if (!res.ok) {
        throw new Error("Không nhận được phẩn hồi");
      }
      const data = await res.json();
      const updatedAll = [...allProduct, ...data.products];

      // setProduct(productList);
      setAllProduct(updatedAll);
      setSkip((prev) => prev + LIMIT);

      if (!filterCategory) {
        setProduct(updatedAll);
      }

      if (skip + LIMIT > data.total) setHasMore(false);
    } catch (error) {
      console.log("Lỗi lấy dữ liệu: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  //filter product by category
  const handleFilterCategory = (category) => {
    setFilterCategory(category);
    const filteredProduct = allProduct.filter(
      (item) => item.category === category
    );
    setProduct(filteredProduct);
  };

  //filter product by name
  const handleFilterName = (name) => {
    const keyWord = name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

    setSearchProduct(name);
    if (!keyWord) {
      setProduct(allProduct);
      return;
    }

    const searchProduct = allProduct.filter((item) =>
      item.title?.toLowerCase().includes(keyWord)
    );
    setProduct(searchProduct);
  };

  const handleClearFilter = () => {
    setFilterCategory("");
    setProduct(allProduct);
    setHasMore(true);
  };

  const categoryList = product.map((item) => item.category);
  const uniqueCategoryList = Array.from(new Set(categoryList));

  return (
    <div className="!container mx-auto py-4 md:py-8 px-4">
      {/* <h1 className="text-3xl font-bold text-center !my-8 uppercase">
        Thực đơn
      </h1> */}

      {/* Search */}
      <div className="flex justify-center">
        <div className="hidden md:flex items-center justify-between w-[20rem] border-b border-gray-400 pr-2">
          <input
            type="text"
            placeholder="Nhập tên món ăn"
            className="outline-none w-full border-none bg-transparent py-1 px-2 text-base  placeholder-gray-500"
            onChange={(e) => {
              const value = e.target.value;
              setSearchProduct(value), handleFilterName(value);
            }}
          />
          <SearchOutlined className="text-lg text-gray-600" />
        </div>
      </div>

      {/* Tag */}
      <div className="sticky w-full top-[70px] md:top-[80px] z-10 backdrop-blur-sm py-2 bg-white/95">
        <div className="flex flex-wrap gap-2 my-2">
          <button
            className={`px-3 py-2 rounded-full font-medium text-sm md:text-base w-fit cursor-pointer transition-colors ${
              filterCategory === ""
                ? "bg-yellow-700 text-white"
                : "bg-slate-100 text-black hover:bg-slate-200"
            }`}
            onClick={handleClearFilter}
          >
            Tất cả
          </button>
          {uniqueCategoryList.map((item, index) => (
            <button
              key={index}
              className={`px-3 py-2 rounded-full font-medium text-sm md:text-base w-fit cursor-pointer transition-colors ${
                filterCategory === item
                  ? "bg-yellow-700 text-white"
                  : "bg-slate-100 text-black hover:bg-slate-200"
              }`}
              onClick={() => {
                handleFilterCategory(item);
                setHasMore(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
        {product.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.images}
            description={item.description}
            price={item.price}
            category={item.category}
            rating={item.rating}
          />
        ))}
      </div>

      {hasMore && (
        <div className="text-center !my-6">
          <button
            onClick={getAllProducts}
            className="!px-6 py-2 !bg-yellow-600 !text-white rounded hover:!bg-yellow-700 transition-colors"
            disabled={loading}
          >
            {loading ? "Đang tải..." : "Xem thêm"}
          </button>
        </div>
      )}
    </div>
  );
};
