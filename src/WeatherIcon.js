import React from "react";

export default function WeatherIcon(props) {

  const codeMapping = {
    "clear-sky-day": "clear-day.svg",
    "clear-sky-night": "starry-night.svg",

    "few-clouds-day": "partly-cloudy-day.svg",
    "few-clouds-night": "partly-cloudy-night.svg",

    "scattered-clouds-day": "cloudy.svg",
    "scattered-clouds-night": "cloudy.svg",

    "broken-clouds-day": "overcast-day.svg",
    "broken-clouds-night": "overcast-night.svg",

    "shower-rain-day": "partly-cloudy-day-drizzle.svg",
    "shower-rain-night": "partly-cloudy-night-drizzle.svg",

    "rain-day": "partly-cloudy-day-rain.svg",
    "rain-night": "partly-cloudy-night-rain.svg",

    "thunderstorm-day": "thunderstorms-day.svg",
    "thunderstorm-night": "thunderstorms-night.svg",

    "snow-day": "partly-cloudy-day-snow.svg",
    "snow-night": "partly-cloudy-night-snow.svg",

    "mist-day": "partly-cloudy-day-fog.svg",
    "mist-night": "partly-cloudy-night-fog.svg",
  };

  // Function to get local icon path
  let iconSrc = `/icons/${codeMapping[props.code]}`;

  return (
    <img
      src={iconSrc}
      alt={props.code}
      className="weather-icon"
      width={props.size}
      height={props.size}
    />
  );
}
