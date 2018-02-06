function Vehical() {
    this.speed=0;
    this.move=function(){
    this.speed+=1;}
    this.stop=function(){
    this.speed=0;
                        }
   this.toString=function(){
   return ("vehical имеет скорость"+this.speed);
                           }
  this.valueOf=function(){
  return this.speed;
                         }
                  }
 
 function Bike() {
    Vehical.call(this);
    this.wheelsCount=2;
    this.move=function(){
    this.speed+=1
    console.log("Врум-врууум");
                        }
   this.toString=function(){
   return ("Bike имеет скорость"+this.speed +
           " и кол-во колес = " + this.wheelsCount);
                            }
  this.valueOf=function(){
  return this.wheelsCount;
                         }
}

function Car() {
  Vehical.call(this);
  this.wheelsCount=4;
  this.doorsCount=4;
  Car.count++;
  this.openDoor=function(){ 
  if(this.openDoorCount<this.doorsCount) {this.openDoorCount+=1;
  console.log("Кол-во закрытых дверей="+(this.doorsCount-this.openDoorCount)); } 
                          }
  this.closeDoor=function(){ 
  if(this.openDoorCount>0) {this.openDoorCount-=1;
  console.log("Кол-во закрытых дверей="+(this.doorsCount-this.openDoorCount)); } 
                           }
  this.toString=function(){
   return ("Car имеет скорость"+this.speed+
           " , кол-во колес = " + this.wheelsCount + 
           " и кол-во дверей = " + this.doorsCount);
                          }
this.valueOf=function(){
  return this.doorsCount;
                       }
}

function MonsterTruck(){
  Car.call(this);
  this.wheelsSize=40;
  this.openDoor=function(){setTimeout(()=>{ 
  if(this.openDoorCount<this.doorsCount) {this.openDoorCount+=1;
  console.log("Кол-во закрытых дверей="+(this.doorsCount-this.openDoorCount)); } 
  },1000);}
  this.toString=function(){
  return ("Car имеет скорость"+this.speed+" , кол-во колес = " + this.wheelsCount +
           " ,кол-во дверей = " + 
           this.doorsCount + " ,размер колес = " +  this.wheelsSize);}
  this.valueOf=function(){
  return this.wheelsSize;
}
}

var myCar= new Car();
console.log(myCar.speed);
Car.count=0;
var myCar= new Car();
var myCar2= new Car();
myCar.move();
myCar.move();
console.log(myCar.speed);
myCar.stop();
console.log(myCar.speed);
myCar.openDoor();