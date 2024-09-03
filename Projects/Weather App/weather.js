// Simple Weather Application using Fetch API

const apiKey = '0bb0d045da7dece96eeaf44adf25ca6f'; // Use your OpenWeatherMap API key
const cityInput = document.getElementById('city');
const getWeatherButton = document.getElementById('get-weather');
const weatherInfoDiv = document.getElementById('weather-info');
const cityNameElement = document.getElementById('city-name');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

getWeatherButton.addEventListener('click', getWeather);

function getWeather() {
    const city = cityInput.value.trim();
    if (!city) return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?city=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    if (data.cod === '404') {
        weatherInfoDiv.style.display = 'none';
        alert('City not found');
        return;
    }

    cityNameElement.textContent = data.name;
    temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
    descriptionElement.textContent = `Weather: ${data.weather[0].description}`;
    weatherInfoDiv.style.display = 'block';
}
