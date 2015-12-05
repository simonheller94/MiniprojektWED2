/**
 * Created by simon on 14.11.2015.
 */
define([], function(){
    'use strict';

    var EventDetailController = function($scope, $routeParams, EventRepository) {

        var eventId = $routeParams.eventId;

        this.scope = $scope;

        EventRepository.getEvent(eventId, function(event){
            this.scope.event = event;
        }.bind(this));
    };

    return EventDetailController;
});