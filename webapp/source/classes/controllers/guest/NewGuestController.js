
define(['app/model/guest'], function(Guest){

    var NewGuestController = function($scope, $routeParams, EventRepository){

        var eventId = $routeParams.eventId;

        $scope.guest = new Guest();

        $scope.addNewGuest = function(loc){
            EventRepository.addGuest(eventId, $scope.guest, loc+eventId,  function()
            {

            });
        };

    };

    return NewGuestController;
});