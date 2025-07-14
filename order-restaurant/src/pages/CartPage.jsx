import React, { useCallback, useEffect, useMemo, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { CartItemCard } from "../components/CardItemCart";

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [promotionCount, setPromotionCount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const withNote = savedCart.map((item) => ({
      ...item,
      note: item.note || "",
    }));
    setCartItems(withNote);
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

      console.log("Tăng")
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
    [cartItems]
  );

  // const increaseQuantity = (dishId) => {
  //   const updatedCart = cartItems.map((item) =>
  //     item.id === dishId ? { ...item, quantity: item.quantity + 1 } : item
  //   );

  //   console.log("Tăng");
  //   setCartItems(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

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

  const calTotalOrder = useMemo(() => {
    // console.log("tính")
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const loadPromotion = () => {
    setPromotionCount((prev) => prev + 1);
  };

  console.log("Cha");

  return (
    <div className="container mt-5 !mb-[200px] px-4">
      <div>
        {cartItems.length === 0 ? (
          <div className="flex flex-col sm:flex-row border bg-gray-100 rounded justify-center items-center gap-3 p-5">
            <p className="flex items-center text-center !m-0">
              Chưa có món nào trong thực đơn
            </p>
            <Link
              to="/menu"
              className="p-3 text-white border-0 !bg-yellow-600 rounded uppercase text-sm md:text-base"
            >
              Chọn món ngay!
            </Link>
          </div>
        ) : (
          <div className="">
            <CartItemCard
              items={cartItems}
              onRemove={handleRemoveToCart}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onUpdateNote={updateNote}
            />
          </div>
        )}
      </div>

      <div className="text-right font-bold text-lg mt-4">
        Tổng đơn hàng: {calTotalOrder.toLocaleString()} VND
      </div>

      <div className="text-right my-4">
        <button
          onClick={loadPromotion}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm md:text-base"
        >
          Tải ưu đãi ({promotionCount})
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};
