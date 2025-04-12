import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    try {
      setError('');
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found or API error');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <WeatherCard data={weatherData} />
    </div>
  );
}

export default App;
