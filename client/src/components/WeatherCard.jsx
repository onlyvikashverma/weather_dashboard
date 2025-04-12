import React from 'react';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>{data.condition}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt="weather icon"
      />
      <p>Temperature: {data.temperature}°C</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
