var express=require("express");
var app=express();
var port=process.env.PORT || 4000; 
 var middleware=require('./middleware.js');
 app.use(middleware.logger);
 app.use(middleware.requireAuthentictaion);
  app.get('/about',middleware.requireAuthentictaion,function (req,res) {
     
     res.send("About Us");
 });
 
 app.use(express.static(__dirname + '/public'));
 app.listen(port);
 console.log (port);