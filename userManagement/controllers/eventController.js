import { EventModel } from "../models/eventModel.js";


export const getEvents = async (req, res, next) => {
    try {
        const allEvents = await EventModel.find();
        res.json(allEvents);
    } catch (error) {
        next(error);
    }
}

export const getOneEvent = (req, res, next) => {
    try {
        const singleEvent = EventModel.findById(req.params.id);
        res.json(singleEvent);
    } catch (error) {
        next(error);
    }
}

export const addEvent = async (req, res, next) => {
    try {
        const { eventName, date, location, flier } = req.body;
        if(!eventName || !date || !location || !flier) {
            return res.status(400).json({ message: "All fields required" });
        }
        const addYourEvent = await EventModel.create({
            eventName,
            date,
            location,
            flier
        });
        res.status(201).json(addYourEvent);
    } catch (error) {
        next(error);
    }
}

export const updateEvent = (req, res, next) => {
    try {
        const eventUpdate = req.body
        const newEvent = EventModel.findByIdAndUpdate(req.params.id, eventUpdate, { new: true });
        res.json(newEvent);
    } catch (error) {
        next(error);
    }
}

export const deleteEvent = (req, res, next) => {
    try {
        const deleteYourEvent = req.body;
        const deletedEvent = EventModel.findByIdAndDelete(req.params.id, deleteYourEvent, { new: true });
        res.json(deletedEvent);
    } catch (error) {
        next(error);
    }
}