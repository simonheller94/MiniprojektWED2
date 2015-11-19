/**
 * Created by simon on 19.11.2015.
 */
define([], function(){
    'use strict';

    var uuidService = {};

    uuidService.getRandomUuid = function () {

        var time = new Date().getTime();

        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(char) {
            var random = (time + Math.random() * 16) % 16 | 0;
            time = Math.floor(time / 16);
            return (char == 'x' ? random : (random & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    return uuidService;
});