const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js')
const args = yargs.argv;
const argument = args._[0];
if(argument === 'read'){    
    var result = notes.readNote(args.title);
    console.log(result? notes.logNote(result):`no note found`);

}
else if(argument === 'list'){ notes.getAll();}
else if (argument === 'add') { 
    var noteAdded = notes.addNote(args.title,args.body)
    console.log((noteAdded) ? notes.logNote(noteAdded):"Duplicate node found");
}
else if (argument === 'remove') {
    console.log((notes.remove(args.title))?`removed note ${args.title}`:`note not found`); 
}

else {console.log('wrong command');}