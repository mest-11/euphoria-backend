import { Router } from "express";
import { getNotification } from "../controllers/notificationController.js";


const notificationRouter = Router()

notificationRouter.get("/notifications", getNotification)

export default notificationRouter;