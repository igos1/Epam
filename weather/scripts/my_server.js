


var fs = require('fs');

const express = require('express');

var app = express();

var data = fs.readFileSync('data.json');

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

 app.get('/city', function(req , res){
     res.send(JSON.parse(data));
 }) 

  app.listen(3000, function(){
    console.log("Сервер запущен");
})