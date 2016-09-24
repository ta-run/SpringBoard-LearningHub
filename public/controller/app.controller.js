(function() {
    'use stict';

    angular
        .module('learninghub')
        .controller('siteController', siteController)


    function siteController() {
        let vm = this

        vm.name = 'Learning Hub'
    }
})()