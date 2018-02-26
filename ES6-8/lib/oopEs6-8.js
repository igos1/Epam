class Vehical{
    constructor(){
    this.speed=0;
    }
    move(){
     this.speed++;
   }
    stop(){
     this.speed=0
   }
    toString(){
     return ("vehical speed = "+this.speed);
   }
    valueOf(){
    return this.speed;
  }
  }
  
  class Bike extends Vehical{
    constructor(){
      super();
     this.wheelsCount=2;
    }
    move(){
     super.move();
      console.log("vrum-vruum");
   }
    toString(){
     return (super.toString()+' '+this.wheelsCount);
   }
    valueOf(){
    return {
      speed : super.ValueOf(), 
      wheelsCount: this.wheelsCount
    };    
  }
  }
  
  class Car extends Vehical{
    constructor(){
      super();
      this.wheelsCount=4;
      Car.count++;
      this.doorsCount=4;
      this.openDoorCount=0;
    }
   openDoor(){ 
   if(this.openDoorCount<this.doorsCount) {this.openDoorCount+=1;
    console.log("closed doors = "+(this.doorsCount-this.openDoorCount));
                                          } 
   }
     toString(){
     return (super.toString() + " " + this.wheelsCount+' ' + this.doorsCount);
   }
    valueOf(){
    return {
      speed : super.ValueOf(), 
      wheelsCount: this.wheelsCount,
      doorsCount: this.doorsCount
    };    
  }
  }
  
  class  MonsterTruck extends Car{
    constructor(){
      super();
      this.wheelsSize=40;
    }
   openDoor(){
     setTimeout(()=>{
    super.openDoor();
  },1000);}
     toString(){
     return (super.toString() + " " + this.wheelsSize);
     }   
    valueOf(){
      return {
      speed : super.ValueOf(), 
      wheelsCount: this.wheelsCount,
      doorsCount: this.doorsCount,
      wheelsSize: this.wheelsSize
    };    
    }
  }
  Car.count=0;
  
  