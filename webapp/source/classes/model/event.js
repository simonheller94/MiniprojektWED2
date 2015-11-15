/**
 * Created by simon on 04.11.2015.
 */
define(['app/services/StorageService'], function(StorageService) {
    'use strict';

    var Event = function(id, name, description, targetGroup, contributionsDescription, location, times, maximalAmountOfGuests) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.targetGroup = targetGroup;
    this.contributionsDescription = contributionsDescription;
    this.location = location;
    this.times = times;
    //this.guests = maximalAmountOfGuests;


    Object.defineProperty(this, 'begin', {
        get: function () {
            return this.times.begin;
        },
        set: function (begin) {
            this.times.begin = begin;
        }
    });

    Object.defineProperty(this, 'end', {
        get: function() {
            return this.times.end;
        },
        set: function(end) {
            this.times.end = end;
        }
    });

};
    return Event;

});