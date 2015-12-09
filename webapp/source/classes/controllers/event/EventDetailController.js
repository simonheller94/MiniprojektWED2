/**
 * Created by simon on 14.11.2015.
 */
define([], function(){
    'use strict';

    var EventDetailController = function($scope, $routeParams, EventRepository, GuestRepository) {

        var eventId = $routeParams.eventId;

        this.scope = $scope;

        EventRepository.getEvent(eventId, function(event){
            this.scope.event = event;
        }.bind(this));

        $scope.deleteGuest = function(loc, guest){
            GuestRepository.deleteGuest(eventId, guest, loc+eventId, function(){

            }.bind(this));
        }
    };

    return EventDetailController;
});