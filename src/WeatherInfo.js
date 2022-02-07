import React from "react";
import FormatDate from "./FormatDate"

export default function WeatherInfo(props) {
    return (
      <div className="weather-info">
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">
                <FormatDate date={props.data.date} />
              </h1>
              <br />
              <p className="card-text1">{props.data.city}</p>
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
                <span className="current">{props.data.temperature}° </span>
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
              <p className="card-text">{props.data.description}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <p className="card-text2">
                <br />
                <strong>Humidity: </strong>
                {props.data.humidity}
                <span> % </span> <br />
                <strong>Winds: </strong>
                <span></span>
                {props.data.wind}
                <span className="mph"> mph</span> <br />
                <strong>Feels like: </strong>
                {props.data.feelLike}
                <span>°F</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}