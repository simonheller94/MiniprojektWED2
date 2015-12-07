/**
 * Created by simon on 04.11.2015.
 */
define(['app/model/event'], function (Event) {

    var eventRepository = function($http) {

        this.urls = {
            all: '/api/events',
            get: '/api/events/',
            add: '/api/events/'
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

        this.addEvent = function(event, path, successCallback){
            $http.post( this.urls.add , event, path).
            success(function(){
                location.href=path;
                successCallback();
            });
        };

        this.addGuest = function(id, guest, path, successCallback){
          $http.post( this.urls.add + id + '/guests', guest, path)
              .success(function(){
                  location.href=path;
                  successCallback();
              })
        };

        this.updateEvent = function(id, event, successCallback){
            $http.post(this.urls.add + id, event)
                .success(function(){
                successCallback();
            })
        };

        this.deleteGuest  = function(eventid, guest, path, successCallback){
            $http.post(this.urls.get +eventid + '/guests/' + guest.id +'/delete', guest)
                .success(function(){
                    location.href = path;
                    successCallback();
                })
        }
    };

    return eventRepository;
});

