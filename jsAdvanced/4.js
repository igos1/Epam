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
  currentValue: -1
};
console.log(sumWith.apply(value,[number]));
console.log(sumWith.apply(value,[number]));
console.log(sumWith.apply(value,[number]));
console.log(sumWith.apply(value,[number]));