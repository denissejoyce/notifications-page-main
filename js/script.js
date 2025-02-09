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

for (let num = 0; num <= 2; num++) {
  newAlerts[num].addEventListener("click", function () {
    newAlerts[num].classList.remove("alert--new");
    alerts[num].classList.remove("new");
    alertCount--;
    alertCount < 0 ? (count.textContent = 0) : (count.textContent = alertCount);
  });
}
