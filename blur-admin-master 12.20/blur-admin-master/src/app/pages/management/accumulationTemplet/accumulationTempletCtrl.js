/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationTemplet')
      .controller('accumulationTempletCtrl', accumulationTempletCtrl);

  /** @ngInject */
  function accumulationTempletCtrl($scope, $timeout) {
    $scope.progressFunction = function() {
      return $timeout(function() {}, 3000);
    };
  }

})();
