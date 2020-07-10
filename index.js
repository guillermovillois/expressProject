const express = require('express');
const path = require('path');
const members = require('./members');

const app = express();

const logger = (req, res, next) => {
    console.log('Hello');
    next();
}

//init middleware
app.use(logger);
// get members
app.get('/api/members', (req, res) => res.json(members))
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     // res.send('<h1>Hello World Guille!</h1>')
// })

// static folder
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Port started at PORT ${PORT}`))