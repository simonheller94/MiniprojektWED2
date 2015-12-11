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
            var event,events, eventRepository, $http, $httpBackend;

            // setup
            beforeEach(AngularMocks.inject(function($injector) {
                $http = $injector.get('$http');
                $httpBackend = $injector.get('$httpBackend');

                eventRepository = new EventRepository($http);
                event = EventFactory.createEvent(1);
                events = [EventFactory.createEvent(1), EventFactory.createEvent(2), EventFactory.createEvent(3)];

                $httpBackend.when('GET', '/api/events/1').respond(event);
                $httpBackend.when('GET', '/api/events/null').respond(404, 'Event with id null not found.');
                $httpBackend.when('GET', '/api/events/test').respond(404, 'Event with id test not found.');
                $httpBackend.when('POST', '/api/events').respond(event);
                $httpBackend.when('POST', '/api/events/1').respond(event);
                $httpBackend.when('GET', eventRepository.urls.all).respond({
                    events: events
                });
            }));

            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            describe('getEvent()', function() {
               describe('by id', function() {
                   it('get same event', function () {
                       eventRepository.getEvent(event.id, function(newEvent){
                           expect(event.id).toEqual(newEvent.id);
                       }, function(){});
                       $httpBackend.flush();
                   });
               });

                describe('by inexistent id', function() {

                    it('returns error with null', function() {
                        eventRepository.getEvent(null, function() {
                        }, function(error){
                            expect(error).toEqual('Event with id null not found.');
                        });
                        $httpBackend.flush();
                    });

                    it('returns error with false id', function(){
                        eventRepository.getEvent('test', function() {
                        }, function(error){
                            expect(error).toEqual('Event with id test not found.');
                        });
                        $httpBackend.flush();
                    })
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
                    eventRepository.addEvent(event, function(newEvent){
                        expect(newEvent.id).toEqual(event.id);
                    }, function(){});
                    $httpBackend.flush();
                });
            });

            describe('updateEvent()', function(){
                it('update event successful', function(){
                    eventRepository.updateEvent(event.id, event, function(editedEvent){
                        expect(editedEvent.id).toEqual(event.id);
                    }, function(){});
                    $httpBackend.flush();
                })
            })
        });

    });