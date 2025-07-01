import React from "react";

export const PlaceOrderPage = () => {
    return (
        <div className="place-order-page">
            <h1>Place Your Order</h1>
            <form className="order-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />

                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required />

                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
}