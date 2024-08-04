// example.js
const getWeather = require('./index');

const latitude = 35.6895;
const longitude = 139.6917;

getWeather(latitude, longitude)
  .then(data => {
    console.log("Weather Data:");
    data.hourly.time.forEach((time, index) => {
      console.log(`Time: ${time}, Temperature: ${data.hourly.temperature_2m[index]}°C`);
    });
  })
  .catch(error => {
    console.error(error.message);
  });
