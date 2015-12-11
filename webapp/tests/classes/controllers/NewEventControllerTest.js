
define(['app/controllers/event/NewEventController',
        'frameworks/angular',
        'libraries/angularMocks',
        'app/repository/eventRepository',
        'app/model/event',
        'tests/factories/eventFactory'],
    function (NewEventController, Angular, AngularMocks, EventRepository, Event, EventFactory) {
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

            newEventController = new NewEventController(scope, eventRepository);

        }));

        describe('NewEventController', function() {
                it('create new event', function() {

                   newEventController.scope.addNewEvent("/");

                    expect(successful).toBe(true);
                });
        });
    });