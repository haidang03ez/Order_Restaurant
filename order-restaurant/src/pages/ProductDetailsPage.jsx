import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Không lấy được sản phẩm");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Lỗi: ", err);
      } finally {
        setLoading(false);
      }
    };

    getProductDetails();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Đang tải dữ liệu...</p>;

  if (!product)
    return <p className="text-center mt-10">Không tìm thấy sản phẩm.</p>;

  return (
    <div className="container flex flex-col mx-auto px-4 !py-8">
      <div className="gap-10 flex items-start">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-1/2 h-1/2 object-cover "
        />

        <div className="p-5">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>

          <p>
            <strong>Giá:</strong> {product.price.toLocaleString()} VND
          </p>
          <p>
            <strong>Danh mục:</strong> {product.category}
          </p>
          <p>
            <strong>Thương hiệu:</strong> {product.brand}
          </p>
          <p>
            <strong>Đánh giá:</strong> {product.rating} ⭐
          </p>
          <p>
            <strong>Còn lại:</strong> {product.stock} sản phẩm
          </p>

          <button className="!px-6 py-2 !bg-yellow-600 !text-white rounded hover:!bg-yellow-700">
            Thêm món
          </button>
        </div>
      </div>
      {product.reviews?.length > 0 && (
        <div className="mt-12 p-5">
          <h2 className="text-2xl font-semibold mb-4">
            Đánh giá từ khách hàng
          </h2>
          <div className="space-y-4 ">
            {product.reviews.map((review, index) => (
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
    </div>
  );
};
