//default cities
function refreshTime() {
  let vancouverDateElement = document.querySelector("#vancouver-date");
  let vancouverTimeElement = document.querySelector("#vancouver-time");
  let vancouverTime = moment().tz("America/Vancouver");
  vancouverDateElement.innerHTML = vancouverTime.format("LL");
  vancouverTimeElement.innerHTML = vancouverTime.format("HH:mm:ss");

  let londonDateElement = document.querySelector("#london-date");
  let londonTimeElement = document.querySelector("#london-time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("LL");
  londonTimeElement.innerHTML = londonTime.format("HH:mm:ss");

  let sydneyDateElement = document.querySelector("#sydney-date");
  let sydneyTimeElement = document.querySelector("#sydney-time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("LL");
  sydneyTimeElement.innerHTML = sydneyTime.format("HH:mm:ss");
}

refreshTime();
setInterval(refreshTime, 1000);

//select city function
function selectCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimeZone).format("LL");
  let cityTime = moment().tz(cityTimeZone).format("HH:mm:ss");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <div class="city-name"><h2>${cityName}</h2></div>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>
        <a href="/">Back to Home</a>`;
}
//change city
let citySelectElement = document.querySelector("#select-city");
citySelectElement.addEventListener("change", selectCity);
