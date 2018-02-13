function Vehical() {
  this.speed=0;
                   }
Vehical.prototype.constructor = Vehical;
Vehical.prototype.move=function(){
   this.speed++
 }

Vehical.prototype.stop=function(){
   this.speed=0
 }
Vehical.prototype.toString=function(){
   return ("vehical имеет скорость"+this.speed);
 }

Vehical.prototype.valueOf=function(){
  return this.speed;
}



function Bike() {
   Vehical.call(this);
 this.wheelsCount=2;
}
Bike.prototype = Object.create(Vehical.prototype);
Bike.prototype.constructor = Bike;
Bike.prototype.move=function(){
   Vehical.prototype.move.call(this);
   console.log("Врум-врууум");
 }

Bike.prototype.toString=function(){
   return ("Bike имеет скорость"+this.speed +
           " и кол-во колес = " + this.wheelsCount);
 }
Bike.prototype.valueOf=function(){
  return this.wheelsCount;
}



function Car() {
 Car.count++;
 Vehical.call(this);
 this.wheelsCount=4;
 this.doorsCount=4;
 this.openDoorCount=0;
}
Car.prototype = Object.create(Vehical.prototype);
Car.prototype.constructor = Car;
Car.prototype.openDoor=function(){ 
 if(this.openDoorCount<this.doorsCount) {this.openDoorCount+=1;
  console.log("Кол-во закрытых дверей="+(this.doorsCount-this.openDoorCount)); } 
}

Car.prototype.closeDoor=function(){ 
 if(this.openDoorCount>0) {this.openDoorCount-=1;
  console.log("Кол-во закрытых дверей="+(this.doorsCount-this.openDoorCount)); } 
}

Car.prototype.toString=function(){
   return ("Car имеет скорость"+this.speed+
           " , кол-во колес = " + this.wheelsCount + 
           " и кол-во дверей = " + this.doorsCount);
 }

Car.prototype.valueOf=function(){
  return this.doorsCount;
}


function MonsterTruck() {
   Car.call(this);
  this.wheelsSize=40;  
}
MonsterTruck.prototype = Object.create(Car.prototype);
MonsterTruck.prototype.constructor = MonsterTruck;
MonsterTruck.prototype.openDoor=function(){setTimeout(()=>{
  Car.prototype.openDoor.call(this);
},1000);}

MonsterTruck.prototype.toString=function(){
   return ("Car имеет скорость"+this.speed+" , кол-во колес = " + this.wheelsCount +
           " ,кол-во дверей = " + 
           this.doorsCount + " ,размер колес = " +  this.wheelsSize);}

MonsterTruck.prototype.valueOf=function(){
  return this.wheelsSize;
}


Car.count=0;

var myCar= new Car();
 var myCar2= new Bike();
myCar.move();
console.log(myCar.speed);
myCar.stop();
console.log(myCar.speed);
myCar.openDoor();
console.log(Car.count);
console.log(Bike.prototype.constructor);