import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="home-link">
                <button className="btn btn-primary">Go to Home</button>
            </Link>
        </div>
    );
}