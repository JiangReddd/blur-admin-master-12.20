/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationRelease')
      .controller('accumulationReleaseCtrl', accumulationReleaseCtrl);

  /** @ngInject */
  function accumulationReleaseCtrl($scope, $filter, editableOptions, editableThemes,$http) {

      
      $http.get('app/pages/management/accumulationRelease/accumulationRelease.json').success(function(res) {
        $scope.smartTablePupdateUserSize = 10;
        $scope.smartTableData = res ;
        console.log(res);
        console.log($scope.smartTableData);
    });
   




    
  }

})();
