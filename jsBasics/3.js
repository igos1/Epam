var  arr=[];
function diap(start,end,step){   
 if(typeof(step)=="undefined"){step=1;}
  if(start<end){
    for(var i=0;i<=(end-start)/step;i++){
      arr[i]=start+i*step;
    }
  }
  else{
    for(var i=0;i<=(start-end)/step;i++){
      arr[i]=start-i*step;
    }
    
  }
return arr;
}
console.log(diap(2,7,1));