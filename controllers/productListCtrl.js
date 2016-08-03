(function(){
	'use strict';
	angular
		.module('SportsStore')
		.controller('productListCtrl', productList);

		function productList($filter, productListActiveClass, productListPageCount, cart){
			var vm = this,
				selectedCategory = null;
				vm.selectedPage = 1;
				vm.pageSize = productListPageCount;

			vm.selectCategory = function (newCategory){
				selectedCategory = newCategory;
				vm.selectedPage = 1;
			};

			vm.selectPage = function(newPage){
				vm.selectedPage = newPage;
			};

			vm.categoryFilterFn = function(product){
				return selectedCategory == null || product.category == selectedCategory;
			};

			vm.getCategoryClass = function(category){
				return selectedCategory === category ? productListActiveClass : "";
			};

			vm.getPageClass = function(page){
				return vm.selectedPage === page ? productListActiveClass : "";
			};

			vm.addProductToCart = function(product){
				cart.addProduct(product.id, product.name, product.price);
			};
		}
})();