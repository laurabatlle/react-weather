import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container-app">
        <div className="searchTab">
          <form>
            <div className="row">
              <label className="searchCity"> Search city:</label>
              <div className="col-sm-6">
                <input
                  type="search"
                  className="form-control search-input"
                  autofocus="on"
                  autocomplete="off"
                  size="10"
                  placeholder=" 🔎 Enter city  "
                />
              </div>
              <div className="col-sm-3">
                <input
                  type="submit"
                  className="btn btn-primary"
                  size="10"
                  value="Search"
                />
              </div>
              <div className="col-sm-3">
                <input
                  type="submit"
                  className="btn btn-info"
                  size="10"
                  value="Current Position"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col-7 current-temp">
            <div className="row">
              <div className="col-8 col-sm-6">
                <h1>BARCELONA</h1>
              </div>
              <div className="row">
                <div className="col-sm">
                  <h2>
                    <span> 19º </span>
                  </h2>
                </div>
                <div className="col-sm">
                  <span className="units">
                    <a href="#" className="active">
                      {" "}
                      ºC{" "}
                    </a>{" "}
                    /<a href="#"> ºF </a>
                  </span>
                  <ul className="maxMinTwind">
                    <li>
                      Wind speed: <span> 25 </span> km/h
                    </li>
                    <li>
                      Humidity: <span> 25 </span> %
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-sm icono">
                  <img
                    src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/075/364/original/broken-clouds-day.png?1680690725"
                    className="img-thumbnail"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <small>
        <a
          class="codedBy"
          href="https://github.com/laurabatlle/react-weather"
          target="_blank"
        >
          Open-source code
        </a>
        by Laura Batlle
      </small>
    </div>
  );
}
