(function(){
	'use strict';
	angular
		.module('SportsStore')
		.controller('sportStoreCtrl', sportsProducts);
		function sportsProducts($http, dataUrl, $location, orderUrl, cart){
			var vm = this;
			vm.data = {};
			$http.get(dataUrl)
				.success(function(data){
					vm.data.products = data;
				})
				.error(function(error){
					vm.data.error = error;
				});
			vm.sendOrder = function(shippingDetails){
				var order = angular.copy(shippingDetails);
				console.log('This is the order: ', order);
				order.products = cart.getProducts();
				$http.post(orderUrl, order)
					.success(function(data){
						vm.data.orderId = data.id;
						cart.getProducts().length = 0;
					})
					.error(function(error){
						vm.data.orderError = error;
					})
					.finally(function(){
						$location.path('/complete');
					});
			};
		}
})();