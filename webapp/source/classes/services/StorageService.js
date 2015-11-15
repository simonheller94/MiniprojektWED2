/**
 * Created by simon on 04.11.2015.
 */
define(['app/model/event'], function(Event){
    'use strict';

    var StorageService = function(){
        /*this.events = [
            { name: 'Lunch', place: 'Rapperswil', date: new Date('2015-10-10T10:00:00.000Z') },
            { name: 'Dinner', place: 'Z�rich', date: new Date('2015-04-05T16:00:00.000Z') },
            { name: 'Dinner', place: 'Rapperswil', date: new Date('2015-12-08T17:00:00.000Z') }
        ];*/
        var event1 = new Event(
            'Lunch',
            null,
            null,
            null,
            {
                city: 'Rapperswil'
            },
            {
                begin: new Date('2015-10-10T12:00:00.000Z'),
                end: new Date('2015-10-10T13:00:00.000Z')
            },
            null
        );
        var event2 = new Event(
            'Dinner',
            null,
            null,
            null,
            {
                city: 'Zuerich'
            },
            {
                begin: new Date('2015-04-05T16:00:00.000Z'),
                end: new Date('2015-04-05T17:00:00.000Z')
            },
            null
        );
        var event3 = new Event(
            'Dinner',
            null,
            null,
            null,
            {
                city: 'Rapperswil'
            },
            {
                begin: new Date('2015-12-08T17:00:00.000Z'),
                end: new Date('2015-12-08T18:00:00.000Z')
            },
            null
        );
        this.events = [
            // ...
            event1,
            event2,
            event3
        ];
    };

    return StorageService;
});