function compare(value1, value2){
  return new Promise(function (resolve, reject){
  setTimeout(()=>{
    if(value1==null || value2==null){ 
      reject(new Error("Не с чем сравнивать!"));}
    else if (value1<value2 && (typeof(value1)=="number" && typeof(value2)=="number" )){
      resolve(-1);}
    else if(value1===value2 && (typeof(value1)=="number" && typeof(value2)=="number" )) {
      resolve(0);}
    else if(value1>value2 && (typeof(value1)=="number" && typeof(value2)=="number" )) {
      resolve(1);}    
    else {reject(new Error("не число!"));}
  }, 1000);  
}).then(result=>{console.log(result);},error=>{console.log(error.message);});
}
compare(2,'1');