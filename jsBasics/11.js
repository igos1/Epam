
function getNames(dat){
  var month;
  switch (dat.getMonth()) {
  case 0:
   month="January"; 
    break;
      case 1:
   month="February"; 
    break;
      case 2:
   month="March"; 
    break;
      case 3:
   month="April"; 
    break;
      case 4:
   month="May"; 
    break;
      case 4:
   month="June"; 
    break;
      case 6:
   month="July"; 
    break;
      case 7:
   month="August"; 
    break;
      case 8:
   month="September"; 
    break;
      case 9:
   month="October"; 
    break;
      case 10:
   month="November"; 
    break;
      case 11:
   month="December"; 
    break;      
  default:
    console.log( 'Я таких значений не знаю' );
}
  var day;
switch (dat.getDay()){
  case 1:
   day="Wednesday";
    break;
 case 2:
   day="Tuesday";
    break;
    case 3:
   day="Wednesday";
    break;
    case 4:
   day="Thursday";
    break;
    case 5:
   day="Friday";
    break;
    case 6:
   day="Saturday";
    break;
    case 7:
   day="Sunday";
    break;
    default:
    console.log( 'Я таких значений не знаю' );
} 
  return (month+','+' '+day);
}
console.log(getNames(new Date()));