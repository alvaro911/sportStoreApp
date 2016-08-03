angular
	.module('cart', [])
	.factory('cart', cart)
	.directive('cartSumary', cartSumary);
	
	function cart(){
		var cartData = [];
		return{
			/*Adds the specified product to the cart or increments the
			number required if the cart already contains the product*/
			addProduct: function(id, name, price){
				var addedToExistingItem = false;
				for(var i=0; i < cartData.length; i++){
					if(cartData[i].id === id){
						cartData[i].count++;
						addedToExistingItem = true;
						break;
					}
				}
				if(!addedToExistingItem){
					cartData.push({
						count: 1,
						id: id,
						price: price,
						name: name
					});
				}
			},
			/*Removes the product with the specified ID*/
			removeProduct: function(id){
				for(var i = 0; i<cartData.length; i++){
					if(cartData[i].id == id){
						cartData.splice(i, 1);
						break;
					}
				}
			},
			/*Returns the array of objects in the cart*/
			getProducts: function(){
				return cartData;
			}
		};
	}

	function cartSumary(){
		return{
			restricted: 'E',
			templateUrl: 'components/cart/cartSumary.html',
			controller: cartSumaryCtrl,
			controllerAs: 'vm',
			bindToController: true
		};
	}

	function cartSumaryCtrl(cart){
		var vm = this,
			cartData = cart.getProducts();
		vm.total = function(){
			var total = 0;
			for (var i =0; i<cartData.length; i++){
				total += (cartData[i].price * cartData[i].count);
			}
			return total;
		};
		vm.itemCount = function(){
			var total = 0;
			for(var i=0; i < cartData.length; i++){
				total += cartData[i].count;
			}
		};
	}