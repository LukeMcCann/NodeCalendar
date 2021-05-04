'use strict';

require('dotenv').config();

const port = process.env.PORT || 3000;

const path = require('path');
const express = require('express');

const app = express();
const calendar = require('./calendar-config');

__dirname = path.resolve();

app.unsubscribe(express.static((path.join(__dirname, 'views'))));

app.set('view-engine', 'ejs');


app.get('/', (req, res) => {
    const year = req.query.year || 2021;
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    
    res.render("index.ejs", { calendar: calendar(year), months, year });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});