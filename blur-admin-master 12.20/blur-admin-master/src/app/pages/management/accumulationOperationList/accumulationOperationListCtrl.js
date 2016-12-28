/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationOperationList')
      .controller('accumulationOperationListCtrl', accumulationOperationListCtrl);

  /** @ngInject */
  function accumulationOperationListCtrl($scope, $filter, editableOptions, editableThemes) {

    $scope.smartTablePageSize = 10;

    $scope.smartTableData = [
      {
        "id": "1",
        "creditItem": "笔杆子",
        "isEnable": "1"
      },
      {
        "id": "2",
        "creditItem": "金手指",
        "isEnable": "0"
      }
    ];

    $.each($scope.smartTableData,function(i){
        if($scope.smartTableData[i].isEnable == "1"){
          $scope.smartTableData[i].isEnable = "启用";
        }
        else{
          $scope.smartTableData[i].isEnable = "停用";
        }
    });

    $scope.editableTableData = $scope.smartTableData.slice(0, 36);


    $scope.showGroup = function(user) {
      if(user.group && $scope.groups.length) {
        var selected = $filter('filter')($scope.groups, {id: user.group});
        return selected.length ? selected[0].text : 'Not set';
      } else return 'Not set'
    };

    $scope.showStatus = function(user) {
      var selected = [];
      if(user.status) {
        selected = $filter('filter')($scope.statuses, {value: user.status});
      }
      return selected.length ? selected[0].text : 'Not set';
    };


    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

    $scope.addUser = function() {
      $scope.inserted = {
        id: $scope.users.length+1,
        name: '',
        status: null,
        group: null
      };
      $scope.users.push($scope.inserted);
    };

    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


  }

})();
