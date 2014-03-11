var calCounterApp = angular.module('calCounterApp', ['LocalStorageModule']);
 
calCounterApp.controller('calCounterCtrl', ['$scope','localStorageService','$http', 
	function ($scope,lsService,$http) {
		$scope.eaten = [
			{id:"1",name:"Andy's Cereal",cal:"234",cat:"Grains",amt:"60",unit:"g",},
			{id:"2",name:"Dried Cranberries",cal:"100",cat:"Fruit",amt:"30",unit:"g",},
		];
		$scope.selectedfood = null;
		$scope.foodunit = "-";
		$scope.foodamt = 1;

		$scope.total = function() {
			var cal = 0;
			angular.forEach($scope.eaten, function(food) {
				cal = cal + parseInt(food.cal);
			});
			return cal;
		};
		$scope.addFood = function() {
			if ($scope.selectedfood)
			{
				$scope.selectedfood.name = $scope.foodname;
				$scope.selectedfood.cal = $scope.foodcal;
				$scope.selectedfood.unit = $scope.foodunit;
				$scope.selectedfood.amt = $scope.foodamt;
			}
			else
			{
				$scope.eaten.push({
					name:$scope.foodname, 
					cal:$scope.foodcal,
					unit:$scope.foodunit, 
					amt:$scope.foodamt,					
				});
			}
			$scope.reset();
			updateLocalStorage();
		}
		$scope.reset = function()
		{
			$scope.foodname = '';
			$scope.foodcal = '';
			$scope.foodamt = 1;
			$scope.foodunit = '-';
			$scope.selectedfood = null;
		}		
		$scope.editFood = function(food){
			$scope.selectedfood = food;
			$scope.foodcal = food.cal;
			$scope.foodname = food.name;
			$scope.foodunit = food.unit;
			$scope.foodamt = food.amt;
		}
		$scope.removeFood = function(food){
			var id = $scope.eaten.indexOf(food);
			if (id<0)
			{
				alert("Error:Food not found.");
			}
			$scope.eaten.splice(id,1);
			updateLocalStorage();
		}

		$scope.seelocalstorage = function()
		{
			return lsService.get("eaten");
		}
		function updateLocalStorage()
		{
			lsService.add("eaten",angular.toJson($scope.eaten));
		}
	}]);

calCounterApp.config(['localStorageServiceProvider', 
	function(localStorageServiceProvider){
  		localStorageServiceProvider.setPrefix('cc');		
	}]);