import { Router } from "express";
import { addEvent, deleteEvent, getEvents, getOneEvent, updateEvent } from "../controllers/eventController.js";
import { remoteUpload } from "../../middleware/euphoria.js";

const eventRouter = Router();

eventRouter.get("/events", getEvents);
eventRouter.get("/events/:id", getOneEvent);
eventRouter.post("/events", remoteUpload.single("image"), addEvent);
eventRouter.patch("/events/:id", updateEvent);
eventRouter.delete("/events/:id", deleteEvent);

export default eventRouter;
