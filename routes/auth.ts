import { Table } from "../db-utils/Table";
import { User } from "../models/User";

const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

function isUserLoggedIn(id: string): boolean {
    return !!(new Table<User>('User').findRowById(id));
}

function isToken(headers: any): boolean {
    return !!headers.token;
}

router.get("/isAuth", function (req: any, res: any) {
    const params = req.query;
    res.json({ isAuth: isUserLoggedIn(params.token) });
});

router.post('/login', (req: any, res: any) => {
    const { email, password } = req.body;
    const User = new Table<User>('User');
    const user = User.findRowByFieldName('email', email);
    const answer: any = {};
    if (user && user.password === password) {
        answer.token = user.id;
    } else {
        answer.error = 'Неправильно введены данные';
    }
    res.json(answer);
});

module.exports = router;
