restaurant.factory("PizzaFactory", function PizzaFactory() {
  var factory = {};

  factory.costCalculator = function(quantity) {
    factory.total = quantity * 4;
  }
  return factory;
});
