import React, { useState } from 'react';
import './App.css';
import WeatherWidget from './components/WeatherWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Погодный Виджет</h1>
        <WeatherWidget />
      </header>
    </div>
  );
}

export default App;