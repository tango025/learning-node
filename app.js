const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js')

const argument = process.argv[2];

if(argument === 'read'){ console.log('read');}
else if(argument === 'list'){ console.log('list');}
else if(argument === 'add') {console.log('add');}
else if (argument === 'remove') { console.log('remove'); }

else {console.log('wrong command');}