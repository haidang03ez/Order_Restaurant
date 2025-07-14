import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export const CartItemCard = React.memo(
  ({ items, onRemove, onIncrease, onDecrease, onUpdateNote }) => {
    const isResponsive = useMediaQuery({ maxWidth: 1023 });

    console.log("Con");

    return (
      <>
        {isResponsive ? (
          <>
            {items.map((item) => (
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <Link
                      to={`/product-details/${item.id}`}
                      className="font-semibold text-gray-800 hover:text-orange-600"
                    >
                      {items.title}
                    </Link>
                    <p className="text-sm text-gray-600">
                      Giá: {item.price} VND
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Số lượng:</span>
                    <div className="flex items-center gap-2">
                      <button
                        className="w-8 h-8 rounded border flex items-center justify-center hover:bg-gray-100"
                        onClick={() => onDecrease(item.id)}
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        className="w-8 h-8 rounded border flex items-center justify-center hover:bg-gray-100"
                        onClick={() => onIncrease(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      Tổng: {(item.quantity * item.price).toLocaleString()} VND
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    value={items.note}
                    onChange={(e) => onUpdateNote(item.id, e.target.value)}
                    className="w-full border px-3 py-2 rounded text-sm"
                    placeholder="Ghi chú: ít cay, không hành..."
                  />
                </div>

                <button
                  className="w-full bg-red-400 p-2 rounded text-white hover:bg-red-600 text-sm"
                  onClick={() => onRemove(item.id)}
                >
                  Xóa món ăn
                </button>
              </div>
            ))}
          </>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border !border-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border">Ảnh món ăn</th>
                  <th className="p-3 border">Tên món</th>
                  <th className="p-3 border">Số lượng món</th>
                  <th className="p-3 border">Đơn giá</th>
                  <th className="p-3 border">Tổng</th>
                  <th className="p-3 border">Ghi chú</th>
                  <th className="p-3 border">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="p-3 border">
                      <img
                        src={item.images}
                        alt={item.title}
                        className="h-16 w-auto mx-auto rounded"
                      />
                    </td>

                    <td className="p-3 border text-left">
                      <Link
                        to={`/product-details/${item.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        {item.title}
                      </Link>
                    </td>

                    <td className="p-3 border">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="rounded border h-10 w-10 hover:bg-gray-100"
                          onClick={() => onIncrease(item.id)}
                        >
                          +
                        </button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <button
                          className="rounded border h-10 w-10 hover:bg-gray-100"
                          onClick={() => onDecrease(item.id)}
                        >
                          -
                        </button>
                      </div>
                    </td>

                    <td className="p-3 border">
                      {item.price.toLocaleString()} VND
                    </td>

                    <td className="p-3 border">
                      {(item.price * item.quantity).toLocaleString()} VND
                    </td>

                    <td className="p-3 border">
                      <input
                        type="text"
                        value={item.note}
                        onChange={(e) => onUpdateNote(item.id, e.target.value)}
                        className="border px-2 py-1 rounded w-full"
                        placeholder="Ví dụ: ít cay, không hành..."
                      />
                    </td>

                    <td className="p-3 border">
                      <button
                        className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => onRemove(item.id)}
                      >
                        Xóa món ăn
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  },
  (prev, next) => {
    return (
      JSON.stringify(prev.items) === JSON.stringify(next.items) &&
      prev.onRemove === next.onRemove &&
      prev.onIncrease === next.onIncrease &&
      prev.onDecrease === next.onDecrease &&
      prev.onUpdateNote === next.onUpdateNote
    );
  }
);
