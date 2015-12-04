define(['tests/factories/eventFactory',
    'app/model/event',
    'app/repository/eventRepository',
    'libraries/angularMocks'],
    function (EventFactory,
              Event,
              EventRepository,
              AngularMocks) {

        'use strict';

        describe('EventRepository', function() {
            var event, eventRepository, $http, $httpBackend;

            // setup
            beforeEach(AngularMocks.inject(function($injector) {
                $http = $injector.get('$http');
                $httpBackend = $injector.get('$httpBackend');

                eventRepository = new EventRepository($http);
                event = EventFactory.createEvent();

                $httpBackend.when('GET', eventRepository.urls.all).respond({
                    events: [{id: 1, name: 'Dinner'},{id: 2, name: 'Lunch'},{id: 3, name: 'Brunch'}]
                });
            }));

            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            describe('getEvent()', function() {
                beforeEach(function(){
                    eventRepository.addEvent(event);
                });

                it('get same event', function() {
                   expect(eventRepository.getEvent(event.id)).toEqual(event);
                });
            });

            describe('allEvents()', function() {
                it('returns three events', function() {
                    $httpBackend.expectGET(eventRepository.urls.all);
                    var events = null;
                    eventRepository.allEvents(function(eventList) {
                        events = eventList;
                    });
                    $httpBackend.flush();
                    expect(events.length).toEqual(3);
                });
            });

            describe('addEvent()', function() {

                it('add event successful', function() {
                    var status = eventRepository.addEvent(event);
                    expect(status).toBe(true);
                });
            });
        });

    });