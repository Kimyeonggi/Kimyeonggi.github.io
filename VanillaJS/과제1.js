
//alert("Im Working. Im Js. Im Beautiful. Im worth it.");



a = 221;
b = a - 5;
console.log(b);
const dayOfWeek = ["Mon", "tue", "wed", "the", "fri", "sat", "sun", true];
const yeongGi = {
    name: "yeong gi",
    age: 29,
    gender: "Male",
    isHandsome: true
};
console.log(dayOfWeek[1]);
console.log(yeongGi.isHandsome);

function sayHello(name, age) {
    return `Hello ${name} you are ${age} years old`;
}

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },
    div: function (a, b) {
        return a / b;
    },
    pow: function (a, b) {
        return a ** b;
    }
};

/*
document.getElementsByTagName("h1");
으로 아이디 말고 태그를 찾으면 제대로 작동을 하지 않습니다.
저만 그런건가요..??
*/
//sayHello("Yeong", 29);
/*
const greetYeongGi = sayHello("Yeong", 29);
console.log(greetYeongGi);
console.log(calculator.plus(5, 5));

const title = document.querySelector("h1"); // Null : by tagname # : byID, .byClass
//const title = document.getElementsByTagName("h1");

title.innerHTML = "Hi! From Js"
title.style.color = "red" 
document.title = "i own you now";
console.log(title);
console.dir(title);

*/

// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
// <⚠️ DONT DELETE THIS ⚠️>

// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const BASE_COLOR = "#34495e";
const title = document.querySelector("h1");


const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const superEventHandler = {
    title: document.querySelector("h1"),
    winResize: function handleResize(event) {
      superEventHandler.title.innerHTML = "You just Resized!";
      console.log(superEventHandler.title.style.color);
      superEventHandler.title.style.color = colors[0];
    },
    click: function handleClick(event) {
      superEventHandler.title.innerHTML = "That was a Click!";
      const currentColor = superEventHandler.title.style.color;
      if (currentColor==colors[0]) {
        console.log("color1");
        superEventHandler.title.style.color = colors[1];  
      }else{
        console.log("color1");
        superEventHandler.title.style.color = colors[0];  
      }
      
    },
    rClick: function handleRClick(event) {
      superEventHandler.title.innerHTML = "That was a Right Click!";
      superEventHandler.title.style.color = colors[2];
    },
    mouseEnter: function handleMouseEnter(event) {
      superEventHandler.title.innerHTML = "The Mouse is Here!";
      superEventHandler.title.style.color = colors[3];
    },
    mouseLeave: function handleMouseLeave(event) {
      superEventHandler.title.innerHTML = "The Mouse is Gone!";
      superEventHandler.title.style.color = colors[4];
    },
    run: function () {
      window.addEventListener("resize", superEventHandler.winResize);
      window.addEventListener("click", superEventHandler.click);
      window.addEventListener("contextmenu", superEventHandler.rClick);
      superEventHandler.title.addEventListener(
        "mouseenter",
        superEventHandler.mouseEnter
      );
      superEventHandler.title.addEventListener(
        "mouseleave",
        superEventHandler.mouseLeave
      );
    }
  };
  
  superEventHandler.run();

superEventHandler.run();

const age = prompt("how old are you?");
if (age > 18) {
  console.log("you can drink");
}else{
  console.log("you cant");
}