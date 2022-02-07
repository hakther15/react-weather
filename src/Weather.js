import React, { useState } from "react";
import "./App.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ loaded: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.date);
        setWeatherData({
        loaded: true,
          temperature: Math.round(response.data.main.temp),
            wind: Math.round(response.data.wind.speed),
            hiTemp: Math.round(response.data.main.temp_max),
            loTemp: Math.round(response.data.main.temp_min),
          date: new Date(response.data.dt * 1000),
          city: response.data.name,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          feelLike: Math.round(response.data.main.feels_like),
        });

    }

    function search() {
        const apiKey = "b4d94ed61b2db6baa9789149670b85e3";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.loaded) {
        return (
          <div className="container">
            <form className="searchEngine" onSubmit={handleSubmit} onChange={handleCityChange} autoFocus="on">
              <input type="Search" placeholder="Search city" className="bar" />
              <input type="Submit" value="Search" className="button" />
            </form>
                <WeatherInfo data={weatherData}/>
            
          </div>
        );
    } else {
        search();
        return "Loading..."
    }
    
}