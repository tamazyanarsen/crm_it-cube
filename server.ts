import { Table } from "./db-utils/Table";
import { User } from "./models/User";
import { getAllData } from "./state";

getAllData();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
}));
app.listen(port, () => console.log(`listen on port ${port}`));

function isUserLoggedIn(id: string) {
    return !!(new Table<User>('User').findRowById(id));

}

app.get('/', (req: any, res: any) => {
    console.log(Object.keys(req));
    console.log(req.headers)
    console.log(req.query);
    res.json({ error: null });
})
