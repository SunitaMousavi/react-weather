import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecastData.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecastData.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="Forecast-day">{day()}</div>
      <div>
        <WeatherIcon code={props.forecastData.condition.icon} size={50} />
      </div>
      <div className="Forecast-temperatures">
        <span className="Forecast-temperature-max">{maxTemperature()}</span>
        <span className="Forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
