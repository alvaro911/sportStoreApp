(function(){
	'use strict';
	angular
	.module('sportsStoreAdmin')
	.controller('mainCtrl', mainFc);

	function mainFc(){
		var main = this;
		main.screens = ['Products', 'Orders'];
		main.current = main.screens[0];
		main.setScreen = setScreen;
		main.getScreen = getScreen;

		function setScreen(index){
			main.current = main.screens[index];
		}

		function getScreen(){
			return main.current == 'Products' ? '/views/adminProduct.html' : '/views/adminOrder.html';
		}
	}
}());