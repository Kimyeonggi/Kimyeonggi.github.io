const body = document.querySelector("body");
const maxWid = screen.availWidth;
const maxHgt = screen.availHeight;
const colors = ["blue","green","yellow","black"];



function handleResize() {
  const w = window.innerWidth;
  if(w <= maxWid && w > 13 * maxWid / 16) {
    body.style.backgroundColor = colors[0];
  } else if (w <= 13 * maxWid / 16 && w > 10* maxWid / 16) {
    body.style.backgroundColor  = colors[1];
  } else if (w <= 10* maxWid / 16 && w > 7*maxWid / 16) {
    body.style.backgroundColor  = colors[2];
  } else if (w <= 7*maxWid / 16 && w > 0) {
    body.style.backgroundColor  = colors[3];
  }
}


function init() {
  body.style.backgroundColor  = colors[0];
  window.addEventListener("resize", handleResize);
}

init();

https://codesandbox.io/s/empty-blueprint-forked-y1bt3?file=/src/index.js