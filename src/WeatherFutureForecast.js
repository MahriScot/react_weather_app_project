import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherFutureForecast.css";

export default function WeatherFutureForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thurs</div>{" "}
          <WeatherIcon code="01d" size={30} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°C</span>
            <span className="WeatherForecast-temperature-min">10°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
