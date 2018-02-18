var Child = require("../lib/chain.js");

describe("Child tests", function() {
    it("should run tests", function() {
        expect(new Child()).toBeDefined();
    });
    it("should be called 'child number' from Child", function() {
        var child = new Child("number");
        expect(child.next).toEqual("number");
    });
    it("should be called 'send' from Wallet", function() {
      var child = new Child();
      spyOn(child, "eat");
      child.eat();
      expect(child.eat).toHaveBeenCalled();
    });
});
