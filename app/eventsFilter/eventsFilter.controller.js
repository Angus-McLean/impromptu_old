(function () {
  angular.module('app')
    .controller('eventsFilterCtrl', eventsFilterCtrl);

  eventsFilterCtrl.inject = ['$scope', '$timeout', '$mdDialog'];

  function eventsFilterCtrl($scope, $timeout, $mdDialog) {
    console.log('eventsFilterCtrl');

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
        controller: DialogController,
        templateUrl: 'tabDialog.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      });
    }

    $scope.groups = [
      {
        name : 'The homies',
        members : ['Angus McLean', 'Jason Banks', 'Rebecca Jones']
      },
      {
        name : 'The Platoon',
        members : ['Rebecca Jones', 'Angus McLean', 'Jason Banks']
      },
      {
        name : 'The Platoon',
        members : ['Rebecca Jones', 'Angus McLean', 'Jason Banks']
      },
      {
        name : 'The Platoon',
        members : ['Rebecca Jones', 'Angus McLean', 'Jason Banks']
      }
    ];
    $scope.events = [
      {
        name : 'This cool event',
        members : ['William Shakespeare', 'Jason Banks', 'Rebecca Jones', 'Laura James', 'James McGill']
      },
      {
        name : 'Birthday Party',
        members : ['Laura James', 'William Shakespeare', 'Jason Banks', 'Rebecca Jones', 'James McGill']
      },
      {
        name : 'Birthday Party',
        members : ['Laura James', 'William Shakespeare', 'Jason Banks', 'Rebecca Jones', 'James McGill']
      },
      {
        name : 'Birthday Party',
        members : ['Laura James', 'William Shakespeare', 'Jason Banks', 'Rebecca Jones', 'James McGill']
      }
    ];
    $scope.friends = [
      {
        name : 'Angus McLean'
      },
      {
        name : 'Danny Smith'
      },
      {
        name : 'Danny Smith'
      },
      {
        name : 'Danny Smith'
      },
      {
        name : 'Danny Smith'
      }
    ];
  }
})();
