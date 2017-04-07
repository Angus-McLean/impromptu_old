(function () {
  angular.module('app')
  .controller('sidenavCtrl', sidenavCtrl);

  sidenavCtrl.inject = ['$scope', '$mdSidenav', '$state'];

  function sidenavCtrl($scope, $mdSidenav, $state) {

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.uiNavigate = uiNavigate;

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

    function uiNavigate(stateName) {
      $state.go(stateName);
      $scope.toggleLeft();
    }
  }
})();
