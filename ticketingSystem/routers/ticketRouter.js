import { Router } from "express";
import { getNotification } from "../controllers/notificationController.js";

const ticketRouter = Router();

ticketRouter.get("/tickets", getNotification);


export default ticketRouter;