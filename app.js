const fs = require('fs');
const dbPath = './db.json';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`listen on port ${port}`));

app.get('/', (req, res) => {
    const getParams = req.query;
    res.json({ success: true });
})

module.exports = app;

