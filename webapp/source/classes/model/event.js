/**
 * Created by simon on 04.11.2015.
 */
define(['app/services/uuidService'], function(uuidService) {
    'use strict';

    return{
        id : uuidService.getRandomUuid(),
        name : '',
        description : '',
        targetGroup : '',
        contributionsDescription : '',
        maximumAmountOfGuests : '',
        location : {name: '', street: '', zipCode: '', city: ''},
        times: {begin: 0, end: 0},
        guests : []
    }

});