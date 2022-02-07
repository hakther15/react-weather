import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ loaded: false });
    function handleResponse(response) {
        console.log(response.date);
        setWeatherData({
            loaded: true,
          temperature: Math.round(response.data.main.temp),
          wind: Math.round(response.data.wind.speed),
          city: response.data.name,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          feelLike: Math.round(response.data.main.feels_like),
        });

    }

    if (weatherData.loaded) {
        return (
          <div className="container">
            <form className="searchEngine">
              <input type="Search" placeholder="Search city" className="bar" />
              <input type="Submit" value="Search" className="button" />
            </form>

            <div className="card-group">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Wednesday 2:00</h1>
                  <br />
                  <p className="card-text1">{weatherData.city}</p>
                </div>
              </div>
              <div className="card">
                <img
                  src="http://openweathermap.org/img/wn/13n@2x.png"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h3 className="card-title">
                                <span className="current">{weatherData.temperature}° </span>
                    <span>
                      <a href="#" className="f">
                        F
                      </a>
                    </span>
                    /
                    <span>
                      <a href="#" className="c">
                        C
                      </a>
                    </span>
                  </h3>
                  <p className="card-text">
                    H: <span> 19°F </span> / L:
                    <span> 13°F</span>
                  </p>
                  <p className="card-text">{weatherData.description}</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="card-text2">
                    <br />
                                <strong>Humidity: </strong>{weatherData.humidity}<span> % </span> <br />
                    <strong>Winds: </strong>
                                <span></span>{weatherData.wind}<span className="mph"> mph</span> <br />
                                <strong>Feels like: </strong>{weatherData.feelLike}<span>°F</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    } else {
        const apiKey = "b4d94ed61b2db6baa9789149670b85e3";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
        
        return "Loading..."
    }
    
}