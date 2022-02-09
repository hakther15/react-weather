import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
    return (
        <div className="forecast">
            <div className="row">
                <div className="col">
                    <div className="weather-day">Thu</div>
                </div>
                <div className="weather-pic"><WeatherIcon code="01d" size={40} /> </div>
        </div>

        </div>
    );
}