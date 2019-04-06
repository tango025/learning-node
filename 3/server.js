const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine','hbs')

hbs.registerHelper("getCurrentYear",()=>{
    return new Date().getFullYear();
});
hbs.registerHelper("screamIt",(text)=> {
    return text.toUpperCase();
});

//logger
app.use((req,res,next)=>{
    var log = `${new Date().toString()} : ${req.method} ${req.url}`;
    fs.appendFile("server.log",log+"\n",(err)=>{
        if (err) res.render("maintainence");;
        next();
    });
   
})

// app.use((req,res,next)=>{
//     res.render("maintainence");
// })maintainance page

app.use(express.static(__dirname + "/public"));//for static hosting

app.get("/",(req,res) =>{
    res.render("home")
})
app.get("/about",(req,res)=>{
    res.render("about",{
        name:"Gaurav Gupta",
        born:"Tinsukia"
    })
})
app.listen(3000,()=>{
    console.log("server up and running");
})