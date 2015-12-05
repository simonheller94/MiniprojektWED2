
define(['app/model/event'], function(Event){

    var NewEventController = function($scope, EventRepository){

        $scope.event = new Event();

        $scope.addNewEvent = function(){
            EventRepository.addEvent($scope.event, function()
            {
            });
        };
    };

    return NewEventController;
});