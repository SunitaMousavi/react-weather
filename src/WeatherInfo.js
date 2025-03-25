import React from "react";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.weatherData.date.getDay()];
  let hours = props.weatherData.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.weatherData.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7">
          <span className="temperature">{props.weatherData.temperature}</span>
          <span>℃</span>
          <h1 className="city">{props.weatherData.city}</h1>
          <div>
            {day} {hours}:{minutes}
          </div>
          <div className="text-capitadivze">
            {props.weatherData.description}
          </div>
          
        </div>

        <div className="col-5">
          <div>
            <WeatherIcon code={props.weatherData.icon} size={200} />
          </div>
          <div>Feels Like {Math.round(props.weatherData.feelsLike)}º</div>
          <div>Humidity: {props.weatherData.humidity}%</div>
          <div>Wind: {props.weatherData.wind} km/h</div>
        </div>
      </div>
    </div>
  );
}
