// public/js/controllers/NerdCtrl.js
angular.module('NerdCtrl', []).controller('NerdController', ['$scope', 'NerdsSrv', function($scope,NerdsSrv) {
    $scope.tagline = 'Some nerds with gadgets';
    
    NerdsSrv.get().success(function(data) {
                $scope.nerds = data;
		// Construct the nerds by adding gadgets
		$scope.nerds.forEach(function(entry){
			NerdsSrv.getGadgets(entry._id).success(function(data){
				entry.gadgets = data;
			});
		});
            });
    $scope.createNerd = function(formData){
	NerdsSrv.create(formData).success(function(data){
		$scope.nerds = data;
		// Construct the nerds by adding gadgets
		$scope.nerds.forEach(function(entry){
			NerdsSrv.getGadgets(entry._id).success(function(data){
				entry.gadgets = data;
	                });
		});
        });
    }

    $scope.deleteNerd = function(nerdId){
	NerdsSrv.delete(nerdId).success(function(data){
		$scope.nerds = data;
		// Construct the nerds by adding gadgets
		$scope.nerds.forEach(function(entry){
			NerdsSrv.getGadgets(entry._id).success(function(data){
				entry.gadgets = data;
	                });
		});
        });
    }
}]);
