import { default as fsWithCallbacks } from 'fs'
import { Column } from "../models/Column";
import * as ld from 'lodash';
import { data, updateFileState } from '../state';

const { v4: uuidv4 } = require('uuid');

const fs = fsWithCallbacks.promises;

const dbPath = './db.json';

export class Table<T> {
    name: string;
    columns: Column[];
    data: any = null;

    constructor(name: string, columns: Column[] = []) {
        this.name = name;
        this.columns = columns;
        if (!(this.name in data)) {
            data[this.name] = [];
        }
        this.data = data[this.name];
    }

    findRowById(id: string): T {
        console.log(this.data);
        return this.data.find((e: any) => e.id === id);
    }

    addRow(item: T) {
        this.data.push({ ...item, id: uuidv4() });
        updateFileState();
    }

    updateRow(item: T) {
        const currentItem: any = item;
        ld.merge(this.data.find((e: any) => e.id === currentItem.id), currentItem);
        updateFileState();
    }
}
