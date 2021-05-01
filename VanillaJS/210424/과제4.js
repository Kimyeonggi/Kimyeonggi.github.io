const greeting = document.querySelector(".js-greetings"),
  select =document.querySelector("select");

const USER_LS = "currentCountry",
  SHOWING_CN = "showing";
function saveCountry(text) {
  localStorage.setItem(USER_LS, text);
}


function paintGreeting(text) {
  greeting.classList.add(SHOWING_CN); // css에서 showing class 대입, js_greetings 보여준다는뜻
  //이건 어차피 새로고침하면 없던 놈이라 사라진다.
  greeting.innerText = `Oh You're from ${text}!`;
}

function handleSelect(event) {
  event.preventDefault()
  const currentValue = select.value;
  paintGreeting(currentValue);
  saveCountry(currentValue);
}

function selectCountry() {
  console.log("selectCountry");
  //select.classList.add(SHOWING_CN); // css에서 showing class 대입, 보여준다는뜻
  select.addEventListener("change", handleSelect);
}

function setInitmenu(text) {
  for (let index = 0; index < select.options.length; index++) {
    if ( select.options[index].value === text) {
      select.options[index].selected = true;
    }
    else {
      select.options[index].selected = false;
    }
  }
}

function loadSelect() {
  const currentCountry = localStorage.getItem(USER_LS);
  if (currentCountry !== null) {
    setInitmenu(currentCountry);
    paintGreeting(currentCountry);
  }
  else
  {
    greeting.classList.remove(SHOWING_CN);
  }
  selectCountry();
}

function init() {
  loadSelect();
}

init();