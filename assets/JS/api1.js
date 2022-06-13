//var nokeyapi = "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=" + city; 

var searchBtnEl = document.querySelector(".button");
var cityInputEl = document.querySelector(".input");
var dateInputEl = document.querySelector(".input-2");
var eventContainerEl = document.querySelector(".event-container");
var eventNameEl = document.getElementById("eventName");

//capture city and date for api search
var eventHandler = function (event) {
    event.preventDefault();
var cityName = cityInputEl.value.trim(); 
console.log(cityName);
    if (cityName) {
 //getEventData(cityName);
    }
    else {
        alert("Please enter a US city")
    }
<<<<<<< HEAD

};
//,StartDateTime={}
var getEventData = function (city1) {
    
    
    var apiEvent = "'https://app.ticketmaster.com/discovery/v2/events.json?city={}&apikey=kDANs259nX5PnjGOMkkA0AAh72DAKY2C&'" + city1 + '"';
=======
var date = dateInputEl.value.trim();
    console.log(date);
 
var apiEvent = `https://app.ticketmaster.com/discovery/v2/events.json?city=${cityName},StartDateTime=${date}&apikey=kDANs259nX5PnjGOMkkA0AAh72DAKY2C`
>>>>>>> feature/Maria

    fetch(apiEvent)
        .then(function (response) {
          return response.json();
        } )
        .then(function (data) {
          var eventData = data._embedded.events;
          console.log(eventData); 

       //showEvents = function (eventData) {
         if (eventData.length === 0) {
         eventNameEl.textContent = "No events found - Enjoy the weather!";
          return;
           }
              
        for (var i=0;i< eventData.length; i++) {
         
         console.log(eventsName);
         var eventsName = eventData[i].name;
         document.querySelector("#eventName").innerText = "Event: " + eventsName;

         var eventDate = eventData[i].dates.start.localDate;
         document.querySelector(".event-date").innerText = "Date: " + eventDate;        

         var eventGenre = eventData[i].classifications[0].genre.name;
         document.querySelector(".genre").innerText = "Genre: " + eventGenre;

         var eventSeating = eventData[i].seatmap.staticUrl;
       //  document.querySelector(".seating").src = eventSeating;
         document.querySelector(".seating").innertext = "Seating: " + eventSeating
         

         var eventDescription = eventData[i].info;
         document.querySelector(".description-1").innerText = "Description: " + eventDescription;
//Need help with "reading'0' "
       //  var eventPrice = eventData[i].priceRanges[0].min;
        //  if (eventPrice === 0) {
        //     document.querySelector(".price").innerText = "Prices start at: N/A";
        //  }
        //  document.querySelector(".price").innerText = "Prices start at: " + eventPrice;

         var eventTime = eventData[i].dates.start.localTime;
         document.querySelector(".eventTimes").innerText = "Time: " + eventTime;

         var eventImage = eventData[i].images[1];
         document.querySelector(".icon-2").src = eventImage;
         //document.querySelector("icon-2").alt = '"Image of event"';

         var eventUrl = eventData[i].url;
         document.querySelector(".link").innertext = eventUrl;




       
          
        // eventNameEl.textcontent = eventsName;

    //       var eventTitleEl = document.createElement("p");
    // eventTitleEl.classList = "genre";
    // eventTitleEl.setAttribute("id", "eventName2");
    // eventTitleEl.textContent = eventData[i].name;
        
        }
        //showEvents()

    })
  
 };

  searchBtnEl.addEventListener("click", eventHandler)
