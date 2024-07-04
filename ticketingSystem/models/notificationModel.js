import { Schema, model } from "mongoose";

const notificationSchema = new Schema({
    message: { type: String }
}, {
    timestamps: true
});

export const NotificationModel = model("notification", notificationSchema);