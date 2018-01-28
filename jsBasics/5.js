function mergeArrays(...arrArr){
  var newArray=[];
  for(var i=0;i<arrArr.length;++i){
     newArray=newArray.concat(arrArr[i]);
    }
  for(var i=0;i<newArray.length;++i){
    for(var j=i+1;j<newArray.length;++j){    
    if(newArray[i]==newArray[j]){ 
      newArray.splice(j,1);}
  }
  } 
  
  return newArray;
  }

console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log(mergeArrays([1, 2], [2, 4], [4, 6]));