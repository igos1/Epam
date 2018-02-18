var CarBuilder = require("../lib/builder.js");

describe("running jasmine in jsfiddle", function(){
it("should test car builder", function(){
    // Given
    var builder = new CarBuilder();
    // When
    builder
        .reset()
        .setSeats(2)
        .setTripComputer(true)
        .setGPS(true)
        .setTyreSize('big');

    var car = builder.getResult();

    // Then
    expect(car.getSeats()).toEqual(2);
    expect(car.getTripComputer()).toEqual(true);
    expect(car.getGps()).toEqual(true);
    expect(car.getTyreSize()).toMatch('big');
    });
});

it("should test car builder with small car", function(){
    // Given
    var builder= new CarBuilder();
    // When
    builder
    .reset()
    .setSeats(5)
    .setTripComputer(false)
    .setGPS(false)
    .setTyreSize("small");
    var car = builder.getResult();
    
    // Then
    expect(car.getSeats()).toEqual(5);
    expect(car.getTripComputer()).toEqual(false);
    expect(car.getGps()).toEqual(false);
    expect(car.getTyreSize()).toMatch("small");
    });

    
    it("should test car builder with default values", function(){
    // Given
    var builder= new CarBuilder();
    // When
    
    builder
    .reset();
    
    var car = builder.getResult();
    
    // Then
    expect(car.getSeats()).toEqual(4);
    expect(car.getTripComputer()).toEqual(false);
    expect(car.getGps()).toEqual(false);
    expect(car.getTyreSize()).toMatch("medium");
    });
    it("should test two cars", function(){
    // Given
    var builder= new CarBuilder();
    
    // When
    
    builder
    
    .reset();
    
    var car = builder.getResult();
    var car2 = builder.getResult();
    // Then
    expect(car).not.toBe(car2);
    
    });
