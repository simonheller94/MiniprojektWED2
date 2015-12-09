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

        /*Object.defineProperty(location, 'name', {
            get: function() {
                return this.name;
            },
            set: function(name) {
                this.name = name;
            }
        });

        Object.defineProperty(location, 'street', {
            get: function() {
                return this.street;
            },
            set: function(street) {
                this.street = street;
            }
        });

        Object.defineProperty(location, 'plz', {
            get: function() {
                return this.plz;
            },
            set: function(plz) {
                this.plz = plz;
            }
        });

        Object.defineProperty(location, 'city', {
            get: function() {
                return this.city;
            },
            set: function(city) {
                this.city = city;
            }
        });

        Object.defineProperty(times, 'begin', {
            get: function() {
                return this.begin;
            },
            set: function(begin) {
                this.begin = begin;
            }
        });

        Object.defineProperty(times, 'end', {
            get: function() {
                return this.end;
            },
            set: function(end) {
                this.end = end;
            }
        });*/

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