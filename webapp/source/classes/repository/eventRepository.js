/**
 * Created by simon on 04.11.2015.
 */
define(['app/model/event'], function (Event) {

    var eventRepository = function() {

        this.events = [
            { id: 1, name: 'Lunch', description: "blabla", targetGroup: "Alle", contributionDescription: "Chueche", location: { name: 'HSR', street:'Oberseestrasse', plz: 8640, city: 'Rapperswil'}, times: {begin: new Date(2015, 9, 22, 11, 00), end: new Date(2015, 9, 22, 12, 40)}, maximumAmountOfGuests: 50 },
            { id: 1, name: 'Dinner', description: "blabla", targetGroup: "Alle", contributionDescription: "Guetzli", location: { name: 'HSR', street:'Oberseestrasse', plz: 8640, city: 'Rapperswil'}, times: {begin: new Date(2015, 9, 22, 10, 00), end: new Date(2015, 9, 22, 16, 00)}, maximumAmountOfGuests: 250 },
            { id: 1, name: 'Zmorge', description: "blabla", targetGroup: "Familie", contributionDescription: "Egal", location: { name: 'HSR', street:'Oberseestrasse', plz: 8640, city: 'Rapperswil'}, times: {begin: new Date(2015, 9, 22, 15, 00), end: new Date(2015, 9, 22, 23, 50)}, maximumAmountOfGuests: 100 }
        ];

        this.all = function () {
            return this.events;
        };

        this.get = function (id){
            var event = this.events.filter(function(event){
                return event.id == id;
            })[0];
            return (event) ? event : null;
        };

        this.addEvent = function(event){
            events.add(event);
        };

        this.addGuest = function(guest){
          events.guests.add(guest);
        }
    };

    return eventRepository;
});

