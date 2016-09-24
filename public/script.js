(function () {
    'use strict';

    // create app module
    angular
        .module('learninghub', ['ui.router']);

    // create config and initialize routes
    angular
        .module('learninghub')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/')
            $stateProvider
                .state('index', {
                    url: '/',
                    views: {
                        'listing': {
                            templateUrl: 'templates/listing.html',
                            controller: 'listingController',
                            controllerAs: 'listing'
                        }
                    }
                })
        })
})()