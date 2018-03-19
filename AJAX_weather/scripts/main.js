 let city = document.getElementsByClassName("city");
 for ( var i = 0 ; i < city.length ; i++) {
   city[i].addEventListener("click", showWeatherCity);
 }
 
 var city_name_h = document.getElementById("city_name_h");

	var week_day = document.getElementsByClassName("name_week");
	var week_day_name = document.getElementsByClassName("day_name");
	var day_wid = document.getElementsByClassName("day_widget");
	var night_wid = document.getElementsByClassName("night_widget");
	week_day_icon = document.getElementsByClassName("week_day_icon");

	

 function showWeatherCity(){
	 var request = new XMLHttpRequest();

	 function Name(n){
		switch (n)
		{
		case 1:n ="Понедельник"; break;
		case 2:n ="Вторник"; break;
		case 3:n ="Среда"; break;
		case 4:n ="Четверг"; break;
		case 5:n ="Пятница"; break;
		case 6:n ="Суббота"; break;
		case 7:n ="Воскресенье"; break;
		default:n ="Неверные данные";
		}
		return n;
	 }
	 
	 request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
				try {
						var data = JSON.parse(request.responseText);
						city_name_h.innerHTML="";
					// console.log(data.list[0].weather[0].icon);		
					console.log(data);			 
					 city_name_h.innerHTML = data.city.name;
					 document.getElementById("today_widget").innerHTML = "";
					 document.getElementById("today_widget").innerHTML =Math.round( data.list[0].main.temp - 273);
					 document.getElementById("date_tuesday").innerHTML = "";
					 document.getElementById("date_tuesday").innerHTML = "Tuesday,  " +((new Date (data.list[0].dt_txt)).toDateString()).slice(4,11);
					 document.getElementById("clouds").innerHTML = "";
					 document.getElementById("clouds").innerHTML ="Precipipation: "+ data.list[0].clouds.all+"%";
					 document.getElementById("Humidity").innerHTML = "";
					 document.getElementById("Humidity").innerHTML ="Humidity: "+ data.list[0].main.humidity+"%";
					 document.getElementById("wind").innerHTML = "";
					 document.getElementById("wind").innerHTML ="Wind: "+ data.list[0].wind.speed + " mph";
					 document.getElementById("today_icon").src = "http://openweathermap.org/img/w/"+ data.list[0].weather[0].icon + ".png";

					 var i = 0;
					 var m = 0;

					
						 
						for( var j = 0 ; j <data.list.length ; j++  ){
							
							
							if ((new Date (data.list[j].dt_txt)).getHours() == "9") {
								
							  
								
								console.log(i);
																
								week_day_name[i].innerText = Name((new Date (data.list[j].dt_txt)).getDay());
								day_wid[i].innerText = Math.round(data.list[j].main.temp - 273) + '°';
								week_day_icon[i].src =  "http://openweathermap.org/img/w/"+ data.list[j].weather[0].icon + ".png";
								i++;							

																

							}						
						
							
							if ((new Date (data.list[j].dt_txt)).getHours() == "0"){
								
								night_wid[m].innerText = Math.round(data.list[j].main.temp - 273) + '°';
								m++;

							}
						
					}
					week_day_name[0].innerText +="\n" + " (сегодня)"



				


				} catch (err) {
						console.log(err.message + " in " + request.responseText);
						return;
				}
				
		}
};
	 
	 request.open("GET",'http://api.openweathermap.org/data/2.5/forecast?q='+this.dataset.city+'&appid=e33262cd6a432b1c3dc5181a736dbc41');
	 request.send();
 }