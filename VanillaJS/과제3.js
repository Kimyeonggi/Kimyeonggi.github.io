const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

const Months = [31,28,31,30,31,30,31,31,30,31,30,31];

function getTime() {

  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const dMonths = xmasDay.getMonth();
  const dDays = xmasDay.getDate();
  const dHours = xmasDay.getHours();
  const dMinutes = xmasDay.getMinutes();
  const dSeconds = xmasDay.getSeconds();

  const date = new Date();
  const months = date.getMonth();
  const day = date.getDate();


  let seconds = dSeconds - date.getSeconds();
  let minutes = dMinutes - date.getMinutes();
  let hours = dHours - date.getHours();
  let monthToDay = Months[months]-day;
  
  for (let index = months+1; index < dMonths; index++) {
    const monthDays = Months[index];
    monthToDay += monthDays;
  }
  monthToDay +=dDays;
  
  const secFlag = seconds < 0 ? true : false;
  const minFlag = minutes < 0 ? true : false;
  const hourFlag = hours < 0 ? true : false;
  if (secFlag) {
    seconds = 60 + seconds;
    minutes--;
  }
  if (minFlag) {
    minutes = 60 + minutes;
    hours--;
  }
  if (hourFlag) {
    hours = 24 + hours;
    monthToDay--;
  }

  clockTitle.innerText =
  `Time Until Christmas 
  ${monthToDay}d ${hours < 10 ? `0${hours}` : hours}h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`;

}


function init() {
  setInterval(getTime, 1000);
}

init();