import React, { useState } from "react";
import "./App.css";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("fahrenheit");

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

 function celsius() {
   return ((props.fahrenheit - 32) * 5) / 9;
 }

    if (unit === "fahrenheit") {
        return (
            <div className="card-title1">
                <span className="current">{props.fahrenheit}° </span>
                <span>
                    <button className="btn btn-link" onClick={showFahrenheit}>
                        F
                    </button> / <button className="btn btn-link" onClick={showCelsius}>C</button>
                </span>
            </div>
        );
    } else {
        return (
          <div className="card-title1">
            <span className="current"> {Math.round(celsius())}° </span>
            <span className="temp-change">
              <button className="btn btn-link" onClick={showFahrenheit}>
                F
              </button>{" "}
              /{" "}
              <button className="btn btn-link" onClick={showCelsius}>
                C
              </button>
            </span>
          </div>
        );
    }
}