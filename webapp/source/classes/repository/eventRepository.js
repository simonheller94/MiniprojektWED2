/**
 * Created by simon on 04.11.2015.
 */
define(['app/model/event'], function (Event) {

    var eventRepository = function($http) {

        this.urls = {
            all: '/api/events',
            get: '/api/events/:eventId',
            add: '/api/events'
        };

        this.events = [];

        this.allEvents = function (successCallback) {
            $http.get(this.urls.all)
                .success(function(data){
                    var events  = data.events.map(function(eventDTO){
                        return Event.createFromDTO(eventDTO);
                    });
                    successCallback(events);
                });
        };


        this.getEvent = function (id){
            var event = this.events.filter(function(event){
                return event.id == id;
            })[0];
            return (event) ? event : null;
        };

        this.addEvent = function(event){
            if(this.getEvent(event.id)) {
                return false;
            } else {

                this.events.push(event);
                return true;
            }
        };

        this.addGuest = function(guest){
          events.guests.add(guest);
        }
    };

    return eventRepository;
});

