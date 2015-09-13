angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('drugsCtrl', function($scope, Drugs) {
    
    $scope.submit = function() {
        $scope.loaded = false;
        $scope.search.lastSubmitted = $scope.search.text;
        
        $scope.drugs = Drugs.query({search: $scope.search.text}, function() {
            $scope.submitted = true;
            $scope.loaded = true;
        });
    }
    
    $scope.restart = function() {
        $scope.submitted = false;
        $scope.loaded = false;
        $scope.search = {};
        
        $scope.drugs = Drugs.query(function() {
            $scope.loaded = true;
        });
    }
    
    //on page load
    $scope.restart();
        
})
.controller('disambiguationCtrl', function($scope, $stateParams, $location, vmpAmps) {
    $scope.amps = vmpAmps.query({vpid: $stateParams.VPID}, function() {
        if ($scope.amps.length > 1){
            $scope.drugs = $scope.amps;
            $scope.loaded = true;
        }
        else {
            $location.url('/app/drugs/' + $scope.amps[0].APID);
        }
    });

})

.controller('drugCtrl', function($scope, $stateParams, $ionicModal, Drugs, ampDetails, vmpDetails) {

    $scope.patient = {};
       
    if ($stateParams.APID) {    
        ampDetails.query({apid: $stateParams.APID}, function(res) {
            $scope.drug = res[0];
            $scope.loaded = true;
        })
    }
    else {    
        vmpDetails.query({vpid: $stateParams.VPID}, function(res) {
            $scope.drug = res[0];
            $scope.loaded = true;
        })
    }
        

    // patient modal
      $ionicModal.fromTemplateUrl('templates/patient.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.patientModal = modal;
      });

      $scope.closePatient = function() {
        $scope.patientModal.hide();
      };

      $scope.openPatientInfo = function() {
        $scope.patientModal.show();
      };
    
    // confirm modal
      $ionicModal.fromTemplateUrl('templates/confirmation.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.confirmModal = modal;
      });

      $scope.closeConfirm = function() {
        $scope.confirmModal.hide();
      };

      $scope.openConfirm = function() {
        $scope.confirmModal.show();
      };

});
