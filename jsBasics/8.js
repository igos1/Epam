//не смог найти ошибку со вторым вариантом сравнения:(
function deepCompare(ob1,ob2){
 var count=0;
 var keys1 = Object.keys(ob1);
var keys2 = Object.keys(ob2);
  if(keys1.length==keys2.length){
for (var i = 0; i < keys1.length; i++) {
for (var j = i; j < keys2.length; j++){
if (keys1[i]==keys2[j]) { 
    ++count;
   if( ob1[keys1[i]]!==ob2[keys2[j]]){  return false;  }

}    
}
}
  if (count!=keys1.length){   
    return false;  }
  return true;
}
  return false;
}
console.log(deepCompare({ one: 1, two: 2 }, { one: 1, two: 2}));
console.log(deepCompare({ two: 2, one: 1 }, { one: 1, two: 2 }));
console.log(deepCompare({ one: 1, two: 2 }, { two: 2 }));