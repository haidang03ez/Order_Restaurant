import React, { useEffect, useState } from "react";
import { NewsCard } from "../components/NewsCard";
import { Pagination } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  fetchNewsList,
  fetchNewsByATag,
  fetchNewsTagList,
} from "../services/newsService";

export const NewsPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [tagNewsList, setTagNewsList] = useState([]);
  const [newsListByATag, setNewsListByATag] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");
  
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const loadNewsList = async (page = 1) => {
    try {
      const skip = (page - 1) * pageSize;
      const res = await fetchNewsList({ limit: pageSize, skip });
      setNewsList(res.data.posts);
      setTotal(res.data.total);
      setCurrentPage(page);
    } catch (err) {
      console.log("Lỗi lấy dữ liệu: ", err);
    } finally {
      setLoading(false);
    }
  };

  const loadNewsTagList = async () => {
    try {
      const res = await fetchNewsTagList();
      setTagNewsList(res.data);
    } catch (err) {
      console.log("Lỗi lấy dữ liệu: ", err);
    } finally {
      setLoading(false);
    }
  };

  const loadNewsByATag = async ({ tag, page = 1 }) => {
    try {
      const skip = (page - 1) * pageSize;
      const res = await fetchNewsByATag({
        tag,
        params: { limit: pageSize, skip },
      });
      setNewsListByATag(res.data.posts);
      setTotal(res.data.total);
      setCurrentPage(page);
    } catch (err) {
      console.log("Lỗi lấy dữ liệu: ", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    loadNewsList(page);
  };

  const handlePageTagChange = (page) => {
    if (selectedTag) {
      loadNewsByATag({ page, tag: selectedTag });
    }
  };

  // Pagination for tag news
  const tagPageSize = 10;
  const [tagPage, setTagPage] = useState(0);
  const totalTagPage = Math.ceil(tagNewsList.length / tagPageSize);
  const handleTagPrev = () => {
    if (tagPage > 0) setTagPage(tagPage - 1);
  };
  const handleTagNext = () => {
    if (tagPage < totalTagPage - 1) setTagPage(tagPage + 1);
  };

  const currentTagList = tagNewsList.slice(
    tagPage * tagPageSize,
    (tagPage + 1) * tagPageSize
  );

  useEffect(() => {
    loadNewsList();
    loadNewsTagList();
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
          <div className="flex flex-wrap gap-2 mb-4 justify-between items-center">
            <button
              className={`px-3 py-2 !rounded-[50px] font-medium text-sm md:text-base w-fit cursor-pointer transition-colors
                  ${
                    tagPage === 0
                      ? "opacity-30 cursor-not-allowed"
                      : "bg-slate-100 text-black hover:!bg-slate-300 hover:!scale-110"
                  }
                `}
              onClick={handleTagPrev}
            >
              <LeftOutlined />
            </button>

            <div className="flex flex-wrap gap-2 justify-center">
              <button
                className={`px-3 py-2 !rounded-[50px] font-medium text-sm md:text-base w-fit cursor-pointer transition-colors ${
                  selectedTag === ""
                    ? "!bg-yellow-700 !text-white"
                    : "bg-slate-100 text-black hover:!bg-slate-300 hover:!scale-110 !transition"
                }`}
                onClick={() => {
                  setSelectedTag("");
                  setNewsListByATag([]);
                  setCurrentPage(1);
                  loadNewsList(1);
                }}
              >
                Tất cả
              </button>
              {currentTagList.map((tag) => (
                <button
                  key={tag}
                  className={`px-3 py-2 !rounded-[50px] font-medium text-sm md:text-base w-fit cursor-pointer transition-colors ${
                    selectedTag === tag
                      ? "!bg-yellow-700 !text-white"
                      : "bg-slate-100 text-black hover:!bg-slate-300 hover:!scale-110 !transition"
                  }`}
                  onClick={() => {
                    setSelectedTag(tag);
                    loadNewsByATag({ tag, page: 1 });
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>

            <button
              className={`px-3 py-2 !rounded-[50px] font-medium text-sm md:text-base w-fit cursor-pointer transition-colors
                  ${
                    tagPage === totalTagPage - 1
                      ? "opacity-30 cursor-not-allowed"
                      : "bg-slate-100 text-black hover:!bg-slate-300 hover:!scale-110"
                  }
                `}
              onClick={handleTagNext}
            >
              <RightOutlined />
            </button>
          </div>
          <>
            {newsListByATag.length > 0 ? (
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {newsListByATag.map((news) => (
                    <NewsCard item={news} key={news.id}></NewsCard>
                  ))}
                </div>
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={total}
                  onChange={handlePageTagChange}
                  className="mt-4 text-center "
                />
              </div>
            ) : (
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {newsList.map((news) => (
                    <NewsCard item={news} key={news.id}></NewsCard>
                  ))}
                </div>
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={total}
                  onChange={handlePageChange}
                  className="mt-4 text-center "
                />
              </div>
            )}
          </>
        </div>
      )}
    </div>
  );
};
