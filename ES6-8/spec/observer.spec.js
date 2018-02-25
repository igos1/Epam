var Wallet = require("../lib/pattern2ES6-8.js");

describe("Wallet tests", function() {
  it("should run tests", function() {
    expect(new Wallet()).toBeDefined();
  });
  it("should be called 'addObs object' from Wallet", function() {
    var wallet = new Wallet();
    wallet.addObs(null);
    expect(wallet.wallObs).toEqual(null);
  });
  it("should be called 'addObs' from Wallet", function() {
    var wallet = new Wallet();
    spyOn(wallet, "addObs");
    wallet.addObs();
    expect(wallet.addObs).toHaveBeenCalled();
  });
  it("should be called 'send' from Wallet", function() {
    var wallet = new Wallet();
    spyOn(wallet, "send");
    wallet.send();
    expect(wallet.send).toHaveBeenCalled();
  });
  it("should be called 'eventFromWallet' from Wallet", function() {
    var wallet = new Wallet();
    spyOn(wallet, "eventFromWallet");
    wallet.eventFromWallet();
    expect(wallet.eventFromWallet).toHaveBeenCalled();
  });
});
