var express=require("express");
var app=express();
var port=4000; 
 var middleware={
   requireAuthentictaion: function(req,res,next){

console.log("private route hit!");
next();     
   },
   logger:function(req,res,next){
     console.log("Request:"+' '+new Date().toString() +' '+req.method+' '+req.originalUrl);
     next(); 
   }
 };
 app.use(middleware.logger);
 app.use(middleware.requireAuthentictaion);
  app.get('/about',middleware.requireAuthentictaion,function (req,res) {
     
     res.send("About Us");
 });
 
 app.use(express.static(__dirname + '/public'));
 app.listen(port);
 console.log (port);