//var nokeyapi = "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=" + city; 

var searchBtnEl = document.querySelector(".button");
var cityInputEl = document.querySelector(".input");
var dateInputEl = document.querySelector(".input-2");
var eventContainerEl = document.querySelector(".event-container")


var eventHandler = function (event) {
    event.preventDefault();
var cityName = cityInputEl.value.trim(); 
console.log(cityName);
    if (cityName) {
        
        //getEventData(cityName);
       
    }
    else {
        alert("No events found - Enjoy the weather!")
    }
var date = dateInputEl.value.trim();
    console.log(date);



 //var getEventData = function () {
    
//     console.log(city)  
    var apiEvent = `https://app.ticketmaster.com/discovery/v2/events.json?city=${cityName},StartDateTime=${date}&apikey=kDANs259nX5PnjGOMkkA0AAh72DAKY2C`


    fetch(apiEvent)
        .then(response => response.json())
        .then(data => console.log(data));
            //return response.json();
            
        
        //.then(function (event) {
        
            //displayEvent(event, city);
            //error code here
      //  });

    // var displayEvent = function (event, searchTerm) {
//     //searchTermEl.textContent = event.embedded.events
    }
// //}

searchBtnEl.addEventListener("click", eventHandler);

//}