import { getAllData } from "./state";

getAllData();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const cors = require('cors')

app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
}));

const auth = require('./routes/auth');
app.use('/auth', auth);

const projects = require('./routes/projects');
app.use('/projects', projects);

app.get('/', (req: any, res: any) => {
    console.log(Object.keys(req));
    console.log(req.headers);
    console.log(req.query);
    res.json({ error: null });
});

app.listen(port, () => console.log(`listen on port ${port}`));

module.exports = app;
