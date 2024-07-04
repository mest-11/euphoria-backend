import { Schema, model } from "mongoose";


const eventSchema = new Schema({
    eventName: { type: String, reuired: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    flier: { type: String, required: true }
}, {
    timestamps: true
});

export const EventModel = model("event", eventSchema);