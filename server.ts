import { Table } from "./db-utils/Table";

const fs = require('fs');
const dbPath = './db.json';
const db = fs.open(dbPath, 6, (err: any, fd: number) => console.log(err, fd));
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`listen on port ${port}`));

app.get('/', (req: any, res: any) => {
    const getParams = req.query;
    // const t = new Table('sdfjksdf');
    res.json({ success: true });
})
