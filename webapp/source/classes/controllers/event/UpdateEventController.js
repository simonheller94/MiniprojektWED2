/**
 * Created by doubl on 05.12.2015.
 */

define([], function(){
    'use strict';

    var UpdateEventController = function($scope, $routeParams, $location, EventRepository){

        this.$scope = $scope;

        EventRepository.allEvents(function(data){
            this.$scope.events = data;
            $scope.event = data[0];

        }.bind(this));

        $scope.getCurrentEvent = function(event){
            $scope.event = event;
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