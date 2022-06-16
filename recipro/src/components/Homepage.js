import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div className="container">
            <Header />
            <Link to="/recipes" className="btn btn-dark">get started</Link>
        </div>
    )
}