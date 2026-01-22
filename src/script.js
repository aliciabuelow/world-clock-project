function torontoLocalTime() {
  let torontoDateElement = document.querySelector("#toronto-date");
  torontoDateElement.innerHTML = moment().tz("America/Toronto").format("LL");
  let torontoTimeElement = document.querySelector("#toronto-time");
  torontoTimeElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("HH:mm:ss");
}
setInterval(torontoLocalTime, 1000);

function perthLocalTime() {
  let perthDateElement = document.querySelector("#perth-date");
  perthDateElement.innerHTML = moment().tz("Australia/Perth").format("LL");
  let perthTimeElement = document.querySelector("#perth-time");
  perthTimeElement.innerHTML = moment()
    .tz("Australia/Perth")
    .format("HH:mm:ss");
}
setInterval(perthLocalTime, 1000);
