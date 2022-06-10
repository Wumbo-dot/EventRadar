var weather = {
  apiKey: "59e7c2fec0a7dcc3a2ab7131590e50bb",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
};
