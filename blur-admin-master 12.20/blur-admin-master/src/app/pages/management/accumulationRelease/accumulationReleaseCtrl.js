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

      var vm = this;
      $http.get('app/pages/management/accumulationRelease/accumulationRelease.json').success(function(res) {
        vm.smartTablePupdateUserSize = 10;
        vm.smartTableData = res ;
        console.log(res);
        console.log(vm.smartTableData);
    });
        console.log(vm.smartTableData);
   




    
  }

})();
