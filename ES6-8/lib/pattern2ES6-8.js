class Wallet {
    constructor(name){
 this.name=name;
 this.amount = Math.random() * 1000;
    }
    
    eventFromWallet(plus) {
 this.amount = this.amount + plus;
 }     
   
    addObs(obs){
   this.wallObs=obs;  
 }
    
    send () {
 this.minus = Math.random() * 100;  
 console.log(`Баланс wallet ${this.name} = ${this.amount} ; Отправил= ${this.minus} ; Получил="  ${this.wallObs.minus}`);
 this.amount = this.amount - this.minus;
 if(!isNaN(this.wallObs.minus)){this.eventFromWallet.call(this,this.wallObs.minus);}  
  console.log(this.amount);
 if(this.amount > 0 && this.wallObs.amount > 0) {
 setTimeout(this.send.bind(this), Math.random() * 500);
 } else if (this.amount < 0){
  console.log(`WALLET ${this.name}  is empty`);  
 }
   else if (this.wallObs.amount < 0){
  console.log(`WALLET ${this.wallObs.name}  lost`);
   }
 }
    
 }
 
 module.exports = Wallet;