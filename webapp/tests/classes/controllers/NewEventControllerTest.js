
define(['app/controllers/event/NewEventController',
        'frameworks/angular',
        'libraries/angularMocks'],
    function (NewEventController, Angular, AngularMocks, $location) {
        'use strict';

        var newEventController, scope, eventRepository;
        var successful = false;

        beforeEach(AngularMocks.inject(function($injector) {

            scope = $injector.get('$rootScope').$new();

            eventRepository = {
                addEvent: function() {
                    successful = true;
                }
            };

            newEventController = new NewEventController(scope, $location, eventRepository);

        }));

        describe('NewEventController', function() {
                it('create new event', function() {

                   newEventController.scope.addNewEvent("/");

                    expect(successful).toBe(true);
                });
        });
    });