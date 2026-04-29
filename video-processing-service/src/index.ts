import express from "express";
import { log } from "node:console";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Testing!")
});

app.listen(port, () => {
    log(
        `Video processing service listening at http://localhost:${port}`);
});