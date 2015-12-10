
define(['app/model/guest'], function (Guest) {

    var guestRepository = function($http) {

        this.urls = {
            add: '/api/events/:eventId/guests',
            delete: '/api/events/:eventId/guests/:guestId/delete',
            update: '/api/events/:eventId/guests/:guestId'
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

        this.testaddGuest = function(id, guest, successCallback){
            $http.post( this.urls.add.replace(':eventId', id), guest)
                .success(function(){
                    successCallback(guest);
                })
        };

        this.deleteGuest  = function(id, guest, path, successCallback){
            $http.post(this.urls.delete.replace(':eventId', id).replace(':guestId', guest.id), guest, path)
                .success(function(){
                    location.href = path+'/';
                    successCallback();
                })
        };

        this.testdeleteGuest  = function(id, guest, successCallback){
            $http.post(this.urls.delete.replace(':eventId', id).replace(':guestId', guest.id), guest)
                .success(function(){
                    successCallback();
                })
        };
    };

    return guestRepository;
});

