import { Router } from "express";

const ticketRouter = Router();

ticketRouter.get("/tickets", getTickets);


export default ticketRouter;