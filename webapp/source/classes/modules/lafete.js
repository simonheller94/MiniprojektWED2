/**
 * Created by simon on 28.10.2015.
 */

// declare dependency to angular (similar to import in java)
define(['frameworks/angular',
        'app/controllers/event/EventListController',
        'app/controllers/event/EventDetailController',
        'app/controllers/event/NewEventController',
        'app/controllers/guest/NewGuestController',
        'app/repository/eventRepository',
        'libraries/angularRoute'],
    function (Angular, EventListController, EventDetailController, NewEventController, NewGuestController, EventRepository) {
        "use strict";

        //module
        var Lafete = Angular.module('lafete', ['ngRoute']);

            //repositories
           // EventRepository.$inject = ['$http'];
            Lafete.service('EventRepository', EventRepository);

        //controllers
        EventListController.$inject = ['$scope', 'EventRepository'];
        Lafete.controller('EventListController', EventListController);

        EventDetailController.$inject = ['$scope', '$routeParams', 'EventRepository'];
        Lafete.controller('EventDetailController', EventDetailController);

        NewEventController.$inject = ['$scope', 'EventRepository'];
        Lafete.controller('NewEventController', NewEventController);

        NewGuestController.$inject = ['$scope', 'EventRepository'];
        Lafete.controller('NewGuestController', NewGuestController);



        Lafete.config(function($routeProvider){
           $routeProvider.when('/list', {
               controller: 'EventListController',
               templateUrl: 'views/event/list.html'
           })
               .when('/events/:eventId', {
                   controller: 'EventDetailController',
                   templateUrl: 'views/event/detail.html'
               })

               .when('/newEvent', {
                    controller: 'NewEventController',
                    templateUrl: 'views/event/newEvent.html'
                })

               .when('/newGuest', {
                   controller: 'NewGuestController',
                   templateUrl: 'views/event/newGuest.html'
               })
               .when('/', {
                   templateUrl: 'views/event/home.html'
               })

               .otherwise({
                   redirectTo: '/'
               });
        });


    // export module to use it in other classes
    return Lafete;
});


