import React, { useEffect, useState } from "react";
import { NewsCard } from "../components/NewsCard";
import { Pagination } from "antd";

export const NewsPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [tagsList, setTagsList] = useState([]);
  const [filterTag, setFilterTag] = useState([]);
  const [currentTagPage, setCurrentTagPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getAllNews = async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts");
      if (!res.ok) {
        throw new Error("Không nhận được phản hồi");
      }
      const data = await res.json();
      setNewsList(data.posts);
    } catch (err) {
      console.log("Lỗi lấy dữ liệu: ", err);
    } finally {
      setLoading(false);
    }
  };

  const getAllTags = async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts/tag-list");
      if (!res.ok) {
        throw new Error("Không nhận được phản hồi");
      }
      const data = await res.json();
      setTagsList(data);
    } catch (err) {
      console.log("Lỗi lấy dữ liệu: ", err);
    } finally {
      setLoading(false);
    }
  };

  const getPostByTag = async ({ tag }) => {
    try {
      const res = await fetch(`https://dummyjson.com/posts/tag/${tag}`);
      if (!res.ok) {
        throw new Error("Không nhận được phản hồi");
      }
      const data = await res.json();
      console.log(data.posts);
      setFilterTag(data.posts);
    } catch (err) {
      console.log("Lỗi lấy dữ liệu: ", err);
    } finally {
      setLoading(false);
    }
  };

  const handleClickTag = (tag) => {
    getPostByTag({ tag });
  };

  const pageSize = 10;
  const firstIndex = (currentTagPage - 1) * pageSize;
  const endIndex = firstIndex + pageSize;
  const currentTagList = tagsList.slice(firstIndex, endIndex);

  useEffect(() => {
    getAllNews();
    getAllTags();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-2xl font-bold mb-4 text-center uppercase">
        Tin tức về nhà hàng
      </h2>

      {loading ? (
        <p>Đang tải tin tức...</p>
      ) : (
        <div className="flex flex-col gap-3">
          {/* Tags List */}
          {tagsList && (
            <div className="flex flex-col gap-2 py-4">
              <div className="flex justify-center gap-1">
                <button
                  className={`px-3 py-2 font-medium text-sm md:text-base w-fit cursor-pointer transition-colors !rounded-[50px] ${
                    filterTag === ""
                      ? "bg-yellow-700 text-white"
                      : "bg-slate-100 text-black hover:!bg-slate-300 hover:!scale-110 !transition"
                  }`}
                  onClick={() => setFilterTag([])}
                >
                  Tất cả
                </button>
                {currentTagList.map((tag, index) => (
                  <div key={index}>
                    <button
                      onClick={() => handleClickTag(tag)}
                      className={`px-3 py-2 !rounded-[50px] font-medium text-sm md:text-base w-fit cursor-pointer transition-colors ${
                        filterTag === tag
                          ? "!bg-yellow-700 !text-white"
                          : "bg-slate-100 text-black hover:!bg-slate-300 hover:!scale-110 !transition"
                      }`}
                    >
                      {tag}
                    </button>
                  </div>
                ))}
              </div>

              <Pagination
                align="center"
                current={currentTagPage}
                pageSize={pageSize}
                total={tagsList.length}
                onChange={(page) => setCurrentTagPage(page)}
              />
            </div>
          )}

          {filterTag.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filterTag.map((news) => (
                <NewsCard item={news} key={news.id} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {newsList.map((news) => (
                <NewsCard item={news} key={news.id} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
