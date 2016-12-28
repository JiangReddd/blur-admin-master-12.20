/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.medalOperationList')
		.controller('medalOperationListDetailCtrl', medalOperationListDetailCtrl);

	/** @ngInject */
	function medalOperationListDetailCtrl($http,$stateParams) {
		var vm = this;
		$http.get('app/pages/management/medalOperationList/medalOperationList.json').then(function(res) {
			var messages = res.data.sort(function(a, b) {
				if (a.id > b.id) return 1;
				if (a.id < b.id) return -1;
			}).reverse();
			vm.mail = messages.filter(function(m) {
				return m.id == $stateParams.id;
			})[0];   
			if(vm.mail.Is_Enable == "1"){
				$("#Is_Enable").attr("checked",true);
			}
			else{
				$("#Is_Enable1").attr("checked",true);
			}; 
			if(vm.mail.Grow_Type == "1"){
				$("#Grow_Type").attr("checked",true);
			}
			else{
				$("#Grow_Type1").attr("checked",true);
			}; 
		});
		vm.label = $stateParams.label;
	}
})();