import { Table } from "../db-utils/Table";
import { Project } from "../models/Project";

const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get("/", function (req: any, res: any) {
    const params = req.query;
    const Projects = new Table<Project>('Project');
    res.json({ data: Projects.getAllRows() });
});

module.exports = router;
