const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js')
const args = yargs.argv;
const argument = args._[0];
if(argument === 'read'){ notes.readNote(args.title);}
else if(argument === 'list'){ notes.getAll();}
else if(argument === 'add') {notes.addNote(args.title,args.body)}
else if (argument === 'remove') { notes.remove(args.title); }

else {console.log('wrong command');}