/**
 * Created by simon on 02.12.2015.
 */

define(['app/model/event'], function(Event){

    var NewEventController = function($scope, EventRepository){

        $scope.event = new Event();

        $scope.addNewEvent = function(){
            //EventRepository.addEvent($scope.event);
            console.log("Es gaht");
        }

    };

    return NewEventController;
});