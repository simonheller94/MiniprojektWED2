/**
 * Created by simon on 01.12.2015.
 */

define([], function(){

    var Guest = function(id, name, contribution, comment, canceled){
        this.id = id;
        this.name = name;
        this.constribution = contribution;
        this.comment = comment;
        this.canceled = canceled;
    };

    return Guest;
});