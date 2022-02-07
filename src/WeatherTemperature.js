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
            <div className="card-title1">
                <span className="current">{props.fahrenheit}° </span>
                <span>
                    <a href="/" className="f" onClick={showFahrenheit}>
                        F
                    </a> / <a href="#" className="c" onClick={showCelsius}>C</a>
                </span>
            </div>
        );
    } else {
        return (
          <div className="card-title1">
            <span className="current"> {Math.round(celsius())}° </span>
            <span>
                    <a href="/" className="f" onClick={showFahrenheit}>
                        F
                    </a> / <a href="#" className="c" onClick={showCelsius}>C</a>
                </span>
          </div>
        );
    }
}