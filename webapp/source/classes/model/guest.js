
define([], function(){

    var Guest = function(id, name, contribution, comment){
        this.id = id;
        this.name = name;
        this.contribution = contribution;
        this.comment = comment;
    };

    return Guest;
});