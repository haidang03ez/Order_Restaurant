import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useProduct } from "../hooks/useProduct";

export const ProductDetailsPage = () => {
  const { id } = useParams();

  const { productDetails, loadProductDetails, loading } = useProduct();

  useEffect(() => {
    if (id) {
      loadProductDetails(id);
    }
  }, [id]);

  if (loading || !productDetails) {
    return <p className="text-center mt-10">Đang tải dữ liệu...</p>;
  }

  return (
    <div className="container flex flex-col mx-auto px-4 !py-8">
      <div className="gap-10 flex items-start">
        <img
          src={productDetails.thumbnail}
          alt={productDetails.title}
          className="w-1/2 h-1/2 object-cover "
        />

        <div className="p-5">
          <h1 className="text-3xl font-bold mb-4">{productDetails.title}</h1>
          <p className="text-gray-700 mb-4">{productDetails.description}</p>

          <p>
            <strong>Giá:</strong> {productDetails.price.toLocaleString()} VND
          </p>
          <p>
            <strong>Danh mục:</strong> {productDetails.category}
          </p>
          <p>
            <strong>Thương hiệu:</strong> {productDetails.brand}
          </p>
          <p>
            <strong>Đánh giá:</strong> {productDetails.rating} ⭐
          </p>
          <p>
            <strong>Còn lại:</strong> {productDetails.stock} sản phẩm
          </p>

          <button
            className="!px-6 py-2 !bg-yellow-600 !text-white rounded hover:!bg-yellow-700"
            // onClick={() => {
            //   handleAddToCart(product);
            // }}
          >
            Thêm món
          </button>
        </div>
      </div>
      {productDetails.reviews?.length > 0 && (
        <div className="mt-12 p-5">
          <h2 className="text-2xl font-semibold mb-4">
            Đánh giá từ khách hàng
          </h2>
          <div className="space-y-4 ">
            {productDetails.reviews.map((review, index) => (
              <div
                key={index}
                className="grid md:grid-cols-4 gap-3 border border-gray-200 rounded p-4 bg-gray-50 mt-2"
              >
                <p className="text-lg font-semibold">{review.reviewerName}</p>
                <p className="text-yellow-600 mb-1">⭐ {review.rating}/5</p>
                <p className="text-gray-700 italic">"{review.comment}"</p>
                <p className="text-sm text-gray-500 mt-1">
                  Ngày đánh giá:{" "}
                  {new Date(review.date).toLocaleDateString("vi-VN")}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};
