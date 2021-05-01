const title = document.querySelector("#title");

const BASE_COLOR = "rgb(26, 188, 156)";
const OTHER_COLOR = "rgb(52, 152, 219)";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];



const CLICKED_CLASS = "clicked";

function handleClick(event) {
  title.classList.toggle(CLICKED_CLASS);
}
/*
function handleClick(event) {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}
*/



function handleClick(event) {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    console.log(title.style.color);
    title.style.color = OTHER_COLOR;
  } else {
    console.log(title.style.color);
    title.style.color = BASE_COLOR;
  }
}


function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();


function handleOffline(event) {
  console.log("offline");
}

function handleOnline(event) {
  console.log("online");
}


window.addEventListener("offline",handleOffline);
window.addEventListener("online",handleOnline);