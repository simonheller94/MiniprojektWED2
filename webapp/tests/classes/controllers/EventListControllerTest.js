/**
 * Created by simon on 28.10.2015.
 */
define(['app/controllers/event/eventListController',
    'frameworks/angular',
    'libraries/angularMocks',
    'app/repository/eventRepository'],
    function (EventListController, Angular, AngularMocks, EventRepository) {
    'use strict';

        var scope, eventRepository;

        beforeEach(AngularMocks.inject(function($injector) {
            scope = $injector.get('$rootScope').$new();

            var events = [{id: 1, name: 'Dinner'},{id: 2, name: 'Lunch'},{id: 3, name: 'Brunch'}];
            // Mock repository to test controller only
            eventRepository = {
                allEvents: function(successCallback) {
                    successCallback(events);
                }
            };
        }));

        describe('EventListController', function() {
            describe('property scope', function() {
                it('contains 3 events', function() {
                    var eventListController = new EventListController(scope, eventRepository);
                    expect(3).toBe(eventListController.scope.events.length);
                });
            });
        });
});