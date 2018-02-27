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
        return (`red ${this.ball.getDescription()} with lines`);
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
  
  module.exports.Ball = Ball; 
  module.exports.SomeBallDecorator = SomeBallDecorator; 
  module.exports.LineBallDecorator = LineBallDecorator; 
  module.exports.ColorBallDecorator = ColorBallDecorator;
