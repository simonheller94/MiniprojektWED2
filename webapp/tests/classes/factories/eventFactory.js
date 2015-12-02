/**
 * Created by simon on 01.12.2015.
 */
define(['app/model/event'], function (Event) {
    'use strict';

    var EventFactory = {
        createEvent: function() {
            return new Event(
                // COPIED from eventTest.js
            );
        }
    };

    return EventFactory;
});
