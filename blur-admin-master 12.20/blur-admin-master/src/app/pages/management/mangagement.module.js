/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.management', [
    
      'BlurAdmin.pages.management.medalRelease',

      'BlurAdmin.pages.management.medalOperationList',

      'BlurAdmin.pages.management.medalRuleModify',

      'BlurAdmin.pages.management.medalTemplet',

      'BlurAdmin.pages.management.accumulationRuleModify',

      'BlurAdmin.pages.management.accumulationOperationList',

      'BlurAdmin.pages.management.accumulationTemplet',

      'BlurAdmin.pages.management.accumulationRelease',

    ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('management', {
        url: '/management',
        template: '<ui-view></ui-view>',
        abstract: true,
        title: '用户管理',
        sidebarMeta: {
          icon: 'ion-ios-person',
          order: 100,
        },
      });
  }
})();