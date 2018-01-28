function multiplyOrThrow(a, b) { 
  try{
if (Math.random() < 0.5) {
return a * b;
} else {
throw 'MultiplicatorUnitFailure';
}
}
catch(MultiplicatorUnitFailure){   
 multiplyOrThrow(a, b);  
}
}
multiplyOrThrow(1, 2);