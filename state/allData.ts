import { default as fsWithCallbacks } from 'fs'

const fs = fsWithCallbacks.promises;

const dbPath = './db.json';
export let data: any = {};

export function getAllData() {
    fs.readFile(dbPath).then((e: any) => data = e);
}
export function updateFileState(){
    fs.writeFile(dbPath, JSON.stringify(data)).then(console.log).catch(console.error);
}
