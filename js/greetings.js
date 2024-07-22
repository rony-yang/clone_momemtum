const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  const username = loginInput.value;
  // username이 공백이거나 글자수 체크하는 유효성검사를 js에서 하지 않고 html에서 바로 해준다 (required, maxlength 사용)
  event.preventDefault(); // 기본 동작을 하지 못하도록 막아준다 -> form이 submit 될 때 자동으로 실행되는 새로고침 막기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username); // key, value
  paintGreetings(username);
};

// 유저가 username을 입력하면 환영 인사 띄우기
function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`; // "Hello " + username 와 동일
};

// username 여부 확인해서 이벤트 실행
const savedUsername = localStorage.getItem(USERNAME_KEY);
  // username이 없을 때
  if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); 
  // 사용자가 username을 입력했을 때
  } else {
    paintGreetings(savedUsername);
  }

  // localStorage.removeItem("username");