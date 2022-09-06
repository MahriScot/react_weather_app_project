import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3>
        <FormattedDate date={props.data.date} />
      </h3>

      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-3">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                size={64}
                // alt={props.data.description}
              />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="float-left">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li className="text-capitalize description">
              {props.data.description}
            </li>
            <li>
              <img src="images/humidity.jpg" alt="humidity" width={15} />{" "}
              Humidity: {props.data.humidity}%
            </li>
            <li>
              <img src="images/wind.png" alt="wind" width={15} /> Wind Speed:{" "}
              {props.data.wind}kph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
