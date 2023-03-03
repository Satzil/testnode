const yargs = require('yargs');
const notes = require('./notes.js');


yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title:{
            describle:'new title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body);
    }

})

yargs.command({
    command:'remove',
    describe:"Note to remove",
    builder:{
        title:{
            describe:"note to remove",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removenote(argv.title);
    }
})

yargs.parse();