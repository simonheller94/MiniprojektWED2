define(['tests/factories/eventFactory',
        'tests/factories/guestFactory',
        'app/model/guest',
        'app/repository/guestRepository',
        'app/repository/eventRepository',
        'libraries/angularMocks'],
    function (EventFactory,
              GuestFactory,
              Guest,
              GuestRepository,
              EventRepository,
              AngularMocks) {
        'use strict';

        describe('GuestRepository', function() {
            var event, guest, guests, guestRepository, $http, $httpBackend, eventRepository;


            beforeEach(AngularMocks.inject(function($injector){
                $http = $injector.get('$http');
                $httpBackend = $injector.get('$httpBackend');

                eventRepository = new EventRepository($http);
                event = EventFactory.createEvent(1);

                guestRepository = new GuestRepository($http);
                guest = GuestFactory.createGuest(1);
                guests = [GuestFactory.createGuest(1), GuestFactory.createGuest(2)];

                $httpBackend.when('GET', guestRepository.urls.update.replace(':eventId',event.id).replace(':guestId',guest.id)).respond(guest);
                $httpBackend.when('GET', '/api/events/1/guests/null').respond(404, 'Guest with id null not found.');
                $httpBackend.when('GET', '/api/events/1/guests/test').respond(404, 'Guest with id test not found.');
                $httpBackend.when('POST', guestRepository.urls.update.replace(':eventId',event.id).replace(':guestId',guest.id)).respond(event);
                $httpBackend.when('POST', '/api/events/1/guests/1/delete').respond(500, 'delete successful');
                $httpBackend.when('POST', guestRepository.urls.add.replace(':eventId',event.id)).respond(guest);
            }));

            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            describe('getGuest()', function() {

                describe('by id', function() {
                    it('get same event', function () {
                        guestRepository.getGuest(event.id, guest.id, function(newGuest){
                            expect(newGuest.id).toEqual(guest.id);
                        }, function(){});
                        $httpBackend.flush();
                    });
                });

                describe('by inexistent id', function() {

                    it('returns error with null', function() {
                        guestRepository.getGuest(event.id, null, function(){
                        }, function(error){
                            expect(error).toEqual('Event with id null not found.');
                        });
                        $httpBackend.flush();
                    });

                    it('returns error with false id', function(){
                        guestRepository.getGuest(event.id, 'test', function() {
                        }, function(error){
                            expect(error).toEqual('Event with id test not found.');
                        });
                        $httpBackend.flush();
                    })
                });
            });

            describe('addGuest()', function() {
                it('add guest successful', function() {
                    guestRepository.addGuest(event.id, guest, function(newGuest){
                        expect(newGuest.id).toEqual(guest.id);
                    }, function(){});
                    $httpBackend.flush();
                });
            });

            describe('deleteGuest()', function(){
                it('delete guest successful', function(){
                    guestRepository.deleteGuest(event.id, guest, function(success){
                        expect(success).ToEqual('delete successful');
                    }, function(){});
                    $httpBackend.flush();
                })
            });

            describe('updateGuest()', function() {
                it('update guest successful', function() {
                    guestRepository.updateGuest(event.id, guest.id, guest, function(newGuest){
                        expect(newGuest.id).toEqual(guest.id);
                    }, function(){});
                    $httpBackend.flush();
                });
            });
        });

    }
);