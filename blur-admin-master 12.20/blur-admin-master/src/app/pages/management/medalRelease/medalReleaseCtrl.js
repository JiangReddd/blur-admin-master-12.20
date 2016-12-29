/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function ()
{
    'use strict';

    angular.module('BlurAdmin.pages.management.medalRelease')
    .controller('medalReleaseCtrl', medalReleaseCtrl);

    /** @ngInject */
    function medalReleaseCtrl($http, $q, $filter, editableOptions, editableThemes)
    {
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

        vm.smartTablePageSize = 10;

        getJson('app/pages/management/medalRelease/medalRelease_smartTableData.json', 'smartTableData').then(function ()
        {
            return getJson('app/pages/management/medalRelease/medalRelease_peopleTableData.json', 'peopleTableData');
        }
        ).then(function ()
        {
            return getJson('app/pages/management/medalRelease/medalRelease_metricsTableData.json', 'metricsTableData');
        }
        ).then(function ()
        {
            return getJson('app/pages/management/medalRelease/medalRelease_users.json', 'users');
        }
        ).then(function ()
        {
            return getJson('app/pages/management/medalRelease/medalRelease_statuses.json', 'statuses');
        }
        ).then(function ()
        {
            return getJson('app/pages/management/medalRelease/medalRelease_groups.json', 'groups');
        }
        ).then(function ()
        {

            vm.showGroup = function (user)
            {
                if (user.group && vm.groups.length)
                {
                    var selected = $filter('filter')(vm.groups,
                        {
                            id : user.group
                        }
                        );
                    return selected.length ? selected[0].text : 'Not set';
                }
                else
                    return 'Not set'
            };

            vm.showStatus = function (user)
            {
                var selected = [];
                if (user.status)
                {
                    selected = $filter('filter')(vm.statuses,
                        {
                            value : user.status
                        }
                        );
                }
                return selected.length ? selected[0].text : 'Not set';
            };

            vm.removeUser = function (index)
            {
                vm.users.splice(index, 1);
            };

            vm.addUser = function ()
            {
                vm.inserted =
                {
                    id : vm.users.length + 1,
                    name : '',
                    status : null,
                    group : null
                };
                vm.users.push(vm.inserted);
            };

            editableOptions.theme = 'bs3';
            editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
            editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i  class="ion-close-round"></i></button>';
            return;
        }
        );

    }

}
)();
