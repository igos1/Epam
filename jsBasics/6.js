function every(arr,func){
var count=0;
  var bool=false;
  for(var i=0;i<arr.length;i++){
    if(func(arr[i])){count++;}
  }
 if(count==arr.length) {bool=true;} 
  return bool; 
}
function some(arr,func){
var count;
  for(var i=0;i<arr.length;i++){
    if(func(arr[i])){return true;}
      
      }
  return false;
 }
console.log(every([1, 4, NaN, 6], Number.isNaN));
console.log(every([NaN, NaN], Number.isNaN));
console.log(some([1, 2, 3], Number.isNaN));