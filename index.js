const express = require('express')
const app = express()
const path = require('path');

require('dotenv').config(); 

const router = (global.router = (express.Router()));
const port = process.env.PORT || 5000; 
var cors = require('cors')

// app.use(cors());
app.use(express.json());

app.use('/api/application', require('./routes/application.js'));
app.use(router);

app.use(express.static(path.join(__dirname, 'client/build'))); 

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`NitsMun server listening at http://localhost:${port}`);
});
