const fs = require("fs")
const chalk = require("chalk")

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((ele) => {
        return ele.title === title
    })
    
    if (!duplicateNote) {
        obj = {
            title: title,
            body: body
        }
        notes.push(obj)
        saveNotes(notes)
        console.log(chalk.green("Note Added Successfully"));
    } else {
        console.log(chalk.red("title already taken please use different title"));
    }
}


const removeNote = (title) => {
    const notes = loadNotes()
    const uniqueNotes = notes.filter((note) => note.title !== title)

    if (uniqueNotes.length !== notes.length) {
        saveNotes(uniqueNotes)
        console.log(chalk.green("Note removed successfully.."));
    }
    else {
        console.log(chalk.red.bold(`note with the title ${title} is not there`));
    }
}


const listNotes = () => {
    const notes = loadNotes()
    if (notes.length != 0) {
        console.log(chalk.bold.inverse("Your Note's titles are listed below.."));
        notes.forEach((ele) => {
            console.log(ele.title);
        })
    }
    else {
        console.log(chalk.red("Sorry no notes there...."));
    }
}


const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((ele) => ele.title === title)
    if (note) { 
        console.log(chalk.green(`${note.title}`) + " " + chalk.yellow(`${note.body}`));
    } else {
        console.log(chalk.red("No match found..."));
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}