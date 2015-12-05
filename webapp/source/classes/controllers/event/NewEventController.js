
define(['app/model/event'], function(Event){

    var NewEventController = function($scope, EventRepository){

        $scope.successfullAddNewEvent = false;
        $scope.event = new Event();

        $scope.addNewEvent = function(){
            EventRepository.addEvent($scope.event, function()
            {
                $scope.successfullAddNewEvent = true;
            });
        };
    };

    return NewEventController;
});