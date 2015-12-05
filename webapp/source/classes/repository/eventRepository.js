/**
 * Created by simon on 04.11.2015.
 */
define(['app/model/event'], function (Event) {

    var eventRepository = function($http) {

        this.urls = {
            all: '/api/events',
            get: '/api/events/',
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


        this.getEvent = function (id, successCallback){
            $http.get(this.urls.get + id)
                .success(function(data){
                    successCallback(data);
                })
        };

        this.addEvent = function(event, successCallback){
            $http.post( this.urls.add , event).
            success(function(){
                successCallback();
            });
        };

        this.addGuest = function(guest){
          events.guests.add(guest);
        }
    };

    return eventRepository;
});

