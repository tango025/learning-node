var {mongoose} =require("./../todo_api/db/mongoose.js");
var {Todo} = require("./../todo_api/models/todos") ;
var { User } = require("./../todo_api/models/users");

var id = "5cb05549681a4a36f9a71c7c";
User.findById(id).then((user)=>{
    if(!user) return console.log("No id as such");
    console.log(user);
}).
catch((e)=>{
    console.log("Invalid id");
})  