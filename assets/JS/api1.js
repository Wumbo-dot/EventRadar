//var nokeyapi = "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=" + city;

var searchBtnEl = document.querySelector(".button");
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
    //getEventData(cityName);
  } else {
    alert("Please enter a US city");
  }
};
//,StartDateTime={}
var getEventData = function (city1) {
  var apiEvent =
    "'https://app.ticketmaster.com/discovery/v2/events.json?city={}&apikey=kDANs259nX5PnjGOMkkA0AAh72DAKY2C&'" +
    city1 +
    '"';
  var date = dateInputEl.value.trim();
  console.log(date);

  var apiEvent = `https://app.ticketmaster.com/discovery/v2/events.json?city=${cityName},StartDateTime=${date}&apikey=kDANs259nX5PnjGOMkkA0AAh72DAKY2C`;

  fetch(apiEvent)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var eventData = data._embedded.events;
      console.log(eventData);

      //showEvents = function (eventData) {
      if (eventData.length === 0) {
        eventNameEl.textContent = "No events found - Enjoy the weather!";
        return;
      }

        //  var eventGenre = eventData[i].classifications[0].genre.name;
        //  document.querySelector(".genre").innerText = "Genre: " + eventGenre;

         var eventSeating = eventData[i].seatmap.staticUrl;
        var eventSeatingEl = document.getElementsByClassName("seating")
        var eventSeatingEl = document.createElement("img")
         document.querySelector(".seating").src = eventSeating;
         

         var eventDescription = eventData[i].type;
         document.querySelector(".description-1").innerText = "Description: " + eventDescription;

//Need help with "reading'0' " test code:

//var eventPrice = eventData[i]?.priceRanges[0]?.min
        
        //  if (eventData[i].priceRanges === 0) {
        //     document.querySelector(".price").innerText = "Prices start at: N/A";
        //  } else {
            //document.querySelector(".price").innerText = "Prices start at: " + eventPrice;
        // end of help section

         var eventTime = eventData[i].dates.start.localTime;
         document.querySelector(".eventTimes").innerText = "Time: " + eventTime;

         var eventImage = eventData[i].images[i].url;
         var eventImageEl = document.getElementsByClassName("icon-2")
         var eventImageEl = document.createElement("img")
         document.querySelector(".icon-2").src = eventImage;
        

         var eventUrl = eventData[i].url;
         var eventUrlEl = document.createElement('div')
         eventUrlEl.setAttribute('class', ".link-event") = document.
         document.querySelector(".link").src = eventUrl;
    
        // eventNameEl.textcontent = eventsName;

        //       var eventTitleEl = document.createElement("p");
        // eventTitleEl.classList = "genre";
        // eventTitleEl.setAttribute("id", "eventName2");
        // eventTitleEl.textContent = eventData[i].name;
      
      //showEvents()
});
};
    

searchBtnEl.addEventListener("click", eventHandler);
