/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.medalOperationList')
		.controller('medalOperationListAddCtrl', medalOperationListAddCtrl);

	/** @ngInject */
	function medalOperationListAddCtrl($http,$stateParams) {
		var vm = this;
		vm.standardSelectItems = [
		      { label: '常规', value: 1 },
		      { label: '职业生涯', value: 2 },
		      { label: '年度勋章', value: 3 },
		    ];
	}
})();