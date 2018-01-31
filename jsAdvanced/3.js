  var currentCount = 0;
 var hyst=[];
function next() {  
    return function() {      
      hyst.push(currentCount);
      if (hyst.length>10) {
           hyst.splice(0, 1);}
      return currentCount++;
  };
}
function prev() { 

  return function() {    
    hyst.push(currentCount);
      if (hyst.length>10) {
           hyst.splice(0, 1);}
    return currentCount--;
  };
}
var counter= next();
var counter2=prev();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(hyst);