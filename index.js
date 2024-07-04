import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import ticketRouter from "./ticketingSystem/routers/ticketRouter.js";
import notificationRouter from "./ticketingSystem/routers/notificationRouter.js";
import eventRouter from "./userManagement/routers/eventRouter.js";
import expressOasGenerator from "express-oas-generator";

await mongoose.connect(process.env.MONGO_URL);

const app = express();
// expressOasGenerator.handleResponses(app, {
//     alwaysServeDocs: true,
//     tags: ["events", "notifications"],
//     mongooseModels: mongoose.modelNames()
// });

/////////////

expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    swaggerUIPath: "/api-docs",
    swaggerSpecFilePath: "/api-docs/swagger.json",
    swaggerFilePath: "/api-docs/swagger.yaml",
    tags: ["events", "notifications"],
    mongooseModels: mongoose.modelNames()
});

expressOasGenerator.handleRequests();

// Routes
app.use("/api/events", eventRouter);

/////////

app.use(express.json());

// expressOasGenerator.handleRequests();
// app.use((req, res) => res.redirect("/api-docs/"));

app.use(ticketRouter);
app.use(notificationRouter);
app.use(eventRouter);


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});