
define(['app/controllers/guest/NewGuestController',
        'frameworks/angular',
        'libraries/angularMocks'],
    function (NewGuestController, Angular, AngularMocks, $location) {
        'use strict';

        var newGuestController, scope, routeParams, guestRepository;
        var successful = false;

        beforeEach(AngularMocks.inject(function($injector) {

            scope = $injector.get('$rootScope').$new();
            routeParams = {};

            guestRepository = {
                addGuest: function() {
                    successful = true;
                }
            };

            newGuestController = new NewGuestController(scope, routeParams, $location, guestRepository);

        }));

        describe('NewGuestController', function() {
            it('create new guest', function() {

                newGuestController.scope.addNewGuest("/");

                expect(successful).toBe(true);
            });
        });
    });