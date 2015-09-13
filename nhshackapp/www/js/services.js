(function () {
    'use strict'
    angular
        .module('starter.services', [])
        .factory('Drugs', Drugs)
        .factory('ampDetails', ampDetails)
        .factory('vmpDetails', vmpDetails)
        .factory('vmpAmps', vmpAmps)
        .factory('Code4Health', Code4Health);

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
    function Code4Health($resource){
        return $resource('https://rest.ehrscape.com/rest/v1/composition?ehrId=ed0b8444-7320-4f06-901a-722978edda1b&templateId=GP Summary (composition)&committerName=handi&format=FLAT', {}, {
            post: {
                method: 'POST',
                headers: { 
                   'Content-Type': 'application/json',
                   'Authorization': 'Basic aGFuZGk6UlBFY0M4NTk=',
                    'Cache-Control': 'no-cache'
                }
            }
        });               
    }
})();