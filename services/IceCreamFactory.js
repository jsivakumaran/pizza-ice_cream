restaurant.factory("IceCreamFactory", function IceCreamFactory() {
  var factory = {};

  factory.costCalculator = function(quantity) {
    factory.total = quantity * 4;
  }
  return factory;
});
