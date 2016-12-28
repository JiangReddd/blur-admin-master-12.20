/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationRelease')
      .controller('accumulationReleaseCtrl', accumulationReleaseCtrl);

  /** @ngInject */
  function accumulationReleaseCtrl($scope, $filter, editableOptions, editableThemes) {

    $scope.smartTablePupdateUserSize = 10;

    $scope.smartTableData = [
      {
        id: 1,
        userName: 'Mark',
        userId: '@mdo',
        creditItem: '加班积分',
        updateUser: '张三',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        id: 2,
        userName: 'Jacob',
        userId: '@fat',
        creditItem: '加班积分',
        updateUser: '黄伟文',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        id: 3,
        userName: 'Larry',
        userId: '@twitter',
        creditItem: '加班积分',
        updateUser: '黄伟文',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        id: 4,
        userName: 'John',
        userId: '@snow',
        creditItem: '假日加班积分',
        updateUser: '黄伟文',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        id: 5,
        userName: 'Jack',
        userId: '@jack',
        creditItem: '加班积分',
        updateUser: '黄伟文',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        id: 6,
        userName: 'Ann',
        userId: '@ann',
        creditItem: '加班积分',
        updateUser: '黄伟文',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        id: 7,
        userName: 'Barbara',
        userId: '@barbara',
        creditItem: '奖励积分',
        updateUser: '黄伟文',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        id: 8,
        userName: 'Sevan',
        userId: '@sevan',
        creditItem: '奖励积分',
        updateUser: '黄伟文',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        id: 9,
        userName: 'Ruben',
        userId: '@ruben',
        creditItem: '奖励积分',
        updateUser: '黄伟文',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        id: 10,
        userName: 'Karen',
        userId: '@karen',
        creditItem: '奖励积分',
        updateUser: '黄伟文',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        id: 11,
        userName: 'Mark',
        userId: '@mark',
        creditItem: '奖励积分',
        updateUser: '黄伟文',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        id: 12,
        userName: 'Jacob',
        userId: '@jacob',
        creditItem: '奖励积分',
        updateUser: '黄伟文',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        id: 13,
        userName: 'Haik',
        userId: '@haik',
        creditItem: '奖励积分',
        updateUser: '黄伟文',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        id: 14,
        userName: 'Garegin',
        userId: '@garegin',
        creditItem: '奖励积分m',
        updateUser: '黄伟文',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        id: 15,
        userName: 'Krikor',
        userId: '@krikor',
        creditItem: '奖励积分',
        updateUser: '黄伟文',
        creditScore: '5' ,
        month: '2016.11'
      },
      {
        "id": 16,
        "userName": "Francisca",
        "userId": "@Gibson",
        "creditItem": "franciscagibson@comtours.com",
        "updateUser": 11 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 17,
        "userName": "Tillman",
        "userId": "@Snow",
        "creditItem": "tillmansnow@comtours.com",
        "updateUser": 34 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 18,
        "userName": "Jimenez",
        "userId": "@Bryant",
        "creditItem": "jimenezbryant@comtours.com",
        "updateUser": 45 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 19,
        "userName": "Sandoval",
        "userId": "@Mcbride",
        "creditItem": "sandovalmcbride@comtours.com",
        "updateUser": 32 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 20,
        "userName": "Griffin",
        "userId": "@Charles",
        "creditItem": "griffincharles@comtours.com",
        "updateUser": 19 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 21,
        "userName": "Cora",
        "userId": "@Caldwell",
        "creditItem": "coracaldwell@comtours.com",
        "updateUser": 27 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 22,
        "userName": "Cindy",
        "userId": "@Velez",
        "creditItem": "cindyvelez@comtours.com",
        "updateUser": 24 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 23,
        "userName": "Frieda",
        "userId": "@Craig",
        "creditItem": "friedacraig@comtours.com",
        "updateUser": 45 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 24,
        "userName": "Cote",
        "userId": "@Rowe",
        "creditItem": "coterowe@comtours.com",
        "updateUser": 20 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 25,
        "userName": "Trujillo",
        "userId": "@Valenzuela",
        "creditItem": "trujillovalenzuela@comtours.com",
        "updateUser": 16 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 26,
        "userName": "Pruitt",
        "userId": "@Sloan",
        "creditItem": "pruittsloan@comtours.com",
        "updateUser": 44 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 27,
        "userName": "Sutton",
        "userId": "@Black",
        "creditItem": "suttonblack@comtours.com",
        "updateUser": 42 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 28,
        "userName": "Marion",
        "userId": "@Espinoza",
        "creditItem": "marionespinoza@comtours.com",
        "updateUser": 47 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 29,
        "userName": "Newman",
        "userId": "@Keith",
        "creditItem": "newmankeith@comtours.com",
        "updateUser": 15 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 30,
        "userName": "Boyle",
        "userId": "@Summers",
        "creditItem": "boylesummers@comtours.com",
        "updateUser": 32 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 31,
        "userName": "Haynes",
        "userId": "@Mckenzie",
        "creditItem": "haynesmckenzie@comtours.com",
        "updateUser": 15 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 32,
        "userName": "Miller",
        "userId": "@Young",
        "creditItem": "milleryoung@comtours.com",
        "updateUser": 55 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 33,
        "userName": "Johnston",
        "userId": "@Knight",
        "creditItem": "johnstonknight@comtours.com",
        "updateUser": 29 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 34,
        "userName": "Lena",
        "userId": "@Forbes",
        "creditItem": "lenaforbes@comtours.com",
        "updateUser": 25 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 35,
        "userName": "Terrie",
        "userId": "@Branch",
        "creditItem": "terriebranch@comtours.com",
        "updateUser": 37 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 36,
        "userName": "Louise",
        "userId": "@Kirby",
        "creditItem": "louisekirby@comtours.com",
        "updateUser": 44 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 37,
        "userName": "David",
        "userId": "@Sanders",
        "creditItem": "davidsanders@comtours.com",
        "updateUser": 26 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 38,
        "userName": "Holden",
        "userId": "@Mckinney",
        "creditItem": "holdenmckinney@comtours.com",
        "updateUser": 11 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 39,
        "userName": "Baker",
        "userId": "@Montoya",
        "creditItem": "bakermontoya@comtours.com",
        "updateUser": 47 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 40,
        "userName": "Belinda",
        "userId": "@Calderon",
        "creditItem": "belindacalderon@comtours.com",
        "updateUser": 21 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 41,
        "userName": "Pearson",
        "userId": "@Clements",
        "creditItem": "pearsonclements@comtours.com",
        "updateUser": 42 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 42,
        "userName": "Alyce",
        "userId": "@Daugherty",
        "creditItem": "alycedaugherty@comtours.com",
        "updateUser": 55 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 43,
        "userName": "Valencia",
        "userId": "@Olsen",
        "creditItem": "valenciaolsen@comtours.com",
        "updateUser": 20 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 44,
        "userName": "Leach",
        "userId": "@Humphrey",
        "creditItem": "leachhumphrey@comtours.com",
        "updateUser": 28 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 45,
        "userName": "Moss",
        "userId": "@Fitzpatrick",
        "creditItem": "mossfitzpatrick@comtours.com",
        "updateUser": 51 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 46,
        "userName": "Jeanne",
        "userId": "@Ward",
        "creditItem": "jeanneward@comtours.com",
        "updateUser": 59 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 47,
        "userName": "Wilma",
        "userId": "@Kidd",
        "creditItem": "wilmakidd@comtours.com",
        "updateUser": 53 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 48,
        "userName": "Beatrice",
        "userId": "@Gilbert",
        "creditItem": "beatricegilbert@comtours.com",
        "updateUser": 39 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 49,
        "userName": "Whitaker",
        "userId": "@Mcdonald",
        "creditItem": "whitakermcdonald@comtours.com",
        "updateUser": 35 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 50,
        "userName": "Rebekah",
        "userId": "@Gross",
        "creditItem": "rebekahgross@comtours.com",
        "updateUser": 40 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 51,
        "userName": "Earline",
        "userId": "@Woodward",
        "creditItem": "earlinewoodward@comtours.com",
        "updateUser": 52 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 52,
        "userName": "Moran",
        "userId": "@Johns",
        "creditItem": "moranjohns@comtours.com",
        "updateUser": 20 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 53,
        "userName": "Nanette",
        "userId": "@Cooke",
        "creditItem": "nanettecooke@comtours.com",
        "updateUser": 55 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 54,
        "userName": "Dalton",
        "userId": "@Hendricks",
        "creditItem": "daltonhendricks@comtours.com",
        "updateUser": 25 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 55,
        "userName": "Bennett",
        "userId": "@Pena",
        "creditItem": "bennettpena@comtours.com",
        "updateUser": 13 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 56,
        "userName": "Kellie",
        "userId": "@Weiss",
        "creditItem": "kellieweiss@comtours.com",
        "updateUser": 48 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 57,
        "userName": "Hobbs",
        "userId": "@Sanford",
        "creditItem": "hobbssanford@comtours.com",
        "updateUser": 28 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 58,
        "userName": "Mcguire",
        "userId": "@Roman",
        "creditItem": "mcguireroman@comtours.com",
        "updateUser": 38 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 59,
        "userName": "Rodriquez",
        "userId": "@Harper",
        "creditItem": "rodriquezharper@comtours.com",
        "updateUser": 20 ,
        "creditScore": 5 ,
        "month":"2016.11"
      },
      {
        "id": 60,
        "userName": "Lou",
        "userId": "@Sanchez",
        "creditItem": "lousanchez@comtours.com",
        "updateUser": 16 ,
        "creditScore": 5 ,
        "month":"2016.11"
      }
    ];

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
