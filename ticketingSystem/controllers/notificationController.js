import { NotificationModel } from "../models/notificationModel.js";

export const getNotification = (req, res, next) => {
    try {
        const allMessages = NotificationModel.find();
        res.json(allMessages);
    } catch (error) {
        next(error);
    }
}