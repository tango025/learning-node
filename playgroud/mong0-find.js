// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");
MongoClient.connect("mongodb://localhost/TodoApp",{useNewUrlParser : true},(err,client)=>{
    if(err) return console.log("Unable to connect to db");
    console.log("connected to Mongo server");
    var db = client.db("TodoApp");

    db.collection("Todos").find({completed:false}).toArray().then((count)=>{
        console.log(JSON.stringify(count,undefined,2));   
    },(err)=>{
        console.log("unable to fetch due to ",err);
    })

    client.close();
})
 