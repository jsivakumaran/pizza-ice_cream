restaurant.controller("PizzaCtrl", function PizzCtrl($scope, RestaurantFactory) {
  $scope.total = RestaurantFactory.total;
  $scope.RestaurantFactory = RestaurantFactory;
});
