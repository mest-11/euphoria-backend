import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import ticketRouter from "./ticketingSystem/routers/ticketRouter.js";
import notificationRouter from "./ticketingSystem/routers/notificationRouter.js";
import eventRouter from "./userManagement/routers/eventRouter.js";
import expressOasGenerator from "express-oas-generator";
import cors from "cors";

await mongoose.connect(process.env.MONGO_URL);

const app = express();
app.use(cors());

expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    swaggerUIPath: "/api-docs",
    swaggerSpecFilePath: "./api-docs/swagger.json",
    swaggerFilePath: "./api-docs/swagger.yaml",
    tags: ["events", "notifications"], 
    mongooseModels: mongoose.modelNames()
});

// apply middlewares
app.use(express.json());
app.use(express.static("euphoria"));

app.get("/", (req, res) => {
    res.json("Welcome Home");
});

app.post("/login", (req, res) => {
    res.json("login Successful1;")
});

app.delete("/login", (req, res) => {
    res.json("Deleted File");
});

app.patch("/login", (req, res) => {
    res.json("File Updated");
});

// use routes
app.use(ticketRouter);
app.use(notificationRouter);
app.use(eventRouter);


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});