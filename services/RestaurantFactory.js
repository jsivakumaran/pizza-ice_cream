restaurant.factory("RestaurantFactory", function RestaurantFactory() {
  var factory = {};

  factory.costCalculator = function(quantity) {
    // debugger;
    factory.total = quantity * 4;
  }

  return factory;
});
