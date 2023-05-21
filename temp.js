const apiKey = "6eb1180161eccb06843669dbee0f87b3";

function createCardBox(data) {
  const cardBox = document.createElement('div');
  cardBox.classList.add('card-grid');
  cardBox.innerHTML = `
    <div class="card-box">
      <p>Temperature: ${data.main.temp} &#8451;</p>
    </div>
    <div class="card-box">
      <p>Weather: ${data.weather[0].description}</p>
    </div>
    <div class="card-box">
      <p>Temp Min: ${data.main.temp_min}</p>
    </div>
    <div class="card-box">
      <p>Temp Max: ${data.main.temp_max}</p>
    </div>
  `;
  return cardBox;
}
// Existing JavaScript code...

function showLoading() {
  const loading = document.getElementById('loading');
  loading.classList.remove('hidden');
}

function hideLoading() {
  const loading = document.getElementById('loading');
  loading.classList.add('hidden');
}

function getWeather() {
  const city = document.getElementById('cityInput').value;

  showLoading(); // Show loading message

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = ''; // Clear any existing content

      // Create card boxes and append to weatherInfo
      const cardBox = createCardBox(data);
      weatherInfo.appendChild(cardBox);

      hideLoading(); // Hide loading message
    })
    .catch(error => {
      console.error('Error:', error);
      hideLoading(); // Hide loading message in case of error
    });
}

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', getWeather);

// Additional code to clear weatherInfo and hide loading message when starting a new search
document.getElementById('cityInput').addEventListener('focus', () => {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = '';
  hideLoading();
});
