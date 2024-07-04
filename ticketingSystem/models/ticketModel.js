import { Schema, Types, model } from "mongoose";

const ticketShema = new Schema({
    event: { type: Types.ObjectId, ref: "Event", required: true },
    price: { type: Number, required: true },
    purchaser: { type: Types.ObjectId, ref: "user"},
    status: { type: String, enum: ["available", "reserved", "sold"], default: "available" }
}, {
    timestamps: true
});

export const TicketModel = model("ticket", ticketShema);