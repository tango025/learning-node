var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todos");
var {User} = require("./models/users")

var app = express();
app.use(bodyParser.json());

//Add a new todo

app.post("/todos",(req,res)=>{
    var newtodo = new Todo({
        text:req.body.text
    })
    newtodo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })
})

//get  all todos

app.get("/todos",(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e=>{
        res.status(400).send(e);
    }))
})

app.listen(3000,()=>{
    console.log("server started at 3000");
});
