/**
 * Created by simon on 28.10.2015.
 */

define([], function(){
    'use strict';

    var EventListController = function($scope, EventRepository){

        this.scope = $scope;
        this.scope.events = EventRepository.all();
    };

    return EventListController;

});