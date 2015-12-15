/**
 * Created by simon on 14.11.2015.
 */
define([], function(){
    'use strict';

    var EventDetailController = function($scope, $routeParams, EventRepository, GuestRepository) {

        var eventId = $routeParams.eventId;
        var guest = $routeParams.guest;

        this.scope = $scope;

        EventRepository.getEvent(eventId, function(event){
            this.scope.event = event;
        }.bind(this));

        $scope.deleteGuest = function(){
            GuestRepository.deleteGuest(eventId, guest, function(){

            }.bind(this));
        }
    };

    return EventDetailController;
});