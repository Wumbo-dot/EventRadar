//var nokeyapi = "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=" + city; 

//var searchTermEl = document.querySelector(".input")
var searchBtnEl = document.querySelector(".button");
var cityInputEl = document.querySelector(".input");
var dateInputEl = document.querySelector(".input");


var eventHandler = function (event) {
    event.preventDefault();
    var city = cityInputEl.value.trim(); 
    console.log(city);
    if (city) {
        
        getEventData(city);
        eventContainerEl.textContent = "";
        cityInputEl.value = "";
    }
    else {
        alert("No events found - Enjoy the weather!")
    }

};
//,StartDateTime={}
var getEventData = function (city1) {
    
    console.log(city)
    var apiEvent = "'https://app.ticketmaster.com/discovery/v2/events.json?city={}&apikey=kDANs259nX5PnjGOMkkA0AAh72DAKY2C&'" + city1 + '"';

    fetch(apiEvent)
        .then(function (response) {
            return response.json();
            
        })
        .then(function (event) {
            console.log(event);
            //displayEvent(event, city);
            //error code here
        });

    // var displayEvent = function (event, searchTerm) {
    //searchTermEl.textContent = event.embedded.events
    // }
}

searchBtnEl.addEventListener("submit", eventHandler);

