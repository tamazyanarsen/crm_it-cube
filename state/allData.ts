import { default as fsWithCallbacks } from 'fs'
import { Table } from "../db-utils/Table";
import { User } from "../models/User";

const fs = fsWithCallbacks.promises;
const { v4: uuidv4 } = require('uuid');

const dbPath = './db.json';
export let data: any = {};

function checkAdmin(): boolean {
    return !!(new Table<User>('User').findRowByFieldName('name', 'admin'));
}

export function getAllData() {
    fs.readFile(dbPath).then((e: any) => {
        data = JSON.parse(Buffer.from(e).toString());
        if (!checkAdmin()) {
            new Table<User>('User').addRow({
                id: uuidv4(),
                name: 'admin',
                role: 'admin',
                email: 'admin',
                password: 'admin'
            });
        }
    });

}

export function updateFileState() {
    fs.writeFile(dbPath, JSON.stringify(data))
        .then(e => console.log('db file state updated'))
        .catch(e => console.log('error:', e));
}
