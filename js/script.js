"use strict";

const count = document.getElementsByClassName("notifications__count")[0];
const newAlerts = document.getElementsByClassName("alert");
const alerts = document.getElementsByClassName("alert__activity");

let alertCount = 3;

function readAll() {
  for (const newAlert of newAlerts) {
    newAlert.classList.remove("alert--new");
  }
  for (const alert of alerts) {
    alert.classList.remove("new");
  }
  alertCount = 0;
  count.textContent = alertCount;
}

let num = 0;
for (const newAlert of newAlerts) {
  newAlert.addEventListener("click", function () {
    newAlert.classList.remove("alert--new");
    alerts[num].classList.remove("new");
    num++;
    alertCount--;
    alertCount < 0 ? (count.textContent = 0) : (count.textContent = alertCount);
  });
}
