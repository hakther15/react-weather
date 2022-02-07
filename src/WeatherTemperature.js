import React, { useState } from "react";

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
            <h3 className="card-title">
                <span className="current">{props.fahrenheit}° </span>
                <span>
                    <a href="#" className="f" onClick={showFahrenheit}>
                        F
                    </a> / <a href="#" className="c" onClick={showCelsius}>C</a>
                </span>
            </h3>
        );
    } else {
        return (
          <h3 className="card-title">
            <span className="current"> {Math.round(celsius())}° </span>
            <span>
                    <a href="#" className="f" onClick={showFahrenheit}>
                        F
                    </a> / <a href="#" className="c" onClick={showCelsius}>C</a>
                </span>
          </h3>
        );
    }
}