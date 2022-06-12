//var nokeyapi = "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=" + city; 

var searchBtnEl = document.querySelector(".button");
var cityInputEl = document.querySelector(".input");
var dateInputEl = document.querySelector(".input-2");
var eventContainerEl = document.querySelector(".event-container");



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
var date = dateInputEl.value.trim();
    console.log(date);

    
 
    var apiEvent = `https://app.ticketmaster.com/discovery/v2/events.json?city=${cityName},StartDateTime=${date}&apikey=kDANs259nX5PnjGOMkkA0AAh72DAKY2C`


    fetch(apiEvent)
        .then(function (response) {
          return response.json();

        } )
        .then(function (data) {
          var eventData = data._embedded.events;
          console.log(eventData);
        

         //var showEvents = function (eventData) {
          // if (eventData.length === 0) {
          //   eventNameEl.textContent = "No events found - Enjoy the weather!";
          //   return;
          // }
        
                
        for (var i=0;i< eventData.length; i++) {
          
         console.log(eventsName);
          var eventNameEl = document.getElementById("eventName");
          var eventsName = eventData[i].name;
          eventNameEl.textcontent = eventsName;

    //       var eventTitleEl = document.createElement("p");
    // eventTitleEl.classList = "genre";
    // eventTitleEl.setAttribute("id", "eventName2");
    // eventTitleEl.textContent = eventData[i].name;
        
        }
      //   showEvents()
            
      //  update event details
  //       nameEl = event.name;
  //       console.log(event.name);
  //   for (var i = 0; i < data.length; i++) {
  //  // var eventDataEl = data[i].object._embedded;
  //   }
  //   }
   // var eventName = eventDataEl.embedded.name;
    
    
    // var displayEvent = function () {
        
    //     searchTermEl.textContent = object.data._embedded.name;
    //     console.log(searchTermEl)
    }

// var eventName = data._embedded.name;
// var eventNameEl = document.getElementById("eventName");
// eventNameEl.textContent = eventName;


    )
  
 };

  searchBtnEl.addEventListener("click", eventHandler)
