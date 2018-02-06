function Animal(name) {
  this.name = name;
}

Animal.prototype.printName = function() {
  console.log(this.name);
}
Rabbit.prototype= new Animal();
function Rabbit(name) {
  Animal.apply(this,[name]);
}
var r = new Rabbit('Lucky');
r.printName(); // Should run without any errors and write 'Lucky'
console.log(Rabbit.prototype.hasOwnProperty('printName')); // Should be false