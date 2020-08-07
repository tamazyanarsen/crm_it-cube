import { default as fsWithCallbacks } from 'fs'
import { Column } from "../models/Column";

const fs = fsWithCallbacks.promises;

const dbPath = './db.json';

export class Table {
    name: string;
    columns: Column[];
    data: any = {};

    constructor(name: string, columns: Column[] = []) {
        this.name = name;
        this.columns = columns;
        fs.readFile(dbPath)
            .then(e => {
                this.data = JSON.parse(e.toString());
                this.createTable(this.name);
                fs.writeFile(dbPath, JSON.stringify(this.data)).then(console.log).catch(console.error);
            })
            .catch(console.error);
    }

    createTable(name: string) {
        if (!(name in this.data)) {
            this.data[name] = [];
        }
    }
}
