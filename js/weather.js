const API_KEY = "42b10feacdfa53816faa8f5e246b0f45";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name; // 위치
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
