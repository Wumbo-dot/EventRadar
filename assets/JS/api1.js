var apiEvent = "https://app.ticketmaster.com/discovery/v2/"
var nokeyapi = "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale="

fetch(nokeyapi)
.then(function(response) {
    return response.json();
    console.log(response);
})
.then(function(event) {
    console.log(event);
   // displayEvent(event, embedded);
    
    
})