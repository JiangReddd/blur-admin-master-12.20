/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.medalOperationList')
      .controller('medalOperationListCtrl', medalOperationListCtrl);

  /** @ngInject */
  function medalOperationListCtrl($scope, $filter, editableOptions, editableThemes) {

    $scope.smartTablePageSize = 10;

    $scope.smartTableData = [
      {
        id: 1,
        Medal_Name: '笔杆子',
        type: '常规',
        Medal_Info: '@mdo',
        Priority_Num: '100',
        Is_Enable: '1'
      },
      {
        id: 2,
        Medal_Name: '金手指',
        type: '常规',
        Medal_Info: '@fat',
        Priority_Num: '111',
        Is_Enable: '0'
      },
      {
        id: 3,
        Medal_Name: '铁算盘',
        type: '职业生涯',
        Medal_Info: '@twitter',
        Priority_Num: '230',
        Is_Enable: '1'
      },
      {
        id: 4,
        Medal_Name: 'John',
        type: '职业生涯',
        Medal_Info: '@snow',
        Priority_Num: '100',
        Is_Enable: '1'
      },
      {
        id: 5,
        Medal_Name: 'Jack',
        type: '年度勋章',
        Medal_Info: '@jack',
        Priority_Num: '100',
        Is_Enable: '0'
      },
      {
        id: 6,
        Medal_Name: 'Ann',
        type: '职业生涯',
        Medal_Info: '@ann',
        Priority_Num: '100',
        Is_Enable: '0'
      },
      {
        id: 7,
        Medal_Name: 'Barbara',
        type: '职业生涯',
        Medal_Info: '@barbara',
        Priority_Num: '101',
        Is_Enable: '0'
      },
      {
        id: 8,
        Medal_Name: 'Sevan',
        type: '职业生涯',
        Medal_Info: '@sevan',
        Priority_Num: '102',
        Is_Enable: '1'
      },
      {
        id: 9,
        Medal_Name: 'Ruben',
        type: '职业生涯',
        Medal_Info: '@ruben',
        Priority_Num: '33',
        Is_Enable: '1'
      },
      {
        id: 10,
        Medal_Name: 'Karen',
        type: '职业生涯',
        Medal_Info: '@karen',
        Priority_Num: '100',
        Is_Enable: '1'
      },
      {
        id: 11,
        Medal_Name: 'Mark',
        type: '职业生涯',
        Medal_Info: '@mark',
        Priority_Num: 'mark@gmail.com',
        Is_Enable: '38'
      },
      {
        id: 12,
        Medal_Name: 'Jacob',
        type: 'Thornton',
        Medal_Info: '@jacob',
        Priority_Num: 'jacob@yandex.ru',
        Is_Enable: '48'
      },
      {
        id: 13,
        Medal_Name: 'Haik',
        type: 'Hakob',
        Medal_Info: '@haik',
        Priority_Num: 'haik@outlook.com',
        Is_Enable: '48'
      },
      {
        id: 14,
        Medal_Name: 'Garegin',
        type: 'Jirair',
        Medal_Info: '@garegin',
        Priority_Num: 'garegin@gmail.com',
        Is_Enable: '40'
      },
      {
        id: 15,
        Medal_Name: 'Krikor',
        type: 'Bedros',
        Medal_Info: '@krikor',
        Priority_Num: 'krikor@yandex.ru',
        Is_Enable: '32'
      },
      {
        "id": 16,
        "Medal_Name": "Francisca",
        "type": "Brady",
        "Medal_Info": "@Gibson",
        "Priority_Num": "franciscagibson@comtours.com",
        "Is_Enable": 11
      },
      {
        "id": 17,
        "Medal_Name": "Tillman",
        "type": "Figueroa",
        "Medal_Info": "@Snow",
        "Priority_Num": "tillmansnow@comtours.com",
        "Is_Enable": 34
      },
      {
        "id": 18,
        "Medal_Name": "Jimenez",
        "type": "Morris",
        "Medal_Info": "@Bryant",
        "Priority_Num": "jimenezbryant@comtours.com",
        "Is_Enable": 45
      },
      {
        "id": 19,
        "Medal_Name": "Sandoval",
        "type": "Jacobson",
        "Medal_Info": "@Mcbride",
        "Priority_Num": "sandovalmcbride@comtours.com",
        "Is_Enable": 32
      },
      {
        "id": 20,
        "Medal_Name": "Griffin",
        "type": "Torres",
        "Medal_Info": "@Charles",
        "Priority_Num": "griffincharles@comtours.com",
        "Is_Enable": 19
      },
      {
        "id": 21,
        "Medal_Name": "Cora",
        "type": "Parker",
        "Medal_Info": "@Caldwell",
        "Priority_Num": "coracaldwell@comtours.com",
        "Is_Enable": 27
      },
      {
        "id": 22,
        "Medal_Name": "Cindy",
        "type": "Bond",
        "Medal_Info": "@Velez",
        "Priority_Num": "cindyvelez@comtours.com",
        "Is_Enable": 24
      },
      {
        "id": 23,
        "Medal_Name": "Frieda",
        "type": "Tyson",
        "Medal_Info": "@Craig",
        "Priority_Num": "friedacraig@comtours.com",
        "Is_Enable": 45
      },
      {
        "id": 24,
        "Medal_Name": "Cote",
        "type": "Holcomb",
        "Medal_Info": "@Rowe",
        "Priority_Num": "coterowe@comtours.com",
        "Is_Enable": 20
      },
      {
        "id": 25,
        "Medal_Name": "Trujillo",
        "type": "Mejia",
        "Medal_Info": "@Valenzuela",
        "Priority_Num": "trujillovalenzuela@comtours.com",
        "Is_Enable": 16
      },
      {
        "id": 26,
        "Medal_Name": "Pruitt",
        "type": "Shepard",
        "Medal_Info": "@Sloan",
        "Priority_Num": "pruittsloan@comtours.com",
        "Is_Enable": 44
      },
      {
        "id": 27,
        "Medal_Name": "Sutton",
        "type": "Ortega",
        "Medal_Info": "@Black",
        "Priority_Num": "suttonblack@comtours.com",
        "Is_Enable": 42
      },
      {
        "id": 28,
        "Medal_Name": "Marion",
        "type": "Heath",
        "Medal_Info": "@Espinoza",
        "Priority_Num": "marionespinoza@comtours.com",
        "Is_Enable": 47
      },
      {
        "id": 29,
        "Medal_Name": "Newman",
        "type": "Hicks",
        "Medal_Info": "@Keith",
        "Priority_Num": "newmankeith@comtours.com",
        "Is_Enable": 15
      },
      {
        "id": 30,
        "Medal_Name": "Boyle",
        "type": "Larson",
        "Medal_Info": "@Summers",
        "Priority_Num": "boylesummers@comtours.com",
        "Is_Enable": 32
      },
      {
        "id": 31,
        "Medal_Name": "Haynes",
        "type": "Vinson",
        "Medal_Info": "@Mckenzie",
        "Priority_Num": "haynesmckenzie@comtours.com",
        "Is_Enable": 15
      },
      {
        "id": 32,
        "Medal_Name": "Miller",
        "type": "Acosta",
        "Medal_Info": "@Young",
        "Priority_Num": "milleryoung@comtours.com",
        "Is_Enable": 55
      },
      {
        "id": 33,
        "Medal_Name": "Johnston",
        "type": "Brown",
        "Medal_Info": "@Knight",
        "Priority_Num": "johnstonknight@comtours.com",
        "Is_Enable": 29
      },
      {
        "id": 34,
        "Medal_Name": "Lena",
        "type": "Pitts",
        "Medal_Info": "@Forbes",
        "Priority_Num": "lenaforbes@comtours.com",
        "Is_Enable": 25
      },
      {
        "id": 35,
        "Medal_Name": "Terrie",
        "type": "Kennedy",
        "Medal_Info": "@Branch",
        "Priority_Num": "terriebranch@comtours.com",
        "Is_Enable": 37
      },
      {
        "id": 36,
        "Medal_Name": "Louise",
        "type": "Aguirre",
        "Medal_Info": "@Kirby",
        "Priority_Num": "louisekirby@comtours.com",
        "Is_Enable": 44
      },
      {
        "id": 37,
        "Medal_Name": "David",
        "type": "Patton",
        "Medal_Info": "@Sanders",
        "Priority_Num": "davidsanders@comtours.com",
        "Is_Enable": 26
      },
      {
        "id": 38,
        "Medal_Name": "Holden",
        "type": "Barlow",
        "Medal_Info": "@Mckinney",
        "Priority_Num": "holdenmckinney@comtours.com",
        "Is_Enable": 11
      },
      {
        "id": 39,
        "Medal_Name": "Baker",
        "type": "Rivera",
        "Medal_Info": "@Montoya",
        "Priority_Num": "bakermontoya@comtours.com",
        "Is_Enable": 47
      },
      {
        "id": 40,
        "Medal_Name": "Belinda",
        "type": "Lloyd",
        "Medal_Info": "@Calderon",
        "Priority_Num": "belindacalderon@comtours.com",
        "Is_Enable": 21
      },
      {
        "id": 41,
        "Medal_Name": "Pearson",
        "type": "Patrick",
        "Medal_Info": "@Clements",
        "Priority_Num": "pearsonclements@comtours.com",
        "Is_Enable": 42
      },
      {
        "id": 42,
        "Medal_Name": "Alyce",
        "type": "Mckee",
        "Medal_Info": "@Daugherty",
        "Priority_Num": "alycedaugherty@comtours.com",
        "Is_Enable": 55
      },
     {
        "id": 43,
        "Medal_Name": "Valencia",
        "type": "Spence",
        "Medal_Info": "@Olsen",
        "Priority_Num": "valenciaolsen@comtours.com",
        "Is_Enable": 20
      },
      {
        "id": 44,
        "Medal_Name": "Leach",
        "type": "Holcomb",
        "Medal_Info": "@Humphrey",
        "Priority_Num": "leachhumphrey@comtours.com",
        "Is_Enable": 28
      },
      {
        "id": 45,
        "Medal_Name": "Moss",
        "type": "Baxter",
        "Medal_Info": "@Fitzpatrick",
        "Priority_Num": "mossfitzpatrick@comtours.com",
        "Is_Enable": 51
      },
      {
        "id": 46,
        "Medal_Name": "Jeanne",
        "type": "Cooke",
        "Medal_Info": "@Ward",
        "Priority_Num": "jeanneward@comtours.com",
        "Is_Enable": 59
      },
      {
        "id": 47,
        "Medal_Name": "Wilma",
        "type": "Briggs",
        "Medal_Info": "@Kidd",
        "Priority_Num": "wilmakidd@comtours.com",
        "Is_Enable": 53
      },
      {
        "id": 48,
        "Medal_Name": "Beatrice",
        "type": "Perry",
        "Medal_Info": "@Gilbert",
        "Priority_Num": "beatricegilbert@comtours.com",
        "Is_Enable": 39
      },
      {
        "id": 49,
        "Medal_Name": "Whitaker",
        "type": "Hyde",
        "Medal_Info": "@Mcdonald",
        "Priority_Num": "whitakermcdonald@comtours.com",
        "Is_Enable": 35
      },
      {
        "id": 50,
        "Medal_Name": "Rebekah",
        "type": "Duran",
        "Medal_Info": "@Gross",
        "Priority_Num": "rebekahgross@comtours.com",
        "Is_Enable": 40
      },
      {
        "id": 51,
        "Medal_Name": "Earline",
        "type": "Mayer",
        "Medal_Info": "@Woodward",
        "Priority_Num": "earlinewoodward@comtours.com",
        "Is_Enable": 52
      },
      {
        "id": 52,
        "Medal_Name": "Moran",
        "type": "Baxter",
        "Medal_Info": "@Johns",
        "Priority_Num": "moranjohns@comtours.com",
        "Is_Enable": 20
      },
      {
        "id": 53,
        "Medal_Name": "Nanette",
        "type": "Hubbard",
        "Medal_Info": "@Cooke",
        "Priority_Num": "nanettecooke@comtours.com",
        "Is_Enable": 55
      },
      {
        "id": 54,
        "Medal_Name": "Dalton",
        "type": "Walker",
        "Medal_Info": "@Hendricks",
        "Priority_Num": "daltonhendricks@comtours.com",
        "Is_Enable": 25
      },
      {
        "id": 55,
        "Medal_Name": "Bennett",
        "type": "Blake",
        "Medal_Info": "@Pena",
        "Priority_Num": "bennettpena@comtours.com",
        "Is_Enable": 13
      },
      {
        "id": 56,
        "Medal_Name": "Kellie",
        "type": "Horton",
        "Medal_Info": "@Weiss",
        "Priority_Num": "kellieweiss@comtours.com",
        "Is_Enable": 48
      },
      {
        "id": 57,
        "Medal_Name": "Hobbs",
        "type": "Talley",
        "Medal_Info": "@Sanford",
        "Priority_Num": "hobbssanford@comtours.com",
        "Is_Enable": 28
      },
      {
        "id": 58,
        "Medal_Name": "Mcguire",
        "type": "Donaldson",
        "Medal_Info": "@Roman",
        "Priority_Num": "mcguireroman@comtours.com",
        "Is_Enable": 38
      },
      {
        "id": 59,
        "Medal_Name": "Rodriquez",
        "type": "Saunders",
        "Medal_Info": "@Harper",
        "Priority_Num": "rodriquezharper@comtours.com",
        "Is_Enable": 20
      },
      {
        "id": 60,
        "Medal_Name": "Lou",
        "type": "Conner",
        "Medal_Info": "@Sanchez",
        "Priority_Num": "lousanchez@comtours.com",
        "Is_Enable": 16
      }
    ];

    $scope.editableTableData = $scope.smartTableData.slice(0, 36);


    $.each($scope.smartTableData,function(i){
        if($scope.smartTableData[i].Is_Enable == "1"){
          $scope.smartTableData[i].Is_Enable = "启用";
        }
        else{
          $scope.smartTableData[i].Is_Enable = "停用";
        }
    });

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
