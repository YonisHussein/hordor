const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static('public'));

const PORt = process.env.PORT || 3001;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/assets/index.html'));
}); 

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});