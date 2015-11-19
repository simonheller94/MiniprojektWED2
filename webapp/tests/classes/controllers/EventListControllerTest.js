/**
 * Created by simon on 28.10.2015.
 */
define(['app/controllers/eventListController', 'frameworks/angular', 'libraries/angularMocks'],
    function (EventListController, Angular, AngularMocks) {
    'use strict';

        /*beforeEach(AngularMocks.inject(function($rootScope){
            var scope = $rootScope.$new();
            var StorageService = new StorageService;
            eventListController = new EventListController(scope, StorageService);
        }));*/

    describe('EventListController', function() {
        describe('property scope', function() {
            it('contains 3 events', function() {
                var scope = {};
                var eventListController = new EventListController(scope);
                expect(3).toBe(eventListController.scope.events.length);
            });
        });
    });
});