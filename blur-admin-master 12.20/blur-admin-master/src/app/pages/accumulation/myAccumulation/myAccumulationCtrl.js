/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.accumulation.myAccumulation')
      .controller('myAccumulationCtrl', myAccumulationCtrl);

  /** @ngInject */
  function myAccumulationCtrl($http, $q, $filter, editableOptions, editableThemes) {

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


          getJson('app/pages/accumulation/myAccumulation/myAccumulation.json', 'smartTableData').then(function ()
          {

             }
          );

/*          vm.test = function(){
            console.log("1");
          }
*/
  }

})();
