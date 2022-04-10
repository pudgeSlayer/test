const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const refreshBtn = document.querySelector("#refresh");
const time = document.querySelector("#time");
var second = 0;
var minute = 0;
var hour = 0;
let interval = "stopped"
function check10(value) {
  if (value <= 9) {
    return "0" + value;
  } else {
    return value
  }
}
startBtn.addEventListener("click", () => {
  if (interval == "stopped") {
    interval = setInterval(() => {
      time.innerHTML = check10(hour) + " : " + check10(minute) + " : " + check10(second);
      second = second + 1;
      if (second == 60) {
        second = 0;
        minute = minute + 1;
      }
      if (minute == 60) {
        minute = 0;
        hour = hour + 1;
        second = 0;
      }
    }, 1000); 
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = "stopped"
});

refreshBtn.addEventListener("click", () => {
  hour = 0;
  minute = 0;
  second = 0;
  interval = "stopped";
  time.innerHTML = check10(hour) + " : " + check10(minute) + " : " + check10(second);
});
