/**
 * Created by simon on 02.12.2015.
 */

define(['app/model/guest'], function(Guest){

    var NewGuestController = function($scope){

        $scope.guest = new Guest();

        $scope.addNewGuest = function(){

            console.log("Es gaht au");
        }

    };

    return NewGuestController;
});