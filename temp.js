  const apiKey = "6eb1180161eccb06843669dbee0f87b3"; 

function getWeather() {
  const city = document.getElementById('cityInput').value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>temp-min: ${data.main.temp_min}</p>
        <p>temp-max: ${data.main.temp_max}</p>
      `;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', getWeather);