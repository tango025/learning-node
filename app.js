const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js')
// const user = os.userInfo();
// fs.appendFile('greeting.txt', `hello ${user.username} ! `, function (err) {
//     if (err) console.log('error');
// })

console.log(_.isString(2));
console.log(_.uniq(['a','b','b',2,2]));
console.log(notes.addNote()); 