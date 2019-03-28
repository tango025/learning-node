const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js')
var titleObj =  {
    describe:'Title of the note',
    demand: true,
    alias:'t'
}
var bodyObj = {
    describe: 'body of the node',
    demand: true,
    alias: "b"
} 
const args = yargs
    .command('add','add a new note',{
        title : titleObj,
        body: bodyObj
    })
    .command('list','list all nodes')
    .command('read','read the perticular node',{
        title :titleObj
    })
    .command('remove', 'remove the perticular node', {
        title: titleObj
    })
    .help()
    .argv;
const argument = args._[0];
if(argument === 'read'){    
    var result = notes.readNote(args.title);
    console.log(result? notes.logNote(result):`no note found`);

}
else if(argument === 'list'){
    var notesArr = notes.getAll();
    notesArr.forEach((note)=>{
        console.log(notes.logNote(note)+"\n");
    })
}
else if (argument === 'add') { 
    var noteAdded = notes.addNote(args.title,args.body)
    console.log((noteAdded) ? notes.logNote(noteAdded):"Duplicate node found");
}
else if (argument === 'remove') {
    console.log((notes.remove(args.title))?`removed note ${args.title}`:`note not found`); 
}

else {console.log('wrong command');}