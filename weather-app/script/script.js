const apiKey = "db3ae03224b4b3200643fb588342276d"; // Replace with your OpenWeatherMap API key

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    getWeather(city);
  }
});

function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((data) => showWeather(data))
    .catch((err) => alert(err.message));
}

function showWeather(data) {
  const weatherEl = document.getElementById("weatherInfo");
  const location = `${data.name}, ${data.sys.country}`;
  const temp = `${Math.round(data.main.temp)}°C`;
  const description = data.weather[0].description;
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const details = `Humidity: ${data.main.humidity}% | Wind: ${data.wind.speed} m/s`;

  document.getElementById("location").textContent = location;
  document.getElementById("temperature").textContent = temp;
  document.getElementById("description").textContent = description;
  document.getElementById("icon").src = iconUrl;
  document.getElementById("details").textContent = details;

  setBackground(data.weather[0].main.toLowerCase());
  weatherEl.classList.remove("hidden");
}

function setBackground(weatherType) {
  const body = document.body;
  let bg = "#2c5364"; // default

  switch (weatherType) {
    case "clear":
      bg = "url('images/sunny.jpg')";
      break;
    case "clouds":
      bg = "url('images/cloudy.jpg')";
      break;
    case "rain":
    case "drizzle":
      bg = "url('images/rain.jpg')";
      break;
    case "snow":
      bg = "url('images/snowy.jpg')";
      break;
    case "thunderstorm":
      bg = "url('images/thunderstorm.jpg')";
      break;
    default:
      bg = "url('images/sunny.jpg')";
  }

  body.style.backgroundImage = bg;
}
