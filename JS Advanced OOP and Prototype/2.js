function Vehical() {
  this.speed=0;
                   }
Vehical.prototype.constructor = Vehical;

function Bike() {
   Vehical.call(this);
 this.wheelsCount=2;
}

Bike.prototype.constructor = Bike;

function Car() {
 Car.count++;
 Vehical.call(this);
 this.wheelsCount=4;
 this.doorsCount=4;
 this.openDoorCount=0;
}
Car.prototype.constructor = Car;
function MonsterTruck() {
   Car.call(this);
  this.wheelsSize=40;  
}

MonsterTruck.prototype.constructor = MonsterTruck;
Bike.prototype = Object.create(Vehical.prototype);

Car.prototype = Object.create(Vehical.prototype);

MonsterTruck.prototype = Object.create(Car.prototype);

Vehical.prototype.move=function(){
   this.speed++
 }

Vehical.prototype.stop=function(){
   this.speed=0
 }

Bike.prototype.move=function(){
   Vehical.prototype.move.call(this);
   console.log("����-������");
 }

Car.prototype.openDoor=function(){ 
 if(this.openDoorCount<this.doorsCount) {this.openDoorCount+=1;
  console.log("���-�� �������� ������="+(this.doorsCount-this.openDoorCount)); } 
}

Car.prototype.closeDoor=function(){ 
 if(this.openDoorCount>0) {this.openDoorCount-=1;
  console.log("���-�� �������� ������="+(this.doorsCount-this.openDoorCount)); } 
}

MonsterTruck.prototype.openDoor=function(){setTimeout(()=>{
  Car.prototype.openDoor.call(this);
},1000);}

Vehical.prototype.toString=function(){
   return ("vehical ����� ��������"+this.speed);
 }

Vehical.prototype.valueOf=function(){
  return this.speed;
}

Bike.prototype.toString=function(){
   return ("Bike ����� ��������"+this.speed +
           " � ���-�� ����� = " + this.wheelsCount);
 }
Bike.prototype.valueOf=function(){
  return this.wheelsCount;
}

Car.prototype.toString=function(){
   return ("Car ����� ��������"+this.speed+
           " , ���-�� ����� = " + this.wheelsCount + 
           " � ���-�� ������ = " + this.doorsCount);
 }

Car.prototype.valueOf=function(){
  return this.doorsCount;
}

MonsterTruck.prototype.toString=function(){
   return ("Car ����� ��������"+this.speed+" , ���-�� ����� = " + this.wheelsCount +
           " ,���-�� ������ = " + 
           this.doorsCount + " ,������ ����� = " +  this.wheelsSize);}

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