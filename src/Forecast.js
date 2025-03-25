import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Weather.css";

export default function Forecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function load() {
    const apiKey = "f9006f5eft0a33fd9693b7da488a8o99";
    let city = props.forecastData.city;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecastData.slice(0, 5).map((dailyForecast, index) => (
            <div className="col" key={index}>
              <ForecastDay forecastData={dailyForecast} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
