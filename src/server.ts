import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express, { Express } from "express";
import routes from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/public", express.static(path.resolve(__dirname, "../public")));
app.use("/api", routes);

app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});

export default app;
