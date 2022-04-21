import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const a = 3;
console.log(a)

app.get("/", (_req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

