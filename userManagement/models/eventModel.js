import { Schema, model } from "mongoose";

const eventSchema = new Schema({
    eventName: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    flier: { type: String }
}, {
    timestamps: true
});

export const EventModel = model("Event", eventSchema);