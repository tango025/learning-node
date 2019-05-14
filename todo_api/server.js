var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todos");
var {User} = require("./models/users")
var {ObjectID} = require("mongodb");
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

//get perticular ID 
app.get("/todos/:id",(req,res)=>{
    var id = req.params.id;
    if(ObjectID.isValid(id)){
        Todo.findById(id).then((todo)=>{
            if(todo) res.send({todo});
            else res.status(404).send("Id either deleted of not associated with any todo");
        },(e=>{
            res.status(400).send(e);
        }))
    }else{
        res.status(404).send("a");
    }
})
let port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server started at ${port}`);
});
