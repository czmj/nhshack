(function () {
    'use strict'
    angular
        .module('starter.services', [])
        .factory('Drugs', Drugs);

    function Drugs($resource){          
        return $resource('data/dummyDrugs.json');               
    }
})();