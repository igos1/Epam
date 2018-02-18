function CarBuilder() {}
CarBuilder.prototype.reset = function() {
    this.seat = 4;
    this.tripComputed = false;
    this.gps = false;
    this.size = "medium";
    return this;
};
CarBuilder.prototype.setSeats = function(seat) {
  this.seat = seat ;
  return this;
};
CarBuilder.prototype.setTripComputer = function(tripComputed) {
  this.tripComputed = tripComputed ;
  return this;
};
CarBuilder.prototype.setGPS = function(gps) {
  this.gps = gps ;
  return this;
};
CarBuilder.prototype.setTyreSize = function(size) {
  this.size = size ;
  return this;
};
CarBuilder.prototype.getResult = function() {
    var seat=this.seat;
    var trip=this.tripComputed;
    var gps=this.gps;
    var size=this.size;
    return { 
        getSeats: function() {
            return seat;
        }, 
        getTripComputer: function() {
            return trip;
        }, 
        getGps: function() {
            return gps;
        },
        getTyreSize: function() {
            return size;
        } 
    };
}

module.exports = CarBuilder;