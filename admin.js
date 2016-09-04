(function(){
	angular
		.module('sportsStoreAdmin', ['ngRoute'])
		.constant("authUrl", "http://localhost:5500/users/login")
		.constant('ordersUrl', 'http://localhost:5500/orders')
		.config(function($routeProvider){
			$routeProvider.when('/login',{
				templateUrl: 'views/adminLogin.html'
			});
			$routeProvider.when('/main',{
				templateUrl: 'views/adminMain.html'
			});
			$routeProvider.otherwise({
				redirectTo: '/login'
			});
		});
}(angular));