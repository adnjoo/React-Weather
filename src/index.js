import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Favicon from 'react-favicon'

ReactDOM.render(
  <React.StrictMode>
    <Favicon url='https://raw.githubusercontent.com/adnjoo/weather-app/master/weather.ico' />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
