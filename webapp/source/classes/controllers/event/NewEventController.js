
define(['app/model/event'], function(Event){

    var NewEventController = function($scope, EventRepository){

        $scope.event = new Event();

        this.scope = $scope;

        $scope.addNewEvent = function(loc){
            EventRepository.addEvent($scope.event, loc, function()
            {
            });
        };
    };

    return NewEventController;
});