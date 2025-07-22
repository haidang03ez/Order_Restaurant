import React, { useEffect, useState } from "react";
import { NewsCard } from "../components/NewsCard";
import { Pagination } from "antd";

export const NewsPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [tagsList, setTagsList] = useState([]);
  const [newsListByTag, setNewsListByTag] = useState([]);

  const [currentTagPage, setCurrentTagPage] = useState(1);
  const [currentNewsPage, setCurrentNewsPage] = useState(1);
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

  const getNewsByTag = async ({ tag }) => {
    try {
      const res = await fetch(`https://dummyjson.com/posts/tag/${tag}`);
      if (!res.ok) {
        throw new Error("Không nhận được phản hồi");
      }
      const data = await res.json();
      console.log(data.posts);
      setNewsListByTag(data.posts);
    } catch (err) {
      console.log("Lỗi lấy dữ liệu: ", err);
    } finally {
      setLoading(false);
    }
  };

  const handleClickTag = (tag) => {
    setCurrentNewsPage(1);
    setCurrentTagPage(1);
    getNewsByTag({ tag });
  };

  const pageSize = 12;

  const firstIndex = (currentTagPage - 1) * 10;
  const endIndex = firstIndex + 10;
  const currentTagList = tagsList.slice(firstIndex, endIndex);

  const firstIndexNews = (currentNewsPage - 1) * pageSize;
  const endIndexNews = firstIndexNews + pageSize;
  const currentNewsList = newsList.slice(firstIndexNews, endIndexNews);
  const currentNewsListByTag = newsListByTag.slice(
    firstIndexNews,
    endIndexNews
  );

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
                    newsListByTag === ""
                      ? "bg-yellow-700 text-white"
                      : "bg-slate-100 text-black hover:!bg-slate-300 hover:!scale-110 !transition"
                  }`}
                  onClick={() => {
                    setNewsListByTag([]);
                    setCurrentNewsPage(1);
                    setCurrentTagPage(1);
                  }}
                >
                  Tất cả
                </button>
                {currentTagList.map((tag, index) => (
                  <div key={index}>
                    <button
                      onClick={() => handleClickTag(tag)}
                      className={`px-3 py-2 !rounded-[50px] font-medium text-sm md:text-base w-fit cursor-pointer transition-colors ${
                        newsListByTag === tag
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

          {newsListByTag.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentNewsListByTag.map((news) => (
                  <NewsCard item={news} key={news.id} />
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Pagination
                  current={currentNewsPage}
                  pageSize={pageSize}
                  total={newsListByTag.length}
                  onChange={(page) => setCurrentNewsPage(page)}
                />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentNewsList.map((news) => (
                  <NewsCard item={news} key={news.id} />
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Pagination
                  current={currentNewsPage}
                  pageSize={pageSize}
                  total={newsList.length}
                  onChange={(page) => setCurrentNewsPage(page)}
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
