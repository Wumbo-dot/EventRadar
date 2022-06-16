//get weather api, variable//
var weather = {
  apiKey: "59e7c2fec0a7dcc3a2ab7131590e50bb",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  //Display weather function//
  displayWeather: function (data) {
    var { name } = data;
    var { icon, description } = data.weather[0];
    var { temp, humidity } = data.main;
    var { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText =
      "Description:" + description + "";
    document.querySelector(".temp").innerText = "Temp: " + temp + "°F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed:" + speed + " km/h";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".input").value);
  },
};
//event listener when click button//
document.querySelector(".box button").addEventListener("click", function () {
  weather.search();
});
//event listener for when pressing enter//
document.querySelector(".input").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    weather.search();
  }
});
//moment js datepicker//
$(function () {
  $("#datepicker").datepicker({ minDate: 0 });
});
