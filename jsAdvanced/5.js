var time = 6;
var interval_id = setInterval(function() { 
    time--;
    if (time != 0) {
      console.log("Программа завершится через "+time);
    } else {
      clearInterval(interval_id);       
    }
  }, 2000);



 var time = 1000;
var interval_id = setTimeout(function f() {    
      console.log('какой- то текст после '+time/1000+' с. ');
    time+=2000;      
  interval_id=setTimeout(f,time)
  if(time>9000) {clearInterval(interval_id);} 
   }, time);
