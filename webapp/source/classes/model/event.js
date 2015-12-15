define(['app/services/uuidService'], function(uuidService) {
    'use strict';

    var Event = function (id, name, description, targetGroup, contributionsDescription, location, times, maxGuests) {
        this.id = id || uuidService.getRandomUuid();
        this.name = name;
        this.description = description;
        this.targetGroup = targetGroup;
        this.contributionsDescription = contributionsDescription;
        this.location = location;
        this.times = times;
        this.maxGuests = maxGuests;
        this.guests = [];

    };

    Event.createFromDTO = function(jsonData) {
        return new Event(
            jsonData.id,
            jsonData.name,
            jsonData.description,
            jsonData.targetGroup,
            jsonData.contributionsDescription,
            jsonData.location,
            {
                begin: new Date(jsonData.times.begin),
                end: new Date(jsonData.times.end)
            },
            jsonData.maxGuests
        )
    };

    return Event;

});