import React, { useState, useEffect } from 'react'
import axios from 'axios'


const API_KEY = "7a6f9ce7787590df3be43dcdffcd17a3"

const Weather = ({city}) => {    
    const [weatherData, setWeatherData] = useState({});
    
    useEffect(() => {
      console.log('effect')
      axios
        .get('http://api.weatherstack.com/current?access_key='+API_KEY+'&query='+city)
        .then(response => {
          console.log(response.data)
          setWeatherData({
            temperature: response.data.current.temperature,
            icon: response.data.current.weather_icons[0],
            windSpeed: response.data.current.wind_speed,
            windDirection: response.data.current.wind_dir
          })
        })
    }, [])
    
    console.log({weatherData})
    return (
        <>
        <h3>Weather in {city}</h3>
        <p>
          <strong>temperature:</strong> {weatherData.temperature} celsius
        </p>
        <img src={weatherData.icon} alt="icon" />
        <p>
          <strong>wind:</strong> {weatherData.windSpeed} kph direction{" "}
          {weatherData.windDirection}
        </p>
        
      </>
    )
  }
  
  export default Weather