//Ball
console.log(new Ball().getDescription ());
console.log(new SomeBallDecorator( new Ball()).getDescription ());
console.log(new LineBallDecorator( new Ball()).getDescription ());
console.log(new ColorBallDecorator( new Ball()).getDescription ());
console.log(new ColorBallDecorator( new LineBallDecorator( new Ball())).getDescription ());

//Wallet
let wallet1 = new Wallet('1');
let wallet2 = new Wallet('2');
wallet1.addObs(wallet2);
wallet2.addObs(wallet1);
wallet1.send();
wallet2.send();

//Child
const boy1 = new Child();
const girl1= new Child(boy1);
girl1.eat(2);
