const yargs = require("yargs")
const notes = require("./notes.js");


//Create add command
yargs.command({
    command: "add",
    describe: "Add a new note..",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Body of Note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})


//Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note..",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})


//Create List command
yargs.command({
    command: "list", 
    describe: "List of the notes..",
    handler() {
        notes.listNotes()
    }
})


//Create Read command
yargs.command({
    command: "read",
    describe: "Read a note..",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse()