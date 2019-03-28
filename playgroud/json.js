const fs = require('fs');

var newNote = {
    title:"World",
    body :"Hello world"
}

fs.writeFileSync('notes.json',JSON.stringify(newNote));

var strNote = fs.readFileSync('notes.json');
console.log(JSON.parse(strNote).title);