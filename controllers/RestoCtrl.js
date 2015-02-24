restaurant.controller("RestoCtrl", function RestoCtrl($scope, RestoFactory) {
  $scope.total = RestoFactory.total;
  $scope.RestoFactory = RestoFactory;
});
