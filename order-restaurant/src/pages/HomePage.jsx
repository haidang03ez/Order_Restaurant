import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Our Restaurant</h1>
            <p>Enjoy delicious food delivered to your door.</p>
            <Link to="/place-order" className="order-link">
                <button className="order-button">Place Your Order</button>
            </Link>
        </div>
    );
};
