var saveButton = document.getElementById("demo1");
var massege = document.getElementById("demo");
// massege.textContent = "Hello World";

saveButton.addEventListener("click", setClock);

function setClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var session = "AM";
  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }
  if (hour == 0) {
    hour = 12;
    session = "AM";
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  var time = hour + ":" + minute + ":" + second + " " + session;
  massege.textContent = time;
  setTimeout(setClock, 1000);
}
