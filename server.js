const fs = require('fs');
const path = require('path');

const express = require('express');
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
    console.info(`${req.method} request recieved to add a new note`)
    const {title, text} = req.body;
    if(titles&&text){
        const newNote = {
            title,
            text,
        };
        fs.readFile('./db/dbjson', 'utf8', (err,data) => {
            if(err){
                console.error(err);
            }
            else{
                const parsedNote = JSON.parse(data);
                parsedNote.push(newNote);

                fs.writeFile(
                    './db/db.json',
                    JSON.stringify(parsedNote),
                    (writeErr) =>
                    writeErr
                    ?console.error(writeErr)
                    :console.info('Successfully updated notes!')

                );
            };
        });
    };
});
const response = {
    status:'success',
    data:req.body,
};



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});