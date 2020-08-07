import { Table } from "./db-utils/Table";
import { User } from "./models/User";
import { getAllData } from "./state";

getAllData();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`listen on port ${port}`));

app.get('/', (req: any, res: any) => {
    const getParams = req.query;
    const User = new Table<User>('User');
    User.findRowById('1');
    res.json({ success: true });
})
