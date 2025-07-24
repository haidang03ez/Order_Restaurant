import React, { createContext, useEffect, useState } from "react";
import {
  fetchProductList,
  fetchSearchProduct,
} from "../services/productService";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;

  // Get all product
  const loadProductList = async (page = 1) => {
    try {
      const skip = (page - 1) * pageSize;
      const checkSearch =
        searchKeyword.trim() === "" ? fetchProductList : fetchSearchProduct;
      const res = await checkSearch({
        q: searchKeyword,
        limit: pageSize,
        skip,
      });
      setProducts(res.data.products);
      setTotal(res.data.total);
      setCurrentPage(page);
    } catch (err) {
      console.log("Lỗi lấy danh sách sản phẩm: ", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setLoading(true);
    loadProductList(page);
  };

  // Search product by name
  useEffect(() => {
    setLoading(true);
    loadProductList(1);
  }, [searchKeyword]);

  useEffect(() => {
    setLoading(true);
    loadProductList();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        total,
        currentPage,
        pageSize,
        handlePageChange,
        searchKeyword,
        setSearchKeyword,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
