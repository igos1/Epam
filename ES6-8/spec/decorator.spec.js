var Ball = require("../lib/oopES6-8.js").Ball,
  SomeBallDecorator = require("../lib/oopES6-8.js").SomeBallDecorator,
  LineBallDecorator = require("../lib/oopES6-8.js").LineBallDecorator;

describe("Ball tests", function() {
  it("should run tests", function() {
    expect(new Ball()).toBeDefined();
  });
  it("should return 'Ball description'", function() {
    expect(new Ball().getDescription()).toEqual("ball");
  });
  it("should return 'red ball with lines'", function() {
    expect(new SomeBallDecorator(new Ball()).getDescription()).toEqual(
      "red ball with lines"
    );
  });
  it("should be called 'getDescription' from Ball", function() {
    var ball = new Ball();
    spyOn(ball, "getDescription");
    new SomeBallDecorator(ball).getDescription();
    expect(ball.getDescription).toHaveBeenCalled();
  });
  it("should be called 'red ball with lines' from Ball", function() {
    var ball = new Ball();
    var someBall = new SomeBallDecorator(ball);

    spyOn(someBall, "getDescription");

    new LineBallDecorator(someBall).getDescription();

    expect(someBall.getDescription).toHaveBeenCalled();
  });
});