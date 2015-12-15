/**
 * Created by doubl on 05.12.2015.
 */

define([], function(){
    'use strict'

    var UpdateEventController = function($scope, $routeParams, $location, EventRepository){

        this.$scope = $scope;

        EventRepository.allEvents(function(data){
            this.$scope.events = data;
            $scope.event = data[0];

            $scope.event.times.begin = new Date(data[0].times.begin);
            $scope.event.times.end = new Date(data[0].times.end);

        }.bind(this));

        $scope.getCurrentEvent = function(event){
            $scope.event = event;
            $scope.event.times.begin = new Date(event.times.begin);
            $scope.event.times.end = new Date(event.times.end);
        };

        $scope.updateEventInformation = function(loc) {
            EventRepository.updateEvent($scope.event.id, $scope.event,
                function(){
                    $location.path(loc);
                });
        }

    };
        return UpdateEventController;

});