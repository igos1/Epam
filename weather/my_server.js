
var fs = require('fs');

const express = require('express');

var app = express();

var data =fs.readFileSync('scripts/data.json');
var length_d = JSON.parse(data).data_city.length;

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

 app.get('/city/:cityname', function(req , res){
    var cityname = req.params.cityname;

    for (var i = 0 ; i < length_d ; i++){        
        
        if (JSON.parse(data).data_city[i].city.name == cityname) {                       

        res.send(JSON.parse(data).data_city[i]);
       
		}		
    } 
    
 }) 

  app.listen(3000, function(){
    console.log("Сервер запущен");
})
