const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);

class dbNotes {
    readDb() {
        return readFileAsync('db/db.json', 'utf-8'); 
    }

    getAllNotes(){
            return this.readDb().then((notes) => {
                let parsedDbNotes; 

               try {
                   parsedDbNotes = [].concat(JSON.parse(notes))
               } catch (error) {
                   parsedDbNotes =[]
               }

               return parsedDbNotes
            })
    }
}

module.exports = new dbNotes();