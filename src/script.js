//select cities

function selectCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimeZone).format("LL");
  let cityTime = moment().tz(cityTimeZone).format("HH:mm:ss");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML += `<div class="city">
          <div>
            <div class="city-name"><h2>${cityName}</h2></div>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>`;

  function refreshTime() {
    let cityTime = moment().tz(cityTimeZone).format("HH:mm:ss");
  }
  setInterval(refreshTime, 1000);
}

let citySelectElement = document.querySelector("#select-city");
citySelectElement.addEventListener("change", selectCity);
