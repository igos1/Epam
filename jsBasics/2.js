function countChar(str,sim){
  var count=0;  
  for(var i=0;i<=str.length;i++){    
    if(str.toLowerCase()[i]==sim.toLowerCase()) count++;
  }
  return count;
  
}
console.log(countChar('My Random String','m'));