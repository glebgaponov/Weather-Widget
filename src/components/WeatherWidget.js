import React, { useState } from 'react';
import './WeatherWidget.css';

const WeatherWidget = () => {
  const [selectedCity, setSelectedCity] = useState('Москва');
  const [weatherData, setWeatherData] = useState(null);

  const cities = [
    { name: 'Москва', temp: '+5°C', condition: 'cloudy' },
    { name: 'Санкт-Петербург', temp: '+3°C', condition: 'rainy' },
    { name: 'Новосибирск', temp: '-2°C', condition: 'snowy' },
    { name: 'Екатеринбург', temp: '+1°C', condition: 'partly-cloudy' },
    { name: 'Казань', temp: '+4°C', condition: 'sunny' },
    { name: 'Сочи', temp: '+15°C', condition: 'sunny' }
  ];

  const handleCityChange = (event) => {
    const cityName = event.target.value;
    setSelectedCity(cityName);
    const city = cities.find(c => c.name === cityName);
    setWeatherData(city);
  };

  // Генерация фиктивных данных при первом рендере
  React.useEffect(() => {
    const defaultCity = cities.find(c => c.name === selectedCity);
    setWeatherData(defaultCity);
  }, []);

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'sunny': return '☀️';
      case 'cloudy': return '☁️';
      case 'rainy': return '🌧️';
      case 'snowy': return '❄️';
      case 'partly-cloudy': return '⛅';
      default: return '🌈';
    }
  };

  const getBackgroundClass = (condition) => {
    switch (condition) {
      case 'sunny': return 'weather-sunny';
      case 'cloudy': return 'weather-cloudy';
      case 'rainy': return 'weather-rainy';
      case 'snowy': return 'weather-snowy';
      case 'partly-cloudy': return 'weather-partly-cloudy';
      default: return 'weather-default';
    }
  };

  return (
    <div className={`weather-widget ${weatherData ? getBackgroundClass(weatherData.condition) : ''}`}>
      <div className="weather-content">
        <h2>Погодный Виджет</h2>
        
        <div className="city-selector">
          <label htmlFor="city-select">Выберите город: </label>
          <select 
            id="city-select"
            value={selectedCity} 
            onChange={handleCityChange}
          >
            {cities.map(city => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        {weatherData && (
          <div className="weather-display">
            <div className="weather-icon">
              {getWeatherIcon(weatherData.condition)}
            </div>
            <div className="weather-info">
              <h3>{weatherData.name}</h3>
              <div className="temperature">{weatherData.temp}</div>
              <div className="condition">
                {weatherData.condition === 'sunny' && 'Солнечно'}
                {weatherData.condition === 'cloudy' && 'Облачно'}
                {weatherData.condition === 'rainy' && 'Дождливо'}
                {weatherData.condition === 'snowy' && 'Снег'}
                {weatherData.condition === 'partly-cloudy' && 'Переменная облачность'}
              </div>
            </div>
          </div>
        )}

        <div className="weather-footer">
          <p>Данные обновлены: {new Date().toLocaleTimeString()}</p>
          <small>* Фиктивные данные для демонстрации</small>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;