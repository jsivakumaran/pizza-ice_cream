restaurant.factory("IceCreamFactory", function IceCreamFactory() {
  var factory = {};
  factory.total=0;
  factory.costCalculator = function(quantity) {
    factory.total = quantity * 4;
  }
  return factory;
});
