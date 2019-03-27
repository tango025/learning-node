const fs = require('fs');

var fetchNotes  = ()=>{
    try {
        return JSON.parse(fs.readFileSync('notes-Data.json'));
    } catch{
        return [];
    }
}


var saveNotes = (notes)=>{
    fs.writeFileSync('notes-Data.json', JSON.stringify(notes));
}

var addNote = (title,body) =>{
    // console.log(fs.readFileSync('notes-Data.json').length);
var notes = fetchNotes();
var note = {
    title,
    body
}
    var duplicateNote = notes.filter((note) => note.title === title);
    if(duplicateNote.length===0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}
var getAll = () => {
    console.log("Notes list");
}
var remove = (title)=>{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=>note.title != title);
    saveNotes(filteredNotes);
    return notes.length !==filteredNotes.length;
    
}

var readNote =(title) =>{
    var notes = fetchNotes();
    var noteToBeRead = notes.filter((note) =>note.title === title);
    return noteToBeRead[0];
}
var logNote =(note)=>{
    return `title : ${note.title} \n Body : ${note.body}`
}
module.exports = {
    addNote,
    getAll,
    remove,
    readNote,
    logNote
}