// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");
MongoClient.connect("mongodb://localhost/TodoApp",{useNewUrlParser : true},(err,client)=>{
    if(err) return console.log("Unable to connect to db");
    console.log("connected to Mongo server");
    var db = client.db("TodoApp");

    // db.collection('Todos').insertOne({
    //     text:"something to do",
    //     completed : true
    // },(err,result)=>{
    //     if(err) return console.log("Unable to add data",err);
    //     console.log(JSON.stringify(result.ops[0],undefined,2))
    // });

    db.collection("Users").insertOne({
        name:"tango025",
        age:21,
        location:"Texas"
    },(err,result)=>{
        if(err) return console.log("Unable to Insert");
        
        console.log(JSON.stringify(result.ops,undefined,2));
    })

    client.close();
})
 