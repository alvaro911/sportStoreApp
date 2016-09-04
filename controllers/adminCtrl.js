(function(){
	'use strict';
	angular.module('sportsStoreAdmin')
	.controller('authCtrl', authFn);

	function authFn($http, $location, authUrl){
		var vm = this;
		vm.authenticate = function(user, pass){
			// WILL SEND A REQUEST WITH THE NAME AND PASSOWRD THE USER PUTS IN THE TEXT FIELDS
			$http.post(authUrl,{
				username : user,
				password : pass
			},
			{
				withCredentials : true
			// IF USER NAME AND PASSWORD MATCH WHAT WE SET IN OUR API THEN ONCE WE HIT SUBMIT IT WILL AUTOMATICALLY REDIRECT TO /MAIN PAGE
			}).success(function(data){
				$location.path('/main');
			}).error(function(data){
				vm.authenticationError = error;
			});
		};
	}
}());