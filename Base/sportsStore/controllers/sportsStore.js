angular.module("sportsStore",['customFilters'])
	.constant("activeClass","btn-primary")
	.controller("sportsStoreCtrl",function($scope,activeClass,getData){

		console.log("hellow");

		$scope.classes = getData;

		$scope.removeItem = function(index){
			$scope.classes.splice(index,1);
		}

		$scope.data = {
        	products: [
				{ name: "Product #1", description: "A product",
				    category: "Category #1", price: 100 },
				{ name: "Product #2", description: "A product",
				    category: "Category #1", price: 110 },
				{ name: "Product #3", description: "A product",
				    category: "Category #2", price: 210 },
				{ name: "Product #4", description: "A product",
				    category: "Category #3", price: 202 }
			]
		}

		var selectedCategory = '';

		$scope.selectCategory = function(cate){
			// alert(selectedCategory)

			$scope.select_category = selectedCategory =cate;
		}

		$scope.filterFn = function (product) {
			// alert("asdf"

            // var val = selectedCategory == null ||
            //     product.category == selectedCategory;

            // return val;
            console.log("a")
		}

		$scope.activeClasses = function(item){
			// console.log(selectedCategory+"----"+item);

			return selectedCategory == item ? activeClass : "";
		}

	})
	.filter("limit2",function(){
		return function(data){
			return $filter("limitTo")(data,2);
		}
	})
