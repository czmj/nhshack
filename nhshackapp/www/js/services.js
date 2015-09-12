(function () {
    'use strict'
    angular
        .module('starter.services', [])
        .factory('Drugs', Drugs);

    function Drugs($resource){
        return $resource('http://nhshackday.default.tdobson.uk0.bigv.io');               
    }
})();