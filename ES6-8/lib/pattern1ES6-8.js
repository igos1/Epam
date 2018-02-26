class Ball {
  constructor(ball){
    this.ball = ball;
  }
  getDescription() {
    return 'ball';
  }
}

  
  class SomeBallDecorator {     
      constructor (ball){
        this.ball = ball;
      }
      getDescription() {
        return (`red ${this.ball.getDescription()} widht lines`);
      }
    }
  
  class LineBallDecorator { 
  constructor(_ball) { 
  this.ball=_ball; 
  } 
  getDescription() { 
  return (`${this.ball.getDescription()}  with lines`); 
  }
  } 
  
  class ColorBallDecorator { 
  constructor(_ball) { 
  this.ball=_ball; 
  } 
  getDescription() { 
  return (`red   ${this.ball.getDescription()}`); 
  }
  } 
  
  exports.Ball = Ball; 
  exports.SomeBallDecorator = SomeBallDecorator; 
  exports.LineBallDecorator = LineBallDecorator; 
  exports.ColorBallDecorator = ColorBallDecorator;