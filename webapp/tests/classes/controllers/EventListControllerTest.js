/**
 * Created by simon on 28.10.2015.
 */
define(['app/controllers/event/eventListController', 'frameworks/angular', 'libraries/angularMocks', 'app/repository/eventRepository'],
    function (EventListController, Angular, AngularMocks, EventRepository) {
    'use strict';

        var eventListController;

        //var evr = new EventRepository;

        beforeEach(AngularMocks.inject(function($rootScope){
            var scope = $rootScope.$new();
            var eventRepository = new EventRepository;
            eventListController = new EventListController(scope, eventRepository);
        }));

    describe('EventListController', function() {
        describe('property scope', function() {
            it('contains 3 events', function() {
                expect(3).toBe(eventListController.scope.events.length);
            });
        });
    });
});