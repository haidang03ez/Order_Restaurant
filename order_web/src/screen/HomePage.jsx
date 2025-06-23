import React, { useState, useEffect } from "react";
import Header from "../component/headerComponent/header";
import Footer from "../component/footerComponent/footer";
import { Banner } from "../component/BannerComponent/Banner";
import { CardItem } from "../component/CardItemComponent/CardItem";

export const HomePage = () => {
  const [restaurant, setRestaurant] = useState([]);

  const urlApi = "https://683bf32728a0b0f2fdc5c6d3.mockapi.io/restaurant";

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

  return (
    <>
      <Header />
      <Banner />
      <section id="restaurant" className="restaurant-section mt-5 mb-5" style={{ padding: "0 20px" }}>
        <h2>Available Restaurant Nearby Area</h2>
        <div className="row restaurant-list d-flex flex-wrap justify-content-center gap-3 mt-5">
          {restaurant.map((item) => (
            <div className="col restaurant_list--item" key={item.id}>
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
      </section>
      <section id="features">features</section>
      <section id="testimonials">testimonials</section>
      <section id="download">download</section>
      <Footer />
    </>
  );
};
