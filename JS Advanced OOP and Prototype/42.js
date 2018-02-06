var animal = {
  speed: 0
};

var mammal = {
  age: 3
};

mammal.__proto__ = animal;

var rabbit = {
  name: 'Lucky'
};

rabbit.__proto__ = mammal;
console.log(rabbit.age); // Should be '3'
console.log(rabbit.hasOwnProperty('age')); // Should be 'false' (also fix error)