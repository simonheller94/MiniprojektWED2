
define([], function(){
    'use strict';

    var EventListController = function($scope, EventRepository){

        this.scope = $scope;

        EventRepository.allEvents(function(events){
            this.scope.events = events;
        }.bind(this));
    };

    return EventListController;

});