import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const handleRemoveToCart = (dishId) => {
    const updateCart = cartItems.filter((item) => item.id !== dishId);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    setCartItems(updateCart);

    toast.info("Xóa món khỏi thực đơn thành công!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const columns = [
    {
      title: "Ảnh món ăn",
      dataIndex: "images",
      key: "age",
      render: (images) => <img className="h-15 w-auto" src={images} />,
    },
    {
      title: "Tên món",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Số lượng món",
      dataIndex: "quantity",
      key: "quantity",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <button
            className="bg-red-400 p-2 rounded text-white hover:bg-red-600"
            onClick={() => handleRemoveToCart(record.id)}
          >
            Xóa món ăn
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className="container mt-5 !mb-[200px] ">
      <div>
        {cartItems.length === 0 ? (
          <div className="flex border bg-gray-100 rounded justify-center gap-3  p-5">
            <p className="flex items-center text-center !m-0">Chưa có món nào trong thực đơn</p>
            <Link to="/menu" className="p-3 text-white border-0 !bg-yellow-600 rounded uppercase">
              Chọn món ngay!
            </Link>
          </div>
        ) : (
          <Table columns={columns} dataSource={cartItems} />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};
