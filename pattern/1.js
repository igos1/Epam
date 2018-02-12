function Ball(){};
Ball.prototype.getDescription = function () {
return "ball";
};

function SomeBallDecorator(_ball){
  this.ball=_ball;
}

SomeBallDecorator.prototype.getDescription = function() {
  return 'red ' + this.ball.getDescription() + ' with lines';
};

function LineBallDecorator(_ball){
  this.ball=_ball;
}

LineBallDecorator.prototype.getDescription = function() {
  return  this.ball.getDescription() + ' with lines';
};

function ColorBallDecorator(_ball){
  this.ball=_ball;
}

ColorBallDecorator.prototype.getDescription = function() {
  return 'red ' + this.ball.getDescription() ;
};


console.log(new Ball().getDescription ());
console.log(new SomeBallDecorator( new Ball()).getDescription ());
console.log(new LineBallDecorator( new Ball()).getDescription ());
console.log(new ColorBallDecorator( new Ball()).getDescription ());
console.log(new ColorBallDecorator( new LineBallDecorator( new Ball())).getDescription ());
