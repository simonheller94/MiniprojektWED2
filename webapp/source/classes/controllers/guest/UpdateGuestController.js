define([], function () {

    var UpdateGuestController =  function($scope, $routeParams, $location, GuestRepository){

        var eventId = $routeParams.eventId;
        var guestId = $routeParams.guestId;

        GuestRepository.getGuest(eventId, guestId, function(guest){
            console.log(guest);
            $scope.guest = guest;
        } );

        $scope.updateGuest = function(loc){
            GuestRepository.updateGuest(eventId, $routeParams.guestId,{
                name: $scope.guest.name,
                contribution: $scope.guest.contribution,
                comment: $scope.guest.comment
            }, function(){
                var path = loc+eventId;
                $location.path(path);
            });
        };

    };

    return UpdateGuestController;
});