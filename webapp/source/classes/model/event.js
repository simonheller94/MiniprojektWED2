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

        Object.defineProperty(this, 'begin', {
            get: function() {
                return this.times.begin;
            },
            set: function(begin) {
                this.times.begin = new Date(begin);
            }
        });

        Object.defineProperty(this, 'end', {
            get: function() {
                return this.times.end;
            },
            set: function(end) {
                this.times.end = new Date(end);
            }
        });

    };

    Event.createFromDTO = function(jsonData) {
        return new Event(
            jsonData.id,
            jsonData.name,
            jsonData.description,
            jsonData.targetGroup,
            jsonData.contributionsDescription,
            jsonData.location,
            jsonData.times,
            jsonData.maxGuests
        )

    };

    return Event;

});