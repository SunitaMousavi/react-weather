import React from "react";
import "./Weather.css";

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
      <h1>{props.weatherData.city}</h1>
      <h2>{props.weatherData.temperature}</h2>
      <div>
        <img
          src={props.weatherData.icon}
          alt={props.weatherData.description}
          className="weather-icon"
        />
      </div>
      <h4>
        {day} {hours}:{minutes}
      </h4>
      <ul>
        <li className="text-capitalize">{props.weatherData.description}</li>
        <li>{Math.round(props.weatherData.feelsLike)}℃</li>
        <li>Humidity: {props.weatherData.humidity}%</li>
        <li>Wind: {props.weatherData.wind} km/h</li>
      </ul>
    </div>
  );
}
