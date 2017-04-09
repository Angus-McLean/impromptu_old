(function () {
  angular.module('app')
    .controller('fabMenuCtrl', fabMenuCtrl);

  fabMenuCtrl.inject = ['$scope', '$timeout', '$mdDialog'];

  function fabMenuCtrl($scope, $timeout, $mdDialog) {
    console.log('fabMenuCtrl');

    $scope.tooltipVisible = false;
    $scope.isOpen = false;
    $scope.$watch('isOpen', function (newVal) {
      if(newVal) {
        $timeout(function () {
          $scope.tooltipVisible = true;
        }, 500);
        $timeout(function () {
          $scope.tooltipVisible = false;
        }, 3000);
      } else {
        $scope.tooltipVisible = false;
      }
    });

    $scope.openFilters = function (ev) {
      $mdDialog.show({
        controller: 'eventsFilterCtrl',
        templateUrl: '/app/eventsFilter/eventsFilter.view.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      });
    };
  }
})();
