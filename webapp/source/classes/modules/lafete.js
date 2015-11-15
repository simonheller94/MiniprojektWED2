/**
 * Created by simon on 28.10.2015.
 */

// declare dependency to angular (similar to import in java)
define(['frameworks/angular', 'app/controllers/EventListController', 'app/services/StorageService', 'libraries/angularRoute'],
    function (Angular, EventListController, StorageService) {
        "use strict";

        //module
        var Lafete = Angular.module('lafete', ['ngRoute']);

        // Service
        Lafete.service('StorageService', StorageService);

        //controllers
        EventListController.$inject = ["$scope", 'StorageService'];
        Lafete.controller('EventListController', EventListController);

        /*Lafete.config(function($routeProvider){
           $routeProvider.when('/list', {
               controller: 'EventListController',
               templateUrl: '/view/list.html'
           })
               .otherwise({
                   redirectTo: '/list'
               });
        });*/


    // export module to use it in other classes
    return Lafete;
});


