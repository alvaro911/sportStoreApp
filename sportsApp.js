angular
	.module('SportsStore', ['customFilters', 'cart', 'ngRoute'])
	.constant('productListActiveClass', 'btn-primary')
	.constant('productListPageCount', 3)
	.constant('dataUrl', 'http://localhost:5500/products')
	.constant('orderUrl', 'http://localhost:5500/orders')
	.config(routing);

	function routing($routeProvider){
		$routeProvider.when('/complete',{
			templateUrl:'views/thankYou.html'
		});
		$routeProvider.when('/placeorder',{
			templateUrl:'views/placeOrder.html'
		});
		$routeProvider.when('/checkout',{
			templateUrl:'views/checkOutSummary.html'
		});
		$routeProvider.when('/products',{
			templateUrl:'views/productList.html'
		});
		$routeProvider.otherwise({
			templateUrl:'views/productList.html'
		});
	}