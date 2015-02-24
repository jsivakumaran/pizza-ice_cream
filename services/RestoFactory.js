restaurant.factory("RestoFactory", function RestoFactory(PizzaFactory, IceCreamFactory) {
  var factory = {};

  factory.costCalculator = function() {
    factory.total = PizzaFactory.total + IceCreamFactory.total;
  }
  return factory;
});
