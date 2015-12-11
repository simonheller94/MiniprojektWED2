
define(['app/model/event'], function (Event) {

    var eventRepository = function($http) {

        this.urls = {
            all: '/api/events',
            get: '/api/events/:eventId',
            add: '/api/events',
            update: '/api/events/:eventId'
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
            $http.get(this.urls.get.replace(':eventId', id))
                .success(function(data){
                    successCallback(data);
                })
        };

        this.addEvent = function(event, successCallback){
            $http.post( this.urls.add, event).
            success(function(){
                successCallback(event);
            });
        };

        this.updateEvent = function(id, event, successCallback){
            $http.post(this.urls.update.replace(':eventId', id), event)
                .success(function(){
                successCallback(event);
            })
        };
    };

    return eventRepository;
});

