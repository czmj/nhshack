(function () {
    'use strict'
    angular
        .module('starter.services', [])
        .factory('Drugs', Drugs)
        .factory('ampDetails', ampDetails)
        .factory('vmpDetails', vmpDetails)
        .factory('vmpAmps', vmpAmps);

    function Drugs($resource){
        return $resource('http://nhshackday.default.tdobson.uk0.bigv.io');               
    }
    function ampDetails($resource){
        return $resource('http://nhshackday.default.tdobson.uk0.bigv.io/ampdetails.php');               
    }
    function vmpDetails($resource){
        return $resource('http://nhshackday.default.tdobson.uk0.bigv.io/vmpdetails.php');               
    }
    function vmpAmps($resource){
        return $resource('http://nhshackday.default.tdobson.uk0.bigv.io/vmpamps.php');               
    }
})();