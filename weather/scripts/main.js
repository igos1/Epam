
 
 let city = document.getElementsByClassName("city");

 let city_mySer = document.getElementsByClassName("city_my_server");
 

 for ( var i = 0 ; i < city.length ; i ++) {

   city[i].addEventListener("click", showWeatherCity);

 }
 
 for ( var i = 0 ; i < city_mySer.length ; i ++) {

   city_mySer[i].addEventListener("click", showWeatherCity);

 }

 city[0].click();
 
    var city_name_h = document.getElementById("city_name_h");
	var week_day = document.getElementsByClassName("name_week");
	var week_day_name = document.getElementsByClassName("day_name");
	var day_wid = document.getElementsByClassName("day_widget");
	var night_wid = document.getElementsByClassName("night_widget");
	var week_day_icon = document.getElementsByClassName("week_day_icon");	
	

	function Week_day_Name_func(n){
		switch (n)
		{
		case 1:n ="Monday"; break;
		case 2:n ="Tuesday"; break;
		case 3:n ="Wednesday"; break;
		case 4:n ="Thursday"; break;
		case 5:n ="Friday"; break;
		case 6:n ="Saturday"; break;
		case 0:n ="Sunday"; break;
		default:n ="Неверные данные";
		}
		return n;
	 }

	 function today_weather(data){

		city_name_h.innerHTML = data.city.name;					 

		document.getElementById("today_widget").innerHTML =Math.round( data.list[0].main.temp - 273) + "°";					 

		document.getElementById("date_tuesday").innerHTML =  Week_day_Name_func((new Date (data.list[0].dt_txt)).getDay()) +
		 ", " +( new Date().toLocaleString("en", {month: 'long', day: 'numeric'}));			 

		document.getElementById("clouds").innerHTML = "Precipipation: "+ data.list[0].clouds.all+"%";					 

		document.getElementById("Humidity").innerHTML = "Humidity: "+ data.list[0].main.humidity+"%";					 

		document.getElementById("wind").innerHTML ="Wind: "+ data.list[0].wind.speed + " mph";

		document.getElementById("today_icon").src = "http://openweathermap.org/img/w/" +
		 data.list[0].weather[0].icon + ".png";
	 }

	 function week_weather(data){

		var i = 1;
		var m = 0;					
			
		if( (new Date (data.list[0].dt_txt)).getHours()  > 12){
									   
		   week_day_name[0].innerText = Week_day_Name_func((new Date (data.list[0].dt_txt)).getDay());	

		   day_wid[0].innerText = Math.round(data.list[0].main.temp - 273) + '°';

		   week_day_icon[0].src =  "http://openweathermap.org/img/w/"+

				data.list[0].weather[0].icon + ".png";
			   
			   }
				else{								 
					i = 0;
				}
				

		   for( var j = 0 ; j <data.list.length ; j++  ){		
		   
			   if ((new Date (data.list[j].dt_txt)).getHours() == "12") {								
										   
				   week_day_name[i].innerText = Week_day_Name_func((new Date (data.list[j].dt_txt)).getDay());				   
				   

				   day_wid[i].innerText = Math.round(data.list[j].main.temp - 273) + '°';

				   week_day_icon[i].src =  "http://openweathermap.org/img/w/"+
					data.list[j].weather[0].icon + ".png";

				   i++;																	

			   }						
				  if ( i == 5) break;
			   
			   if ((new Date (data.list[j].dt_txt)).getHours() == "0"){
				   
				   night_wid[m].innerText = Math.round(data.list[j].main.temp - 273) + '°';
				   m++;
			   }		   
	   }

	 }

	 function find(array, value) {
		
		for (var i = 0; i < array.length; i++) {
			
		  if (array[i].dataset.city === value.dataset.city) {
			
			  return i+1;}
		}  
		
		return false;
	  }
	  
	  

 function showWeatherCity(){
	 var url = conf.url_openweather + '?q='+this.dataset.city+'&appid=' + conf.key;
	if(!find(city,this)){			
			
	 url = conf.url_myserv +"/"+this.dataset.city		
	}    
	

	 var request = new XMLHttpRequest();	
	 
	 request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
				try {

					var data = JSON.parse(request.responseText);				
	 
					today_weather(data);
					
					week_weather(data);						
					
				} catch (err) {
						console.log(err.message + " in " + request.responseText);
						return;
				}
				
		}
};
	 
	 request.open("GET",url);
	 request.send();
 }



 