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
        medalName: '笔杆子',
        medalType: '常规',
        medalInfo: '@mdo',
        priorityNum: '100',
        isEnable: '1'
      },
      {
        id: 2,
        medalName: '金手指',
        medalType: '常规',
        medalInfo: '@fat',
        priorityNum: '111',
        isEnable: '0'
      },
      {
        id: 3,
        medalName: '铁算盘',
        medalType: '职业生涯',
        medalInfo: '@twitter',
        priorityNum: '230',
        isEnable: '1'
      },
      {
        id: 4,
        medalName: 'John',
        medalType: '职业生涯',
        medalInfo: '@snow',
        priorityNum: '100',
        isEnable: '1'
      },
      {
        id: 5,
        medalName: 'Jack',
        medalType: '年度勋章',
        medalInfo: '@jack',
        priorityNum: '100',
        isEnable: '0'
      },
      {
        id: 6,
        medalName: 'Ann',
        medalType: '职业生涯',
        medalInfo: '@ann',
        priorityNum: '100',
        isEnable: '0'
      },
      {
        id: 7,
        medalName: 'Barbara',
        medalType: '职业生涯',
        medalInfo: '@barbara',
        priorityNum: '101',
        isEnable: '0'
      },
      {
        id: 8,
        medalName: 'Sevan',
        medalType: '职业生涯',
        medalInfo: '@sevan',
        priorityNum: '102',
        isEnable: '1'
      },
      {
        id: 9,
        medalName: 'Ruben',
        medalType: '职业生涯',
        medalInfo: '@ruben',
        priorityNum: '33',
        isEnable: '1'
      },
      {
        id: 10,
        medalName: 'Karen',
        medalType: '职业生涯',
        medalInfo: '@karen',
        priorityNum: '100',
        isEnable: '1'
      },
      {
        id: 11,
        medalName: 'Mark',
        medalType: '职业生涯',
        medalInfo: '@mark',
        priorityNum: 'mark@gmail.com',
        isEnable: '38'
      },
      {
        id: 12,
        medalName: 'Jacob',
        medalType: 'Thornton',
        medalInfo: '@jacob',
        priorityNum: 'jacob@yandex.ru',
        isEnable: '48'
      },
      {
        id: 13,
        medalName: 'Haik',
        medalType: 'Hakob',
        medalInfo: '@haik',
        priorityNum: 'haik@outlook.com',
        isEnable: '48'
      },
      {
        id: 14,
        medalName: 'Garegin',
        medalType: 'Jirair',
        medalInfo: '@garegin',
        priorityNum: 'garegin@gmail.com',
        isEnable: '40'
      },
      {
        id: 15,
        medalName: 'Krikor',
        medalType: 'Bedros',
        medalInfo: '@krikor',
        priorityNum: 'krikor@yandex.ru',
        isEnable: '32'
      },
      {
        "id": 16,
        "medalName": "Francisca",
        "medalType": "Brady",
        "medalInfo": "@Gibson",
        "priorityNum": "franciscagibson@comtours.com",
        "isEnable": 11
      },
      {
        "id": 17,
        "medalName": "Tillman",
        "medalType": "Figueroa",
        "medalInfo": "@Snow",
        "priorityNum": "tillmansnow@comtours.com",
        "isEnable": 34
      },
      {
        "id": 18,
        "medalName": "Jimenez",
        "medalType": "Morris",
        "medalInfo": "@Bryant",
        "priorityNum": "jimenezbryant@comtours.com",
        "isEnable": 45
      },
      {
        "id": 19,
        "medalName": "Sandoval",
        "medalType": "Jacobson",
        "medalInfo": "@Mcbride",
        "priorityNum": "sandovalmcbride@comtours.com",
        "isEnable": 32
      },
      {
        "id": 20,
        "medalName": "Griffin",
        "medalType": "Torres",
        "medalInfo": "@Charles",
        "priorityNum": "griffincharles@comtours.com",
        "isEnable": 19
      },
      {
        "id": 21,
        "medalName": "Cora",
        "medalType": "Parker",
        "medalInfo": "@Caldwell",
        "priorityNum": "coracaldwell@comtours.com",
        "isEnable": 27
      },
      {
        "id": 22,
        "medalName": "Cindy",
        "medalType": "Bond",
        "medalInfo": "@Velez",
        "priorityNum": "cindyvelez@comtours.com",
        "isEnable": 24
      },
      {
        "id": 23,
        "medalName": "Frieda",
        "medalType": "Tyson",
        "medalInfo": "@Craig",
        "priorityNum": "friedacraig@comtours.com",
        "isEnable": 45
      },
      {
        "id": 24,
        "medalName": "Cote",
        "medalType": "Holcomb",
        "medalInfo": "@Rowe",
        "priorityNum": "coterowe@comtours.com",
        "isEnable": 20
      },
      {
        "id": 25,
        "medalName": "Trujillo",
        "medalType": "Mejia",
        "medalInfo": "@Valenzuela",
        "priorityNum": "trujillovalenzuela@comtours.com",
        "isEnable": 16
      },
      {
        "id": 26,
        "medalName": "Pruitt",
        "medalType": "Shepard",
        "medalInfo": "@Sloan",
        "priorityNum": "pruittsloan@comtours.com",
        "isEnable": 44
      },
      {
        "id": 27,
        "medalName": "Sutton",
        "medalType": "Ortega",
        "medalInfo": "@Black",
        "priorityNum": "suttonblack@comtours.com",
        "isEnable": 42
      },
      {
        "id": 28,
        "medalName": "Marion",
        "medalType": "Heath",
        "medalInfo": "@Espinoza",
        "priorityNum": "marionespinoza@comtours.com",
        "isEnable": 47
      },
      {
        "id": 29,
        "medalName": "Newman",
        "medalType": "Hicks",
        "medalInfo": "@Keith",
        "priorityNum": "newmankeith@comtours.com",
        "isEnable": 15
      },
      {
        "id": 30,
        "medalName": "Boyle",
        "medalType": "Larson",
        "medalInfo": "@Summers",
        "priorityNum": "boylesummers@comtours.com",
        "isEnable": 32
      },
      {
        "id": 31,
        "medalName": "Haynes",
        "medalType": "Vinson",
        "medalInfo": "@Mckenzie",
        "priorityNum": "haynesmckenzie@comtours.com",
        "isEnable": 15
      },
      {
        "id": 32,
        "medalName": "Miller",
        "medalType": "Acosta",
        "medalInfo": "@Young",
        "priorityNum": "milleryoung@comtours.com",
        "isEnable": 55
      },
      {
        "id": 33,
        "medalName": "Johnston",
        "medalType": "Brown",
        "medalInfo": "@Knight",
        "priorityNum": "johnstonknight@comtours.com",
        "isEnable": 29
      },
      {
        "id": 34,
        "medalName": "Lena",
        "medalType": "Pitts",
        "medalInfo": "@Forbes",
        "priorityNum": "lenaforbes@comtours.com",
        "isEnable": 25
      },
      {
        "id": 35,
        "medalName": "Terrie",
        "medalType": "Kennedy",
        "medalInfo": "@Branch",
        "priorityNum": "terriebranch@comtours.com",
        "isEnable": 37
      },
      {
        "id": 36,
        "medalName": "Louise",
        "medalType": "Aguirre",
        "medalInfo": "@Kirby",
        "priorityNum": "louisekirby@comtours.com",
        "isEnable": 44
      },
      {
        "id": 37,
        "medalName": "David",
        "medalType": "Patton",
        "medalInfo": "@Sanders",
        "priorityNum": "davidsanders@comtours.com",
        "isEnable": 26
      },
      {
        "id": 38,
        "medalName": "Holden",
        "medalType": "Barlow",
        "medalInfo": "@Mckinney",
        "priorityNum": "holdenmckinney@comtours.com",
        "isEnable": 11
      },
      {
        "id": 39,
        "medalName": "Baker",
        "medalType": "Rivera",
        "medalInfo": "@Montoya",
        "priorityNum": "bakermontoya@comtours.com",
        "isEnable": 47
      },
      {
        "id": 40,
        "medalName": "Belinda",
        "medalType": "Lloyd",
        "medalInfo": "@Calderon",
        "priorityNum": "belindacalderon@comtours.com",
        "isEnable": 21
      },
      {
        "id": 41,
        "medalName": "Pearson",
        "medalType": "Patrick",
        "medalInfo": "@Clements",
        "priorityNum": "pearsonclements@comtours.com",
        "isEnable": 42
      },
      {
        "id": 42,
        "medalName": "Alyce",
        "medalType": "Mckee",
        "medalInfo": "@Daugherty",
        "priorityNum": "alycedaugherty@comtours.com",
        "isEnable": 55
      },
     {
        "id": 43,
        "medalName": "Valencia",
        "medalType": "Spence",
        "medalInfo": "@Olsen",
        "priorityNum": "valenciaolsen@comtours.com",
        "isEnable": 20
      },
      {
        "id": 44,
        "medalName": "Leach",
        "medalType": "Holcomb",
        "medalInfo": "@Humphrey",
        "priorityNum": "leachhumphrey@comtours.com",
        "isEnable": 28
      },
      {
        "id": 45,
        "medalName": "Moss",
        "medalType": "Baxter",
        "medalInfo": "@Fitzpatrick",
        "priorityNum": "mossfitzpatrick@comtours.com",
        "isEnable": 51
      },
      {
        "id": 46,
        "medalName": "Jeanne",
        "medalType": "Cooke",
        "medalInfo": "@Ward",
        "priorityNum": "jeanneward@comtours.com",
        "isEnable": 59
      },
      {
        "id": 47,
        "medalName": "Wilma",
        "medalType": "Briggs",
        "medalInfo": "@Kidd",
        "priorityNum": "wilmakidd@comtours.com",
        "isEnable": 53
      },
      {
        "id": 48,
        "medalName": "Beatrice",
        "medalType": "Perry",
        "medalInfo": "@Gilbert",
        "priorityNum": "beatricegilbert@comtours.com",
        "isEnable": 39
      },
      {
        "id": 49,
        "medalName": "Whitaker",
        "medalType": "Hyde",
        "medalInfo": "@Mcdonald",
        "priorityNum": "whitakermcdonald@comtours.com",
        "isEnable": 35
      },
      {
        "id": 50,
        "medalName": "Rebekah",
        "medalType": "Duran",
        "medalInfo": "@Gross",
        "priorityNum": "rebekahgross@comtours.com",
        "isEnable": 40
      },
      {
        "id": 51,
        "medalName": "Earline",
        "medalType": "Mayer",
        "medalInfo": "@Woodward",
        "priorityNum": "earlinewoodward@comtours.com",
        "isEnable": 52
      },
      {
        "id": 52,
        "medalName": "Moran",
        "medalType": "Baxter",
        "medalInfo": "@Johns",
        "priorityNum": "moranjohns@comtours.com",
        "isEnable": 20
      },
      {
        "id": 53,
        "medalName": "Nanette",
        "medalType": "Hubbard",
        "medalInfo": "@Cooke",
        "priorityNum": "nanettecooke@comtours.com",
        "isEnable": 55
      },
      {
        "id": 54,
        "medalName": "Dalton",
        "medalType": "Walker",
        "medalInfo": "@Hendricks",
        "priorityNum": "daltonhendricks@comtours.com",
        "isEnable": 25
      },
      {
        "id": 55,
        "medalName": "Bennett",
        "medalType": "Blake",
        "medalInfo": "@Pena",
        "priorityNum": "bennettpena@comtours.com",
        "isEnable": 13
      },
      {
        "id": 56,
        "medalName": "Kellie",
        "medalType": "Horton",
        "medalInfo": "@Weiss",
        "priorityNum": "kellieweiss@comtours.com",
        "isEnable": 48
      },
      {
        "id": 57,
        "medalName": "Hobbs",
        "medalType": "Talley",
        "medalInfo": "@Sanford",
        "priorityNum": "hobbssanford@comtours.com",
        "isEnable": 28
      },
      {
        "id": 58,
        "medalName": "Mcguire",
        "medalType": "Donaldson",
        "medalInfo": "@Roman",
        "priorityNum": "mcguireroman@comtours.com",
        "isEnable": 38
      },
      {
        "id": 59,
        "medalName": "Rodriquez",
        "medalType": "Saunders",
        "medalInfo": "@Harper",
        "priorityNum": "rodriquezharper@comtours.com",
        "isEnable": 20
      },
      {
        "id": 60,
        "medalName": "Lou",
        "medalType": "Conner",
        "medalInfo": "@Sanchez",
        "priorityNum": "lousanchez@comtours.com",
        "isEnable": 16
      }
    ];



    $.each($scope.smartTableData,function(i){
        if($scope.smartTableData[i].IsEnable == "1"){
          $scope.smartTableData[i].IsEnable = "启用";
        }
        else{
          $scope.smartTableData[i].IsEnable = "停用";
        }
    });

  }
})();
