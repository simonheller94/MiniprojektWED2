/**
 * Created by simon on 28.10.2015.
 */
define(['app/controllers/eventListController', 'frameworks/angular', 'libraries/angularMocks', 'app/services/StorageService'],
    function (EventListController, Angular, AngularMocks, StorageService) {
    'use strict';

        var eventListController;

        beforeEach(AngularMocks.inject(function($rootScope){
            var scope = $rootScope.$new();
            var StorageService = new StorageService();
            eventListController = new EventListController(scope, StorageService);
        }));

    describe('EventListController', function() {
        describe('property scope', function() {
            it('contains 3 events', function() {
                expect(3).toBe(eventListController.scope.events.length);
            });
        });
    });
});