const util = require("util");
const fs = require("fs");
const uuid = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class dbNotes {
  readDb() {
    return readFileAsync("db/db.json", "utf-8");
  }

  writeDb(newNotes) {
    return writeFileAsync("db/db.json", JSON.stringify(newNotes));
  }

  getAllNotes() {
    return this.readDb().then((notes) => {
      let parsedDbNotes;

      try {
        parsedDbNotes = [].concat(JSON.parse(notes));
      } catch (error) {
        parsedDbNotes = [];
      }

      return parsedDbNotes;
    });
  }

  addNewNote(newNote) {
    const { title, text } = newNote;
    const noteObject = {
      title,
      text,
      id: uuid.v4(),
    };

    return this.getAllNotes()
      .then((notes) => 
      
        [...notes, noteObject]
      )
      .then((notesArray) => {
        this.writeDb(notesArray);
     
      })
      .then(() => noteObject);
  }
}

module.exports = new dbNotes();
