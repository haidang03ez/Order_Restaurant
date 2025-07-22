import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartItemCard } from "../components/CardItemCart";
import { useAuth } from "../hooks/useAuth";

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/carts/user/${user.id}`);
        if (!res.ok) {
          throw new Error("Không nhận được phản hồi");
        }
        const data = await res.json();
        setCartItems(data.carts);
        console.log("Giỏ hàng:", data.carts);
      } catch (err) {
        console.log("Lỗi lấy giỏ hàng: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [user.id]);

  if (loading) return <div>Đang tải...</div>;

  return (
    <div className="container mt-5 !mb-[200px] px-4">
      <div>
        { !cartItems[0]?.products?.length ? (
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
          <div>
            <CartItemCard items={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};
