const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost/TodoApi",{useNewUrlParser : true},(err,db)=>{
    (err)? console.log("Unable to connect to db"):console.log("connected to Mongo server");
})
