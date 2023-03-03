const fs = require('fs');


const addNote=function(title,body){
    const notes = loadnotes();
    const dn = notes.filter(function(note){
        return note.title === title;
    });

    debugger
    if(dn.length === 0){
        notes.push({
            title:title,
            body:body 
         })
         savenotes(notes);
         console.log("added successfully");
    }else{
        console.log("note already taken");
    }
    
}

const removenote = (title)=>{
    const data = loadnotes();
    const note = data.filter((note)=>{
        return note.title !== title;
    });
    if(note.length === data.length){
        console.log("note is not present");
    }else{
        savenotes(note);
        console.log("note successfully removed");
    }

}

const savenotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
} 

const loadnotes = function(){
    try{
        const databuffer = fs.readFileSync('notes.json');
        const dataJSON = databuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    }catch(e){
        return [];
    }
    
}

module.exports = {
    addNote:addNote,
    removenote:removenote
}