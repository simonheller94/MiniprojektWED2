/**
 * Created by simon on 01.12.2015.
 */
define(['app/model/event', 'tests/factories/eventFactory'],
    function(Event, EventFactory) {
        'use strict'

        describe('Event', function() {
            var event;

            beforeEach(function(){
                event = EventFactory.createEvent();
            });

            describe('event id', function() {
                it('is a UUID', function() {
                    var uuidRegex = new RegExp('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}');
                    expect(Event.id).toMatch(uuidRegex);
                })
            })
        });

    });