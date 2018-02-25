class Ball{ 
    getDescription() {
  return "ball";
  };
  }
  
  class SomeBallDecorator {
   constructor(_ball) {
     this.ball=_ball;
   }
    getDescription() {
    return 'red ' + this.ball.getDescription() + ' with lines';
  };
  }
  
  class LineBallDecorator {
   constructor(_ball) {
     this.ball=_ball;
   }
    getDescription() {
    return  this.ball.getDescription() + ' with lines';
  };
  }
  
  class ColorBallDecorator {
   constructor(_ball) {
     this.ball=_ball;
   }
    getDescription() {
    return  'red ' + this.ball.getDescription();
  };
  }
  console.log(new Ball().getDescription ());
  console.log(new SomeBallDecorator( new Ball()).getDescription ());
  console.log(new LineBallDecorator( new Ball()).getDescription ());
  console.log(new ColorBallDecorator( new Ball()).getDescription ());
  console.log(new ColorBallDecorator( new LineBallDecorator( new Ball())).getDescription ());