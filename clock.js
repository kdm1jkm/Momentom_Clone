const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  var hours = date.getHours();
  const seconds = date.getSeconds();

  var isAfternoon;

  if (hours > 12) {
    isAfternoon = true;
    hours = hours - 12;
  } else {
    isAfternoon = false;
  }

  clockTitle.innerText = `${isAfternoon ? "오후" : "오전"} ${
    hours < 10 ? `0${hours}` : hours
  }:${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
