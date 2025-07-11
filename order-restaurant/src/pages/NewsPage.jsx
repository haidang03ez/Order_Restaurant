import React, { useEffect, useState } from "react";

export const NewsPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllNews = async () => {
    try {
      const res = await fetch(
        "https://newsapi.org/v2/everything?q=restaurant&apiKey=6c60efe9a25b47468a6edf838ef3ae72"
      );
      if (!res.ok) {
        throw new Error("Không nhận được phản hồi");
      }
      const data = await res.json();
      setNewsList(data.articles);
    } catch (err) {
      console.log("Lỗi lấy dữ liệu: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-2xl font-bold mb-4">Tin tức về nhà hàng</h2>

      {loading ? (
        <p>Đang tải tin tức...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {newsList.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow hover:shadow-md transition"
            >
              {item.urlToImage && (
                <img
                  src={item.urlToImage}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded mb-3"
                />
              )}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {new Date(item.publishedAt).toLocaleDateString()} -{" "}
                {item.source.name}
              </p>
              <p className="text-sm mb-2">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                Đọc thêm
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
