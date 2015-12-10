
define(['app/model/guest'], function (Guest) {

    var guestRepository = function($http) {

        this.urls = {
            get: '/api/events/:eventId/guests/:guestId',
            add: '/api/events/:eventId/guests',
            delete: '/api/events/:eventId/guests/:guestId/delete'

        };

        this.getGuest = function( eventId, guestId, successCallback ){
            $http.get( this.urls.get.replace(':eventId', eventId).replace(':guestId', guestId)).
            success(function(data){
                successCallback(data);
            })
        };
        this.addGuest = function(id, guest, path, successCallback, errorCallback){
            $http.post( this.urls.add.replace(':eventId', id), guest, path)
                .success(function(){
                    location.href=path;
                    successCallback();
                })
                .error(function(){
                    errorCallback();
                })
        };

        this.deleteGuest  = function(id, guest, path, successCallback){
            $http.post(this.urls.delete.replace(':eventId', id).replace(':guestId', guest.id), guest, path)
                .success(function(){
                    location.href = path+'/';
                    successCallback();
                })
        }
        this.updateGuest = function( eventId, guestId, guest, path, successCallback, errorCallback ){
            $http.post( this.urls.get.replace(':eventId', eventId).replace(':guestId', guestId), guest, path)
                .success(function(){
                location.href=path;
                successCallback();
            }).
            error(function(){
                errorCallback();
            })
        };

    };

    return guestRepository;
});

