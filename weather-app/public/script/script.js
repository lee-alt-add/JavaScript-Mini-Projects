document.getElementById("searchBtn").addEventListener("click", async () => {
  const weatherEl = document.getElementById("weatherInfo");
  const city = document.getElementById("cityInput").value;
  const res = await fetch(`/weather?city=${city}`);
  const data = await res.json();

  document.getElementById("cityName").textContent = data.name;
  document.getElementById("temperature").textContent = `${data.main.temp} °C`;
  document.getElementById("description").textContent = data.weather[0].description;

  const iconCode = data.weather[0].icon;
  setBackground(data.weather[0].main.toLowerCase());
  document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherEl.classList.remove("hidden");
});


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
