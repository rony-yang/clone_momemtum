const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  // padStart를 사용하여 2자리가 되지 않는 숫자에는 앞에 0을 추가해준다
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

getClock();
setInterval(getClock, 1000); // 1초
