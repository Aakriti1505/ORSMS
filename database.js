const express = require("express");
const app = express();
const morgan = require('morgan')
const mysql = require('mysql');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(__dirname+"/public"));
//port used

app.use(morgan('short'))


const connection = getConnection()

function getConnection() {
  return mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "mysq"
})
}

app.use("/static", express.static(__dirname+"/public/static"));

app.set("view engine", "ejs");

app.get("/estate.html",function(req,res){
  res.sendFile(__dirname+"/public/estate.html");
  //_dirname : It will resolve to your project foulder.
});
app.get("/properties.html",function(req,res){
  res.sendFile(__dirname+"/public/properties.html");
  //_dirname : It will resolve to your project foulder.
});
app.get("/contact.html",function(req,res){
  res.sendFile(__dirname+"/public/contact.html");
  //_dirname : It will resolve to your project foulder.
});
app.get("/BUY.html",function(req,res){
  res.sendFile(__dirname+"/public/BUY.html");
  //_dirname : It will resolve to your project foulder.
});

app.get("/home.html",function(req,res){
  res.sendFile(path.join(__dirname+"/public/home.html"));
 });

 app.post('/submitform', function(req, res) {
  console.log("Trying to create a new user...")
  console.log("How do we get the form data???")

 });

  app.listen(3306);
