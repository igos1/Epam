function Vehical() {
    this.speed=0;
    this.move=function(){
    this.speed+=1;
                        }
    this.stop=function(){
    this.speed=0;
                        }
   this.toString=function(){
   return ("vehical ����� ��������"+this.speed);
                           }
  this.valueOf=function(){
  return this.speed;
                         }
                  };
 
 function Bike() {
    Vehical.call(this);
    this.wheelsCount=2;
   
    this.move=function(){
    Vehical.prototype.move.call(this);
    console.log("����-������");
                        }
    
   this.toString=function(){
   return ("Bike ����� ��������"+this.speed +
           " � ���-�� ����� = " + this.wheelsCount);
                            }
   
  this.valueOf=function(){
  return this.wheelsCount;
                         }
  
};

function Car() {
  Vehical.call(this);
  this.wheelsCount=4;
  this.doorsCount=4;
  this.openDoorCount=0;
  Car.count++;
  
  this.openDoor=function(){ 
  if(this.openDoorCount<this.doorsCount) {this.openDoorCount+=1;
  console.log("���-�� �������� ������="+(this.doorsCount-this.openDoorCount)); } 
                          }
  
  this.closeDoor=function(){ 
  if(this.openDoorCount>0) {this.openDoorCount-=1;
  console.log("���-�� �������� ������="+(this.doorsCount-this.openDoorCount)); } 
                           }
  
  this.toString=function(){
   return ("Car ����� ��������"+this.speed+
           " , ���-�� ����� = " + this.wheelsCount + 
           " � ���-�� ������ = " + this.doorsCount);
                          }
  
this.valueOf=function(){
  return this.doorsCount;
                       }

};

function MonsterTruck(){  
 Car.apply(this, arguments);
  this.wheelsSize=40;  
  var parentopenDoor = this.openDoor;
  
  this.openDoor=function(){    
  setTimeout(()=>{
   parentopenDoor.apply(this, arguments);
},1000);}
  
  this.toString=function(){
  return ("Car ����� ��������"+this.speed+" , ���-�� ����� = " + this.wheelsCount +
           " ,���-�� ������ = " + 
           this.doorsCount + " ,������ ����� = " +  this.wheelsSize);}
  
  this.valueOf=function(){
  return this.wheelsSize;
}
};

Bike.prototype = Object.create(Vehical.prototype);
Car.prototype = Object.create(Vehical.prototype);
MonsterTruck.prototype = Object.create(Car.prototype);


Car.count=0;

var myCar= new Car();
console.log(myCar.speed);
var myCar1= new Car();
var myCar2= new MonsterTruck();
myCar.move();
myCar.move();
console.log(myCar.speed);
myCar.stop();
console.log(myCar.speed);
myCar2.openDoor();
console.log(myCar2 instanceof Vehical);