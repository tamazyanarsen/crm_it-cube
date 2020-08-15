import { Table } from "../db-utils/Table";
import { Project } from "../models/Project";

const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get("/", function (req: any, res: any) {
    // const params = req.query;
    const Projects = new Table<Project>('Project');
    res.json(Projects.getAllRows());
});

router.post("/", (req: any, res: any) => {
    const data = req.body;
    const Projects = new Table<Project>('Project');
    res.json(Projects.addRow(data));
});

router.get("/:id", (req: any, res: any) => {
    const Projects = new Table<Project>('Project');
    res.json(Projects.findRowById(req.params.id));
});

module.exports = router;
