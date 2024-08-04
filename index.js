// index.js
const axios = require('axios');
const config = require('./config');

async function getWeather(latitude, longitude) {
  try {
    const response = await axios.get(config.baseUrl, {
      params: {
        latitude: latitude,
        longitude: longitude,
        hourly: 'temperature_2m'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data: ' + error.message);
  }
}

module.exports = getWeather;
