var express=require("express");
var app=express();
app.use(express.static("public"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get("/home",function(req,res){
res.render("home");
});

app.get("/t2m",function(req,res){
res.render("text2mc.ejs");
});
app.get("/m2t",function(req,res){
res.render("mctotext");
});
app.get("/m2a",function(req,res){
res.render("mc2au");
});






app.listen(3888,function(){
  console.log("Server is running");  
});