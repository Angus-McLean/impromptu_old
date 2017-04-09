(function () {
  angular.module('app')
    .controller('fabMenuCtrl', fabMenuCtrl);

  fabMenuCtrl.inject = ['$scope', '$timeout'];

  function fabMenuCtrl($scope, $timeout) {
    console.log('fabMenuCtrl');

    var self = this;
    self.isOpen = false;
    self.openTooltips = function () {
      if(!self.isOpen) {
        $timeout(function () {
          self.tooltipVisible = true;
        }, 500);
        $timeout(function () {
          self.tooltipVisible = false;
        }, 3000);
      } else {
        self.tooltipVisible = false;
      }
    };
  }
})();
