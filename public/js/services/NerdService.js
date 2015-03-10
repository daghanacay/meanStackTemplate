// public/js/services/NerdService.js
angular.module('NerdService', []).factory('NerdsSrv', function($http) {

    return {
        // call to get all nerds
        get : function() {
            console.log("List of nerds is requested.");
            return $http.get('/api/nerds');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/nerds', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        }
    }       

});
