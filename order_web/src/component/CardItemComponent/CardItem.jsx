import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./CardItem.css";

export const CardItem = ({
  name,
  thumbnail,
  origin,
  categoryFood,
  categoryDishes,
}) => {
  return (
    <>
      <div className="card_item">
        <div className="card_item--thumbnail">
          <img src={thumbnail} alt={name} className="card_thumbnail" />
        </div>
        <h3>
          <a className="card_item--name">{name}</a>
        </h3>
        <div className="group_card--items">
          {origin && (
            <a href="#" className="card_item--origin">
              {origin}
            </a>
          )}
          {categoryFood && (
            <a href="#" className="card_item--food d-flex gap-1">
              <i className="bi bi-arrow-right-circle-fill"></i>
              <p>{categoryFood}</p>
            </a>
          )}
          {categoryDishes && (
            <a href="#" className="card_item--dishes d-flex gap-1">
              <i className="bi bi-arrow-right-circle-fill"></i>
              <p>{categoryDishes}</p>
            </a>
          )}
        </div>
      </div>
    </>
  );
};
