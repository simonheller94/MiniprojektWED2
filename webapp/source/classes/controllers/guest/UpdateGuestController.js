define([], function () {

    var UpdateGuestController =  function($scope, $routeParams, GuestRepository){

        showMessage();

        var route = $routeParams;

        GuestRepository.getGuest($routeParams.eventId, $routeParams.guestId, function(guest){
            console.log(guest);
            $scope.guest = guest;
        } );

        $scope.updateGuest = function(loc){
            GuestRepository.updateGuest($routeParams.eventId, $routeParams.guestId,{
                name: $scope.guest.name,
                contribution: $scope.guest.contribution,
                comment: $scope.guest.comment
            },loc+$routeParams.eventId , function(){
                showMessage('guestUpdated');
            }, function(){
                showMessage('errorUpdatingGuest');
            })
        };

        function showMessage(message){
            $scope.guestUpdated = false;
            $scope.errorUpdatingGuest = false;
            $scope.errorCancelingGuest = false;
            $scope.guestCanceled = false;
            switch(message){
                case 'guestUpdated':
                    $scope.guestUpdated = true;
                    break;
                case 'guestCanceled':
                    $scope.guestCanceled = true;
                    break;
                case 'errorUpdatingGuest':
                    $scope.errorUpdatingGuest = true;
                    break;
                case 'errorCancelingGuest':
                    $scope.errorCancelingGuest = true;
                    break;
            }
        }
    };

    UpdateGuestController.$inject = ['$scope', 'EventRepository', '$routeParams'];

    return UpdateGuestController;
});