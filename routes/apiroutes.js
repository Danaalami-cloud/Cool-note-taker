const existingNotes = require('../data/existingNotes');
const newNotes = require('../data/newNotes');
const fs = require('fs');

module.exports = (app) => {
    app.get('/api/existing', (req, res) => res.json(existingNotes));
    app.get('/api/newnotes', (req, res) => res.json(newNotes));

    app.post('/api/newNotes', (req, res) => {
        if (newNotes.length)
    }