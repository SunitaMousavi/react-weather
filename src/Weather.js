import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false }); // State to hold weather data
  const [city, setCity] = useState("London"); // State for the currently searched city, default is London
  const [inputCity, setInputCity] = useState(""); // State to hold user input for the city name
  const [error, setError] = useState(null); // State to hold any error messages

  /**
   * Handles the response from the weather API.
   * This function updates the weatherData state with the city and temperature.
   */
  function handleResponse(response) {
    setWeatherData({
      ready: true, // Set ready to true once data is fetched
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
    });
  }

  /**
   * Handles any error that occurs during the API request.
   * This function updates the error state and resets the weatherData.
   */
  function handleError(error) {
    console.log("Error fetching the weather data:", error); // Log the error to the console
    setError(
      "Sorry, we could not find the weather for the city you are looking for. Please try again."
    ); // Update the error state to notify the user
    setWeatherData({ ready: false }); // Prevent stale data from being displayed
  }

  /**
   * useEffect hook to fetch weather data whenever the city changes.
   * It constructs the API URL and sends a GET request using axios.
   * The loading state is set before the request is made.
   */
  useEffect(() => {
    const apiKey = "f9006f5eft0a33fd9693b7da488a8o99";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }, [city]); // Dependency array: runs effect whenever 'city' changes

  /**
   * Searches for the city based on user input.
   * If the input is not empty, it updates the city state and clears the input field.
   */
  function searchCity() {
    // Check if input is not just space
    if (inputCity.trim() !== "") {
      setCity(inputCity); // Update the city state to the input value
      setInputCity(""); // Clear the input field
    }
  }

  /**
   * Handles changes in the input field.
   * This function updates the inputCity state with the current value of the input.
   */
  function handleCityChange(event) {
    setInputCity(event.target.value); // Update inputCity state with the new input value
  }

  return (
    <div className="Weather">
      <div className="container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            searchCity();
          }}>
          <input
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
            value={inputCity} // Controlled input: sets the value of the input field
            onChange={handleCityChange} // Call handleCityChange on input change
          />
          <button type="submit">
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
        {error && <div className="alert alert-danger">{error}</div>}
        {weatherData.ready ? (
          <div>
            {" "}
            <WeatherInfo weatherData={weatherData} />{" "}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
