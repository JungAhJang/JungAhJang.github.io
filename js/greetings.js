const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/** 폼에서 submit할 때 username을 새로 저장하는 함수 */
function onLoginSubmit(event) {
  event.preventDefault();

  const username = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASSNAME);

  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

/** username을 보여주며 환영하는 함수 */
function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
