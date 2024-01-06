const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';

const weatherInfoElement = document.getElementById('weather-info');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const pressure = data.main.pressure;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const windDirection = data.wind.deg;
        const iconCode = data.weather[0].icon;

        const weatherHtml = `
        <h1>Weather in ${data.name}</h1>
        <p><b>Temperature:</b> ${temperature}°C</p>
        <p><b>Pressure:</b> ${pressure} hPa</p>
        <p><b>Description:</b> ${description}</p>
        <p><b>Humidity:</b> ${humidity}%</p>
        <p><b>Wind speed:</b> ${windSpeed} m/s</p>
        <p><b>Wind direction:</b> ${windDirection}°</p>
        <img src="http://openweathermap.org/img/w/${iconCode}.png" alt="Weather icon">`;

        weatherInfoElement.innerHTML = weatherHtml;
    })
    .catch(error => {
        console.error('Error while getting weather data:', error);
    });