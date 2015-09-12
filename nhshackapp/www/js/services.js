(function () {
    'use strict'
    angular
        .module('starter.services', [])
        .factory('dataSvc', dataSvc);

    function dataSvc(){
        var exports = {
            getDrugs: getDrugs,
            getDrug: getDrug
        };
        

        return exports;

        ////////////////

        function getDrugs() {
            var data = [
                { 
                    name: 'A drug', 
                    description: 'sflkjs fd jslkfj sdlkfj sdklfj sdlkjf kslj f',
                    id: 1 
                },
                { 
                    name: 'Another drug', 
                    description: 'sflkjs fd jslkfj sdlkfj sdklfj sdlkjf kslj f',
                    id: 2 
                },
                { 
                    name: 'B drug', 
                    description: 'sflkjs fd jslkfj sdlkfj sdklfj sdlkjf kslj f',
                    id: 3 
                },
                { 
                    name: 'C drug',
                    description: 'sflkjs fd jslkfj sdlkfj sdklfj sdlkjf kslj f',
                    id: 4 
                },
                { 
                    name: 'D drug', 
                    description: 'sflkjs fd jslkfj sdlkfj sdklfj sdlkjf kslj f',
                    id: 5 
                },
                {
                    name: 'E drug', 
                    description: 'sflkjs fd jslkfj sdlkfj sdklfj sdlkjf kslj f',
                    id: 6 
                }
              ];
            
            return data;                
        }
        
        function getDrug(id){
            var i,
                drugs = getDrugs();
                        
            for (i=0; i<drugs.length; i++){
                if(drugs[i].id.toString() === id){
                    return drugs[i];
                }
            }
        }
    }
})();