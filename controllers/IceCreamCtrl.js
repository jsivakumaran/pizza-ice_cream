restaurant.controller('IceCreamCtrl', function IceCreamCtrl($scope, RestaurantFactory){
  $scope.total = RestaurantFactory.total;
  $scope.RestaurantFactory = RestaurantFactory;
});
