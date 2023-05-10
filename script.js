const apiKey = '4b884e262fab511359f91d24aa5d7910'; // replace with your API key
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');
const temperature = document.getElementById('temp');
const minTemperature = document.getElementById('min_temp');
const maxTemperature = document.getElementById('max_temp');
const cloudPct = document.getElementById('cloud_pct');
const feelsLike = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const windDegrees = document.getElementById('wind_degrees');
const windSpeed = document.getElementById('wind_speed');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');

searchButton.addEventListener('click', () => {
  const cityName = searchInput.value.trim();
  if (cityName) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?city=${delhi}&appid={4b884e262fab511359f91d24aa5d7910}`;
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        temperature.textContent = `${data.main.temp} °C`;
        minTemperature.textContent = `${data.main.temp_min} °C`;
        maxTemperature.textContent = `${data.main.temp_max} °C`;
        cloudPct.textContent = `${data.clouds.all}%`;
        feelsLike.textContent = `${data.main.feels_like} °C`;
        humidity.textContent = `${data.main.humidity}%`;
        windDegrees.textContent = `${data.wind.deg}°`;
        windSpeed.textContent = `${data.wind.speed} km/h`;
        const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        sunrise.textContent = sunriseTime;
        const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        sunset.textContent = sunsetTime;
      })
      .catch(error => console.error(error));
  }
});

