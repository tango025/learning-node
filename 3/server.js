const express = require("express");
const hbs = require("hbs");

var app = express();
app.set('view engine','hbs')
app.use(express.static(__dirname + "/public"));//for static hosting

app.get("/about",(req,res)=>{
    res.render("about")
})
app.listen(3000)