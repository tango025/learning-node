const { MongoClient,ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log("Unable to connect to db");
    var db = client.db("TodoApp");
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5cac400e3f339835756a38c1")
    },{
        $inc:{age:1},
        $set:{name:"Gaurav",gender:"male"}
    },{
        returnOriginal:false
    }).then((success)=>{
        console.log(success)
    });

    
    client.close();


})