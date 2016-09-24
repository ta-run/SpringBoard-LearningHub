(function() {
    'use strict';

    angular
        .module('learninghub')
        .controller('listingController', listingController)

    function listingController($http) {
        let vm = this
        vm.paths = ''
        vm.sortCriteria = ''
        vm.reverse = true
        vm.propertyName = ''

        $http
            .get('https://hackerearth.0x10.info/api/learning-paths?type=json&query=list_paths')
            .then(function(response) {
                console.dir(response.data)
                vm.paths = angular.copy(response.data.paths)
            }, function(err) {
                console.dir(err)
            })


        vm.sortBy = function(propertyName) {
            vm.propertyName = propertyName;
        };
    }
})()