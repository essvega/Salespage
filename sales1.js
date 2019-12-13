var express = require("express"),
    app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


/* ------ Preloader ------- 
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("value-animated").style.display = "none";
  document.getElementById("head-page").style.display = "block";
}

/* ------ Preloader End -------*/

app.get("/", function(req, res){
    res.render("index");
});

app.get("/Sign-In", function(req, res){
    res.render("signin");
});


//To Do:
//1- If user hasn't Logged In cannot see cart from index page
//2- 
app.get("/cart", function(req, res){
    res.render("cart");
})
app.get("/category", function(req, res){
    res.render("category");
})
app.get("/checkout", function(req, res){
    res.render("checkout");
})
app.get("/contact", function(req, res){
    res.render("contact");
})
app.get("/product", function(req, res){
    res.render("product");
})


app.listen(3500, function(){
    console.log("Started");
});