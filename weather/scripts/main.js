 let city = document.getElementsByClassName("city");

 let city_mySer = document.getElementsByClassName("city_my_server");

 for ( var i = 0 ; i < city_mySer.length ; i ++) {

	city_mySer[i].addEventListener("click", showWeatherCityMyServ);
 
  }

 for ( var i = 0 ; i < city.length ; i ++) {

   city[i].addEventListener("click", showWeatherCity);

 }

 city[0].click();
 
    var city_name_h = document.getElementById("city_name_h");
	var week_day = document.getElementsByClassName("name_week");
	var week_day_name = document.getElementsByClassName("day_name");
	var day_wid = document.getElementsByClassName("day_widget");
	var night_wid = document.getElementsByClassName("night_widget");
	var week_day_icon = document.getElementsByClassName("week_day_icon");	
	

	function Name(n){
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

 function showWeatherCity(){

	 var request = new XMLHttpRequest();

	
	 
	 request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
				try {

					var data = JSON.parse(request.responseText);					
							 
					 city_name_h.innerHTML = data.city.name;					 

					 document.getElementById("today_widget").innerHTML =Math.round( data.list[0].main.temp - 273) + "°";					 

					 document.getElementById("date_tuesday").innerHTML =  Name((new Date (data.list[0].dt_txt)).getDay()) +
					  ", " +( new Date().toLocaleString("en", {month: 'long', day: 'numeric'}));			 

					 document.getElementById("clouds").innerHTML = "Precipipation: "+ data.list[0].clouds.all+"%";					 

					 document.getElementById("Humidity").innerHTML = "Humidity: "+ data.list[0].main.humidity+"%";					 

					 document.getElementById("wind").innerHTML ="Wind: "+ data.list[0].wind.speed + " mph";

					 document.getElementById("today_icon").src = "http://openweathermap.org/img/w/" +
					  data.list[0].weather[0].icon + ".png";

					 var i = 1;
					 var m = 0;					
						 
					 if( (new Date()).getHours() >= 12){
													
						week_day_name[0].innerText = Name((new Date (data.list[0].dt_txt)).getDay());					
						day_wid[0].innerText = Math.round(data.list[0].main.temp - 273) + '°';
						week_day_icon[0].src =  "http://openweathermap.org/img/w/"+
							 data.list[0].weather[0].icon + ".png";
							 
							}
							 else{
								 i = 0;
							 }
							 

						for( var j = 0 ; j <data.list.length ; j++  ){		
						
							if ((new Date (data.list[j].dt_txt)).getHours() == "12") {								
														
								week_day_name[i].innerText = Name((new Date (data.list[j].dt_txt)).getDay());
								
								

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
					
				} catch (err) {
						console.log(err.message + " in " + request.responseText);
						return;
				}
				
		}
};
	 
	 request.open("GET",'http://api.openweathermap.org/data/2.5/forecast?q='+this.dataset.city+'&appid=e33262cd6a432b1c3dc5181a736dbc41');
	 request.send();
 }


 function showWeatherCityMyServ(){
 
	var request = new XMLHttpRequest();	
	 var that = this;
	request.onreadystatechange = function () {
	   if (request.readyState == 4 && request.status == 200) {
			   try {

				var data = JSON.parse(request.responseText);
				console.log(data);
				var city_num = 0;
								

				for ( var i = 0; i < data.city.length ; i++){

					if(data.city[i].city_name == that.dataset.city) {
						city_num = i; 
						break;
					}

				}
				city_name_h.innerHTML = data.city[city_num].city_name;

				document.getElementById("today_widget").innerHTML = data.city[city_num].data_for_5_days[0].temp_day+ "°";					 

			    document.getElementById("date_tuesday").innerHTML =  Name((new Date (data.city[city_num].data_for_5_days[0].dt_txt)).getDay()) +
					  ", " +( new Date().toLocaleString("en", {month: 'long', day: 'numeric'}));			 

			    document.getElementById("clouds").innerHTML = "Precipipation: "+ data.city[city_num].data_for_5_days[0].Precipipation+"%";					 

				document.getElementById("Humidity").innerHTML = "Humidity: "+ data.city[city_num].data_for_5_days[0].Humidity+"%";					 

				document.getElementById("wind").innerHTML ="Wind: "+ data.city[city_num].data_for_5_days[0].Wind + " mph";

				document.getElementById("today_icon").src = data.city[city_num].data_for_5_days[0].icon_weather;

				for( var j = 0 ; j < 5 ; j++  ){

					week_day_name[j].innerText = Name((new Date (data.city[city_num].data_for_5_days[j].dt_txt)).getDay());

					
								
					day_wid[j].innerText = data.city[city_num].data_for_5_days[j].temp_day + '°';

					night_wid[j].innerText =data.city[city_num].data_for_5_days[j].temp_night + '°';

					week_day_icon[j].src = data.city[city_num].data_for_5_days[j].icon_weather;
					
				}
				



			} catch (err) {
				console.log(err.message + " in " + request.responseText);
				return;
		}
		
}
};

request.open("GET",'http://localhost:3000/city');
request.send();


 }
 