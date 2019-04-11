const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost/TodoApp",{useNewUrlParser:true},(err,client)=>{
    if(err) return console.log("Unable to connect to db");
    var db = client.db("TodoApp");
    //deleting many at once
    // db.collection('Todos').deleteMany({text : 'eat lunch'}).then((success)=>{
    //     console.log(success.result);
    // });
    //delete one
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((success)=>{
    //     console.log(success.result);
    // })
    db.collection('Todos').findOneAndDelete({text:'eat lunch'}).then((success)=>{
        console.log(success);
    })
    client.close();


})