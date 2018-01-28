function differenceInYears(date1, date2){
  var raz;  
  raz=Date.parse(date1)-Date.parse(date2);
  return (Math.abs(raz/(1000*60*60*24*365))).toFixed(1);
  }
console.log(differenceInYears(new Date(2014, 10, 2), new Date(2016, 10, 2)));
console.log(differenceInYears(new Date(2014, 0), new Date(2014, 6)));