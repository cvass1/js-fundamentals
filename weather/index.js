// const apiKey = require('./apiKey')
// const city = 'London';
// const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

// let weatherData = null;

// fetch(apiUrl)
// .then((response) => response.json())
// .then((weatherData) => {
//     // console.log(weatherData);
//     console.log(weatherData.main.temp);
//     console.log(weatherData.weather[0].main);
// });

// console.log('Requesting weather data');


const WeatherClient = require('./WeatherClient');
const Weather = require('./Weather');


const client = new WeatherClient();

// client.fetchWeatherData('London')
// .then((weatherData) => {
//     console.log(`Weather for ${weatherData.name}:`);
//     console.log(weatherData);
// });

const weather = new Weather(client);

weather.load('Singapore')
.then(() => {
    console.log(weather.getWeatherData());

});






