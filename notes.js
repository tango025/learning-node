const fs = require('fs');
addNote = (title,body) =>{
    // console.log(fs.readFileSync('notes-Data.json').length);
var notes = [];

notes.push({
    title,
    body
});
    if (fs.readFileSync('notes-Data.json').length>0){
        var noteString = JSON.parse(fs.readFileSync('notes-Data.json'));
        noteString.push({
            title,
            body   
        })
        fs.writeFileSync('notes-Data.json', JSON.stringify(noteString));    
    }else{
        fs.writeFileSync('notes-Data.json', JSON.stringify(notes));    
    }
}
getAll = () => {
    console.log("Notes list");
}
remove = (title)=>{
    console.log('removed',title );
}
readNote =(title) =>{
    console.log('Note:',title);
}
module.exports = {
    addNote,
    getAll,
    remove,
    readNote
}