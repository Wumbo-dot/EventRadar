var searchBtnEl = document.querySelector(".startButton");
var cityInputEl = document.querySelector(".input");
var dateInputEl = document.querySelector(".input-2");
var eventContainerEl = document.querySelector(".event-container");
var eventNameEl = document.getElementById("eventName");
var eventSeatingEl = document.querySelector(".seating");


//capture city and date for api search
var eventHandler = function (event) {
  event.preventDefault();
  var cityName = cityInputEl.value.trim();
  console.log(cityName);
  if (cityName) {
    getEventData(cityName);
  } else {
    alert("Please enter a US city");
  }
};
function createItem() {
  localStorage.setItem("city", cityName);
}
function readValue() {
  var saveCity = localStorage.getItem("city");
  document.getElementById("input").createElement("p").innerText = saveCity;
}
var getEventData = function (cityName) {
  var date = dateInputEl.value.trim();
  console.log(date);

  var apiEvent = `https://app.ticketmaster.com/discovery/v2/events.json?city=${cityName},StartDateTime=${date},desc&apikey=kDANs259nX5PnjGOMkkA0AAh72DAKY2C`;

  fetch(apiEvent)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var eventData = data._embedded.events;
      console.log(eventData);

    //if no events found in city
      if (eventData.length === 0) {
        eventNameEl.textContent = "No events found - Enjoy the weather!";
        return;
      }
      // Set for loop to return data from api
      var first_iteration = true;
      for (var i = 0; i < eventData.length; i++) {
        console.log(eventsName);
         
      if (first_iteration) {
        var eventsName = eventData[i].name;
        document.querySelector("#eventName").innerText = "Event: " + eventsName;

        var eventDate = eventData[i].dates.start.localDate;
        document.querySelector(".event-date").innerText = "Date: " + eventDate;

        var eventGenre = eventData[i].classifications[0].genre.name;
        document.querySelector(".genre").innerText = "Genre: " + eventGenre;

        var eventSeating = eventData[i].seatmap.staticUrl;
        document.querySelector(".seating").innerText = "View Seating Chart";
        document.querySelector(".seating").href = eventSeating;

        var eventDescription = eventData[i].type;
        document.querySelector(".description-1").innerText = "";
          // "Description: " + eventDescription;

        var eventTime = eventData[i].dates.start.localTime;
        document.querySelector(".eventTimes").innerText = "Time: " + eventTime;

        var eventImage = eventData[i].images[i].url;
        var eventImageEl = document.getElementsByClassName("icon-2");
        var eventImageEl = document.createElement("img");
        document.querySelector(".icon-2").src = eventImage;

        var eventUrl = eventData[i].url;
        document.querySelector(".event-link").innerText = " Purchase Tickets";
        document.querySelector(".event-link").href = eventUrl; 
        first_iteration = false
     }
       
      
    }} 
      
    )};

searchBtnEl.addEventListener("click", eventHandler);



