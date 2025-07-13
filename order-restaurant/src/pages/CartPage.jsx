import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Space, Table, Tag } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { ThemeWrapper } from "../components/ThemeWrapper";

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const [promotionCount, setPromotionCount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const withNote = savedCart.map((item) => ({
      ...item,
      note: item.note || "",
    }));
    setCartItems(savedCart);
  }, []);

  const handleRemoveToCart = useCallback(
    (dishId) => {
      const updateCart = cartItems.filter((item) => item.id !== dishId);
      localStorage.setItem("cart", JSON.stringify(updateCart));
      setCartItems(updateCart);

      toast.info("Xóa món khỏi thực đơn thành công!", {
        position: "top-right",
        autoClose: 2000,
      });
    },
    [cartItems]
  );

  const increaseQuantity = useCallback(
    (dishId) => {
      const updatedCart = cartItems.map((item) =>
        item.id === dishId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
    [cartItems]
  );

  // console.log(cartItems);
  console.log("Render");

  const decreaseQuantity = useCallback(
    (dishId) => {
      const updatedCart = cartItems.map((item) =>
        item.id === dishId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
    [cartItems]
  );

  const calTotalOrder = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  // const e = calTotalOrder();

  // console.log(e);

  const updateNote = useCallback(
    (dishId, newNote) => {
      const updatedCart = cartItems.map((item) =>
        item.id === dishId ? { ...item, note: newNote } : item
      );
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
    [cartItems]
  );

  const loadPromotion = () => {
    setPromotionCount((prev) => prev + 1);
  };

  const columns = [
    {
      title: "Ảnh món ăn",
      dataIndex: "images",
      key: "images",
      render: (images) => <img className="h-15 w-auto" src={images} />,
    },
    {
      title: "Tên món",
      dataIndex: "title",
      key: "title",
      render: (text, record) => {
        console.log("render:", record.id);
        return <Link to={`/product-details/${record.id}`}>{text}</Link>;
      },
    },
    {
      title: "Số lượng món",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => (
        <div className="flex gap-5 items-center justify-center">
          <a>{text}</a>
          <div className="flex flex-col gap-1">
            <button
              className="rounded border p-1"
              onClick={() => increaseQuantity(record.id)}
            >
              Tăng
            </button>
            <button
              className="rounded border p-1"
              onClick={() => decreaseQuantity(record.id)}
            >
              Giảm
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tổng",
      key: "totalPrice",
      render: (record) => <a>{record.quantity * record.price}</a>,
    },
    {
      title: "Ghi chú",
      key: "note",
      render: (_, record) => (
        <input
          type="text"
          value={record.note}
          onChange={(e) => updateNote(record.id, e.target.value)}
          className="border px-2 py-1 rounded w-full"
          placeholder="Ví dụ: ít cay, không hành..."
        />
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
            <p className="flex items-center text-center !m-0">
              Chưa có món nào trong thực đơn
            </p>
            <Link
              to="/menu"
              className="p-3 text-white border-0 !bg-yellow-600 rounded uppercase"
            >
              Chọn món ngay!
            </Link>
          </div>
        ) : (
          <Table columns={columns} dataSource={cartItems} rowKey="id" />
        )}
      </div>
      <div className="text-right font-bold text-lg mt-4">
        Tổng đơn hàng: {calTotalOrder.toLocaleString()}
      </div>
      <div className="text-right my-4">
        <button
          onClick={loadPromotion}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Tải ưu đãi ({promotionCount})
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};
