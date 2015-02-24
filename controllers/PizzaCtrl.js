restaurant.controller("PizzaCtrl", function PizzCtrl($scope, PizzaFactory) {
  $scope.total = PizzaFactory.total;
  $scope.PizzaFactory = PizzaFactory;
});
