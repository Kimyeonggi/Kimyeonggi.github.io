const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  select =form.querySelector("select");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault()
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN); // css에서 showing class 대입, 보여준다는뜻
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); //css에서showing class 뺀다. form을 안보여줌.
  greeting.classList.add(SHOWING_CN); // css에서 showing class 대입, js_greetings 보여준다는뜻
  //이건 어차피 새로고침하면 없던 놈이라 사라진다.
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
    //she is not
  } else {
    //she is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();