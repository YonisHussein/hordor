const fs = require('fs');
const path = require('path');

const express = require('express');
const { parse } = require('path');
const { json } = require('body-parser');
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static('public'));

const PORt = process.env.PORT || 3001;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
}); 

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.post("/api/notes", (req, res) => {
    req.body.id = uuid();
    const newNotes = req.body
});

fs.readFile('./db /db.json', 'utf-8', (err, data) => {
    if(err) {
        console.error(err);
    }
    else {
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newnote);
        fs.writeFile('./db/db.json', JSON.stringify(parsedNotes, null, 4))
    }
    res.sendFile(path.join(__dirname, 'public/notes.html'));

});





app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});