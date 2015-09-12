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
                    doses: [15, 20, 30],
                    id: 1 
                },
                { 
                    name: 'Another drug', 
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus nisi vitae scelerisque porttitor. Ut turpis nisi, mollis vitae commodo in, auctor vitae ante. Integer eu velit erat. Pellentesque a lorem sed nunc ornare auctor ut pretium neque. Aliquam elit erat, condimentum rhoncus ullamcorper nec, efficitur lobortis purus. Nulla ex.',
                    doses: [15, 20, 30],
                    id: 2 
                },
                { 
                    name: 'B drug', 
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus nisi vitae scelerisque porttitor. Ut turpis nisi, mollis vitae commodo in, auctor vitae ante. Integer eu velit erat. Pellentesque a lorem sed nunc ornare auctor ut pretium neque. Aliquam elit erat, condimentum rhoncus ullamcorper nec, efficitur lobortis purus. Nulla ex.',
                    doses: [15, 20, 30],
                    id: 3 
                },
                { 
                    name: 'C drug',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus nisi vitae scelerisque porttitor. Ut turpis nisi, mollis vitae commodo in, auctor vitae ante. Integer eu velit erat. Pellentesque a lorem sed nunc ornare auctor ut pretium neque. Aliquam elit erat, condimentum rhoncus ullamcorper nec, efficitur lobortis purus. Nulla ex.',
                    doses: [15, 20, 30],
                    id: 4 
                },
                { 
                    name: 'D drug', 
                    description: 'sflkjs fd jslkfj sdlkfj sdklfj sdlkjf kslj f',
                    doses: [15, 20, 30],
                    id: 5 
                },
                {
                    name: 'E drug', 
                    description: 'sflkjs fd jslkfj sdlkfj sdklfj sdlkjf kslj f',
                    doses: [15, 20, 30],
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