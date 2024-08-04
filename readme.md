
# hero-open-weather

A simple module to fetch weather data using latitude and longitude.

## Installation

You can install this package via npm:

```sh
npm install hero-open-weather
```

## Usage

### Importing the Module

To use the `hero-open-weather` module in your project, you need to require it.

```js
const getWeather = require('hero-open-weather');
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

Here's a full example of how to use the `hero-open-weather` package:

```js
const getWeather = require('hero-open-weather');

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

### Example Response

Here's an example of the response data you might receive:

```json
{
    "latitude": 35.6895,
    "longitude": 139.6917,
    "generationtime_ms": 1.5,
    "utc_offset_seconds": 0,
    "timezone": "UTC",
    "hourly_units": {
        "time": "iso8601",
        "temperature_2m": "°C"
    },
    "hourly": {
        "time": [
            "2024-08-04T00:00:00Z",
            "2024-08-04T01:00:00Z",
            "2024-08-04T02:00:00Z"
            // more timestamps
        ],
        "temperature_2m": [
            25.3,
            24.8,
            24.1
            // more temperatures
        ]
    }
}
```

## Author

Milad Davoodabadi (milad.davoodabadi@outlook.com)

## License

This project is licensed under the ISC License.
