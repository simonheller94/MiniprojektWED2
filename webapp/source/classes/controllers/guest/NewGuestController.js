
define(['app/model/guest'], function(Guest){

    var NewGuestController = function($scope, $routeParams, $location, GuestRepository){

        var eventId = $routeParams.eventId;
        this.scope = $scope;
        $scope.errorMessage = false;

        $scope.guest = new Guest();

        $scope.addNewGuest = function(loc){
            GuestRepository.addGuest(eventId, $scope.guest, function()
            {
                $location.path(loc+eventId);

            }, function(){
                $scope.errorMessage = true;
            });
        };

    };

    return NewGuestController;
});