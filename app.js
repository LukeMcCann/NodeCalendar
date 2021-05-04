'use strict';

require('dotenv').config();

const port = process.env.PORT || 3000;

const app = require('express')();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});