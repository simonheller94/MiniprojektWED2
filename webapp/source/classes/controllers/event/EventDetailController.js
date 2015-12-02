/**
 * Created by simon on 14.11.2015.
 */
define([], function(){
    'use strict'

    var EventDetailController = function($scope, $routeParams, EventRepository) {
        this.scope = $scope;
        this.scope.event = EventRepository.get($routeParams.eventId);
    };

    return EventDetailController;
});