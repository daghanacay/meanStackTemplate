// public/js/controllers/NerdCtrl.js
angular.module('NerdCtrl', []).controller('NerdController', ['$scope', 'NerdsSrv', function($scope,NerdsSrv) {
    $scope.tagline = 'Nothing beats a pocket protector!';
    //$scope.nerds = [{"name":"static name 1"},{"name":"static name 2"}];

    NerdsSrv.get().success(function(data) {
                $scope.nerds = data;
            });
}]);
