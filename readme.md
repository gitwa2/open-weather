
# open-weather

A simple module to fetch weather data using latitude and longitude.

## Installation

You can install this package via npm:

```sh
npm install open-weather
```

## Usage

### Importing the Module

To use the `open-weather` module in your project, you need to require it.

```js
const getWeather = require('open-weather');
```

### Fetching Weather Data

You can fetch the weather data by providing the latitude and longitude.

```js
const latitude = 35.6895; // Example: Latitude for Tokyo
const longitude = 139.6917; // Example: Longitude for Tokyo

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
```

### Full Example

Here's a full example of how to use the `open-weather` package:

```js
const getWeather = require('open-weather');

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
```

## Author

Milad Davoodabadi (milad.davoodabadi@outlook.com)

## License

This project is licensed under the ISC License.
