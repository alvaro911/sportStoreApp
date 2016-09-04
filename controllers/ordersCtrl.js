(function(){
	'use strict';
	angular
	.module('sportsStoreAdmin')
	.controller('ordersCtrl', ordersFn);

	function ordersFn($http, ordersUrl){
		var self = this;
		$http.get(ordersUrl, {
			withCredentials:true
		}).success(function(data){
			self.orders = data;
		}).error(function(error){
			self.error = error;
		});

		self.selectedOrder;

		self.selectOrder = selectOrder;
		self.calcTotal = calcTotal;

		function selectOrder(order){
			self.selectedOrder = order;
		}

		function calcTotal(order){
			var total = 0;
			for(var i=0; i < order.products.length; i++){
				total += order.products[i].count * order.products[i].price;
			}
			return total;
		}
	}
}());