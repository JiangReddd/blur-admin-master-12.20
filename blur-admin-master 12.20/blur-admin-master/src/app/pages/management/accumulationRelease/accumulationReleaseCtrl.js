/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationRelease')
      .controller('accumulationReleaseCtrl', accumulationReleaseCtrl);

  /** @ngInject */
  function accumulationReleaseCtrl($http, $q, $filter, editableOptions, editableThemes) {

      var vm = this;

              function getJson(url, target)
              {
                  var deferred = $q.defer();
                  $http.get(url)
                  .success(function (d)
                  {
                      console.log(d);

                      vm[target] = d;

                      deferred.resolve();
                  }
                  )

                  return deferred.promise;
              }

        getJson('app/pages/management/accumulationRelease/accumulationRelease.json', 'smartTableData').then(function ()
        {

           }
        );
   




    
  }

})();
