import React, { useState, useEffect } from "react";
import Header from "../component/HeaderComponent/Header";
import Footer from "../component/FooterComponent/Footer";
import { Banner } from "../component/BannerComponent/Banner";
import { CardItem } from "../component/CardItemComponent/CardItem";

export const HomePage = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [searchRes, setSearchRes] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const urlApi = "https://683bf32728a0b0f2fdc5c6d3.mockapi.io/restaurant";

  // Fetch data
  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => {
        setRestaurant(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [urlApi]);

  //Pagination
  const itemsPerPage = 6;
  const filRes = restaurant.filter(
    (item) => item.origin === searchRes || searchRes === ""
  );

  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  const paginatedRes = filRes.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filRes.length / itemsPerPage);

  // Origin list
  const originList = restaurant.map((item) => item.origin);
  const uniqueOrigins = Array.from(new Set(originList));

  return (
    <>
      <Header />
      <Banner />
      <section
        id="restaurant"
        className="container restaurant-section mt-5 mb-5"
        style={{ padding: "0 20px" }}
      >
        <h2>Available Restaurant Nearby Area</h2>
        <div className="row restaurant-list mt-5">
          {paginatedRes.map((item) => (
            <div
              className="col-12 col-sm-6 col-md-4 mb-4 restaurant_list--item"
              key={item.id}
            >
              <CardItem
                name={item.name}
                thumbnail={item.thumbnail}
                origin={item.origin}
                categoryFood={item.categoryFood}
                categoryDishes={item.categoryDishes}
              />
            </div>
          ))}
        </div>

        {/* Pagination buttons */}
        <div className="d-flex justify-content-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`btn mx-1 ${
                currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <h2 className="mt-5 mb-4 text-center">Popular categories by food</h2>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {uniqueOrigins.map((origin, index) => (
            <a
              className="category-link text-decoration-none text-dark px-3 py-2 rounded-pill"
              style={{
                backgroundColor: "#f1f5f9",
                fontWeight: "500",
                fontSize: "16px",
                width: "fit-content",
                cursor: "pointer",
              }}
              onClick={() => {
                setSearchRes(origin);
                setCurrentPage(1);
              }}
              key={index}
            >
              {origin}
            </a>
          ))}
        </div>
      </section>
      <section id="features">features</section>
      <section id="testimonials">testimonials</section>
      <section id="download">download</section>
      <Footer />
    </>
  );
};
