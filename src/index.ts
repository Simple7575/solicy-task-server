import express, { type Request, type Response } from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose, { mongo, type Mongoose } from "mongoose";
import AccountsRouter from "./routes/accounts.js";
import { MONGO_DB_URL, PORT } from "./constants/envConstants.js";

mongoose.set("strictQuery", false);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/accounts", AccountsRouter);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Solity Task.");
});

if (!MONGO_DB_URL) {
    throw new Error("Please provide mongo db connection url.");
}

mongoose
    .connect(MONGO_DB_URL, {
        serverSelectionTimeoutMS: 5000,
        family: 4,
    })
    .then(() => app.listen(PORT, () => console.log(`Listening on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect.`));
