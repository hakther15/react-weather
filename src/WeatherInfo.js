import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props) {
    return (
      <div className="weather-info">
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <div className="card-title2">
                <FormatDate date={props.data.date} />
              </div>
              <br />
              <div className="card-text1">
                {props.data.city}, {props.data.country}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="weather-pic">
              {" "}
              <WeatherIcon code={props.data.icon} />{" "}
            </div>
            <div className="card-body">
              <WeatherTemperature fahrenheit={props.data.temperature} />
              <div className="card-text">
                H:
                <span> {props.data.hiTemp}°F </span> / L:
                <span> {props.data.loTemp}°F</span>
              </div>
              <div className="card-text">{props.data.description}</div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-text2">
                <br />
            <strong>Humidity: </strong>
                {props.data.humidity}<span>% </span> <br />
            <strong>Winds: </strong><span>{props.data.wind}</span><span className="mph"> mph</span> <br />
            <strong>Feels like: </strong>{props.data.feelLike}<span>°F</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}