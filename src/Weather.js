import React, { useState } from "react";
import "./App.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import Forecast from "./Forecast";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);
  
    function handleResponse(response) {
      setWeatherData({
          ready: true,
          temperature: Math.round(response.data.main.temp),
            wind: Math.round(response.data.wind.speed),
            hiTemp: Math.round(response.data.main.temp_max),
            loTemp: Math.round(response.data.main.temp_min),
            date: new Date(response.data.dt * 1000),
        city: response.data.name,
            coordinates: response.data.coord,
          country: response.data.sys.country,
          humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          feelLike: Math.round(response.data.main.feels_like),
      });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

  function search() {
    const apiKey = "b4d94ed61b2db6baa9789149670b85e3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  
    if (weatherData.ready) {
        return (
          <div className="container">
            <form className="searchEngine" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search city"
                className="bar"
                onChange={handleCityChange}
                autoFocus="on"
              />
              <input type="submit" value="Search" className="button" />
            </form>
            <WeatherInfo data={weatherData} />
            <Forecast coordinates={weatherData.coordinates}/>
          </div>
        );
    } else {
        search();
        return "Loading..."
    }
    
}