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

    
 
    var apiEvent = `https://app.ticketmaster.com/discovery/v2/events.json?city=${cityName},StartDateTime=${date}&apikey=kDANs259nX5PnjGOMkkA0AAh72DAKY2C`


    fetch(apiEvent)
        .then(response => response.json())
        .then(data => console.log(data));
        var eventData = ["_embedded"]["events"]
        console.log(eventData)
        showEvents()
            
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
  //  }

// var eventName = data._embedded.name;
// var eventNameEl = document.getElementById("eventName");
// eventNameEl.textContent = eventName;


//event list code from website:
function showEvents(eventData) {
    var items = $('.is-outlined');
   // items.hide();
    var events = eventData;//json._embedded.events;
    var item = items.first();
    for (var i=0;i<event.length;i++) {
      item.children('#eventName').text(events[i].name);
      item.children('.event-date').text(events[i].dates.start.localDate);
    // try {
      //   item.children('.description-1').text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
      // } catch (err) {
      //   console.log(err);
      }
      item.show();
      item.off("click");
      item.click(event[i], function(eventObject) {
        console.log(eventObject.data);
        // try {
        //   getAttraction(eventObject.data._embedded.attractions[0].id);
        // } catch (err) {
        // console.log(err);
        // }
      });
      item=item.next();
    }
  }
//};

  searchBtnEl.addEventListener("click", eventHandler)
//}