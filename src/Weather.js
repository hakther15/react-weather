import React from "react";
import "./App.css";
import axios from "axios";

export default function Weather() {
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
              <p className="card-text1">Cleveland, US</p>
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
                <span className="current">17° </span>
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
              <p className="card-text"></p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <p className="card-text2">
                <br />
                <strong>Humidity: </strong>86<span> % </span> <br />
                <strong>Winds: </strong>
                <span></span>7<span className="mph"> mph</span> <br />
                <strong>Feels like: </strong>7<span>°F</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}