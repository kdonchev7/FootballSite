// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();

// const uri =
//     'mongodb+srv://myproject:FootballSite@footballsitecluster.hdqkenu.mongodb.net/';
// async function connect() {
//     try {
//         await mongoose.connect(uri);
//         console.log("Connected to MongoDB");
//         app.listen(27017, () => {
//             console.log("Server started on port 3000");
//         });
//     } catch (error) {
//         console.error(error);
//     }
// }

// connect()
// app.use('/',);

// app.listen(3000, () => {
//     console.log("Server started on port 3000");
// });

let app = require('express');
let application = app();
let cors = require('cors');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let User = require('./src/models/User.js')

let post = [
    {'message1': 'Welcome to start Angular '},
    {'message2': '& Node JS '},
    {'message3': 'Using Angular material'}
]

application.use(cors())
application.use(bodyParser.json())

mongoose.connect('mongodb+srv://myproject:FootballSite@footballsitecluster.hdqkenu.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if (!error) {
        console.log('Connected to database!');
    }
})

application.get('/post', (req, res) => {
    res.send(post);
})

application.post('/auth/register', (req, res) => {
    console.log(req.body);
    let userData = req.body;

    let user = new User(userData);
    user.save((error, result) => {
        if (error) {
            console.log('userData', userData);
        }
        console.log('Saved successfully!');
        res.sendStatus(200)
    })
})


application.get('/', (req, res) => {
    res.send(mongoose.colle)
})

application.listen(3000);