var array=['A','B','C','D'];
function reveseArrayInPlace(arr){
  var a; 
  for(var i=0;i<Math.ceil(arr.length/2);i++){
    a=arr[i];
    arr[i]=arr[(arr.length-1)-i];
    arr[(arr.length-1)-i]=a;
  }
  return arr;
}
reveseArrayInPlace(array);
console.log(array);
function reveseArray(arr){
  var arr1=[]; 
  for(var i=arr.length-1;i>=0;i--){    
    arr1.push(arr[i]);
  }
  return arr1;
}
reveseArray(array);
console.log(reveseArray(array));
console.log(array);