function Wallet(name) {
this.name=name;
this.amount = Math.random() * 1000;
}
Wallet.prototype.send = function () {
this.minus = Math.random() * 100;  
console.log("������ wallet"+this.name+'='+this.amount+'; �����������='+this.minus+"; ����������=" + this.wallObs.minus);
this.amount = this.amount - this.minus;
if(!isNaN(this.wallObs.minus)){this.eventFromWallet.call(this,this.wallObs.minus);}  
 console.log(this.amount);
if(this.amount > 0 && this.wallObs.amount > 0) {
setTimeout(this.send.bind(this), Math.random() * 500);
} else if (this.amount < 0){
 console.log("WALLET "+this.name+ " is empty");  
}
  else if (this.wallObs.amount < 0){
 console.log("WALLET "+this.wallObs.name+ " lost");
  }
};
Wallet.prototype.eventFromWallet = function(plus) {
this.amount = this.amount + plus;
}
Wallet.prototype.addObs=function(obs){
  this.wallObs=obs;  
}


let wallet1 = new Wallet('1');
let wallet2 = new Wallet('2');
wallet1.addObs(wallet2);
wallet2.addObs(wallet1);
wallet1.send();
wallet2.send();



