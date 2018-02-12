   function sumWith(number) {
    return this.currentValue += number;
}
var number = 2;
var value={
    currentValue: 3
};
 console.log(sumWith.call(value,number));



function sumWith(number) {
   return this.currentValue += number;
}
 var number = 2;
 var value={
  currentValue: 3
};
  console.log(sumWith.apply(value,[number]));


function sumWith(number) {
   return this.currentValue += number;
}
 var number = 2;
 var value={
  currentValue: 3
};
  console.log(sumWith.bind(value,number)());


var countSum= function(){  
  this.currentValue=-3;  
  return sumWith.bind(this,number+=2)();  
}


console.log(countSum());
console.log(countSum());
console.log(countSum());
console.log(countSum());