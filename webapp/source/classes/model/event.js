/**
 * Created by simon on 04.11.2015.
 */
define(['app/services/uuidService'], function(uuidService) {
    'use strict';

    var Event = function (id, name, description, targetGroup, contributionsDescription, location, times, maximumAmountOfGuests) {
        this.id = id || uuidService.getRandomUuid();
        this.name = name;
        this.description = description;
        this.targetGroup = targetGroup;
        this.contributionsDescription = contributionsDescription;
        this.maximumAmountOfGuests = maximumAmountOfGuests;
        this.location = location;
        this.times = times;
        this.guests = [];

        //times und location getter und setter
    };

    return Event;

});