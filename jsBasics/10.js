function findNumbers(arr){

var reg = /^[-+]?((\d+\.\d+|\d+\.)|((\.\d+)|\d+))(?:[eE][+-]?\d+)?$/i;
var arrret=[];
for(var i=0;i<arr.length;++i){
   if (reg.test(arr[i])){arrret.push(arr[i]);}
}
  return arrret;
}
console.log(findNumbers(["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]));
console.log(findNumbers(["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]));
