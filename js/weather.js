// import API_KEY from './weather_api_key.js';
const API_KEY = "523fbbc7f94e967297e0af16b75aa6cc";

// 성공 시 실행할 코드
function onGeoOK(position) {
  const lat = position.coords.latitude; // 위도
  const lng = position.coords.longitude; // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  // fetch는 비동기 처리
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:nth-child(3)");
      const icon = document.querySelector("#weather span:last-child");

      const weatherIcon = data.weather[0].icon;
      const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

      weather.innerText = `오늘 날씨 : ${data.weather[0].main}`;
      temp.innerText = `현재 온도 : ${data.main.temp} °C`;
      city.innerText = `현재 위치 : ${data.name}`;

      icon.innerHTML = '';
      const weatherIconImg = document.createElement("img");
      weatherIconImg.src = weatherIconAdrs;
      weatherIconImg.alt = data.weather[0].main;

      icon.appendChild(weatherIconImg);
  }); 
};

// 실패 시 실행할 코드
function onGeoError() {
  alert("위치를 찾을 수 없습니다.");
};

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError); // 성공, 실패 - 두 개의 파라미터 필요
