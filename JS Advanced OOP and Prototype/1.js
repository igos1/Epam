var vehical = {
 speed:undefined
};
var Bike = {
  wheelsCount:2
};

Bike.__proto__ = vehical;
var Car={
   wheelsCount:4,
   doorsCount:4   
 };
Car.__proto__ = vehical;

var MonsterTruck={
  wheelsSize:undefined,   
};
MonsterTruck.__proto__ = Car;