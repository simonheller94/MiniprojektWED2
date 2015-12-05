/**
 * Created by simon on 02.12.2015.
 */

define(['app/model/guest'], function(Guest){

    var NewGuestController = function($scope, $routeParams, EventRepository){

        var eventId = $routeParams.eventId;

        $scope.guest = new Guest();

        $scope.addNewGuest = function(){
            EventRepository.addGuest($scope.event, function()
            {
            });
        };

    };

    return NewGuestController;
});