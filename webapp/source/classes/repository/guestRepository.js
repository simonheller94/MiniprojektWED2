
define(['app/model/guest'], function (Guest) {

    var guestRepository = function($http) {

        this.urls = {
            get: '/api/events/:eventId/guests/:guestId',
            add: '/api/events/:eventId/guests',
            delete: '/api/events/:eventId/guests/:guestId/delete',
            update: '/api/events/:eventId/guests/:guestId'
        };

        this.getGuest = function(eventId, guestId, successCallback ){
            $http.get( this.urls.get.replace(':eventId', eventId).replace(':guestId', guestId)).
            success(function(data){
                successCallback(data);
            })
        };
        this.addGuest = function(eventId, guest, successCallback, errorCallback){
            $http.post( this.urls.add.replace(':eventId', eventId), guest)
                .success(function(){
                    successCallback(guest);
                })
                .error(function(){
                    errorCallback();
                })
        };

        this.deleteGuest  = function(eventId, guest, successCallback){
            $http.post(this.urls.delete.replace(':eventId', eventId).replace(':guestId', guest.id), guest)
                .success(function(){
                    successCallback();
                })
        };

        this.updateGuest = function( eventId, guestId, guest, successCallback, errorCallback ){
            $http.post( this.urls.get.replace(':eventId', eventId).replace(':guestId', guestId), guest)
                .success(function(){
                successCallback(guest);
            })
        };

    };

    return guestRepository;
});

