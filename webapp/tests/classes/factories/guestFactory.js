define(['app/model/guest'], function (Guest) {
    'use strict';

    var guestFactory = {
        createGuest: function(identifier) {
            return new Guest(
                identifier,
                'Markus Stolze',
                'Chueche',
                'chume spöter'
            );
        }
    };

    return guestFactory;
});