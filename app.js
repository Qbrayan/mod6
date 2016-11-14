(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.meals = "";
  $scope.response = "";
  function hasEmptyElement(val){
    return  val!='' && !(/^\s+$/.test(val));
   ///^[\w&.-]+$/.test(val)
  }
  $scope.checking = function () {
  	var list = $scope.meals.split(',');
  	 if (list== ''){
     $scope.response = "Please enter data first";

  	} else if(list.every(hasEmptyElement)==false){
  	  $scope.response = "Can't have empty value";
  	}else if (list.length <= 3){
  	  $scope.response = "Enjoy!";
  	} else{
      $scope.response = "Too much!";
  	}
  	 
  	
  };

}

})();
