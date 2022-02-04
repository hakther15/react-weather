import React from "react";
import "./App.css";

export default function Weather() {
    return (
        <div className="container">
            <form className="searchEngine">
                <input type="Search" placeholder="Search city" className="bar" />
                <input type="Submit" value="Search" className="button"/>
            </form>
            </div>
    );
}