
define(['app/model/event'], function(Event){

    var NewEventController = function($scope, $location, EventRepository){

        $scope.event = new Event();

        this.scope = $scope;

        $scope.addNewEvent = function(loc){
            EventRepository.addEvent($scope.event, function()
            {
                $location.path(loc);
            });
        };
    };

    return NewEventController;
});