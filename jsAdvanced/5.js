 var time = 6;
var interval_id = setInterval(function() { 
    time--;
    if (time != 0) {
      console.log(time);
    } else {
      clearInterval(interval_id);       
    }
  }, 2000);



 var time = 1000;
var interval_id = setInterval(function() {    
      console.log('�����- �� ����� ����� '+time/1000+' �. ');
    time+=2000;
     if(time>9000) {clearInterval(interval_id);}      
   }, time);



