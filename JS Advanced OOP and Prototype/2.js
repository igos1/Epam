function Vehical() {}
 Vehical.prototype.speed=0;
function Bike() {}
function Car() {
  Car.count++;
}
function MonsterTruck() {}
Bike.prototype = new Vehical();
Car.prototype = new Vehical();
MonsterTruck.prototype= new Car();
Bike.prototype.wheelsCount=2;
Car.prototype.wheelsCount=4;
Car.prototype.doorsCount=4;
Car.prototype.openDoorCount=0;
MonsterTruck.prototype.wheelsSize=undefined;

Vehical.prototype.move=function(){
   this.speed+=1
 }
Vehical.prototype.stop=function(){
   this.speed=0
 }
Bike.prototype.move=function(){
     this.speed+=1
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
 if(this.openDoorCount<this.doorsCount) {this.openDoorCount+=1;
  console.log("���-�� �������� ������="+(this.doorsCount-this.openDoorCount)); } 
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
var myCar2= new Car();
myCar.move();
console.log(myCar.speed);
myCar.openDoor();
console.log(Car.count);