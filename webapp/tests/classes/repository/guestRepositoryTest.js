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
                /*$httpBackend.when('POST', guestRepository.urls.delete.replace(':eventId',event.id).replace(':guestId', guest.id).respond(500, 'delete successful'));*/
                $httpBackend.when('POST', '/api/events/1/guests/1/delete').respond(500, 'delete successful');
                $httpBackend.when('POST', guestRepository.urls.add.replace(':eventId',event.id)).respond(guest);
            }));

            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            describe('addGuest()', function() {
                it('add guest successful', function() {
                    guestRepository.testaddGuest(event.id, guest, function(newGuest){
                        expect(newGuest.id).toEqual(guest.id);
                    }, function(){});
                    $httpBackend.flush();
                });
            });

            describe('deleteGuest()', function(){
                it('delete guest successful', function(){
                    guestRepository.testdeleteGuest(event.id, guest, function(success){
                        expect(success).ToEqual('delete successful');
                    }, function(){});
                    $httpBackend.flush();
                })
            })
        });

    }
);