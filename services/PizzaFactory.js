restaurant.factory("PizzaFactory", function PizzaFactory() {
  var factory = {};
  factory.total=0;
  factory.costCalculator = function(quantity) {
    factory.total = quantity * 4;
  }
  return factory;
});
